// My Kai Sourcing - Cloudflare Worker
// 这个 Worker 会从 GitHub 拉取文件并提供服务

const GITHUB_RAW = "https://raw.githubusercontent.com/joyzhangyue/my-kaisourcing/main";

async function serveFile(path) {
  const url = GITHUB_RAW + path;
  const resp = await fetch(url);
  if (!resp.ok) return null;
  
  const contentType = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".xml": "application/xml",
    ".txt": "text/plain; charset=utf-8",
    ".md": "text/markdown; charset=utf-8",
    ".ico": "image/x-icon",
    ".json": "application/json",
  };
  
  const ext = path.substring(path.lastIndexOf("."));
  return new Response(resp.body, {
    headers: { "Content-Type": contentType[ext] || "application/octet-stream" }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // 根路径 → index.html
    if (path === "/") path = "/index.html";
    
    // 尝试请求文件
    const file = await serveFile(path);
    if (file) return file;
    
    // 如果找不到，返回 404
    return new Response("Page not found", { status: 404 });
  }
};
