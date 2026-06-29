// Cloudflare Worker — Decap CMS OAuth Gateway
// 部署到 Cloudflare Workers 后用于 GitHub 登录认证

const CLIENT_ID = "";  // ← 填入 GitHub OAuth App 的 Client ID
const CLIENT_SECRET = "";  // ← 填入 GitHub OAuth App 的 Client Secret

const GITHUB_OAUTH = "https://github.com/login/oauth";

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // 第一步：跳转到 GitHub 授权
  if (path === "/auth") {
    const redirectUri = url.origin + "/callback";
    const githubUrl = `${GITHUB_OAUTH}/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=repo,user`;
    return Response.redirect(githubUrl, 302);
  }

  // 第二步：GitHub 回调，获取 token
  if (path === "/callback") {
    const code = url.searchParams.get("code");
    const tokenRes = await fetch(`${GITHUB_OAUTH}/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code }),
    });
    const { access_token } = await tokenRes.json();

    // 返回一个自关闭页面，把 token 传给 CMS
    const page = `
      <html><body><script>
        (function() {
          function receiveMessage(e) {
            if (e.data === "authorizing:github") {
              e.source.postMessage("authorization:github:success:${access_token}", e.origin);
            }
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })()
      </script></body></html>`;
    return new Response(page, { headers: { "Content-Type": "text/html" } });
  }

  return new Response("OAuth Worker running. Use /auth to login.", { status: 200 });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
