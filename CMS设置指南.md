# CMS 后台设置指南

这套系统让你登录 `yoursite.com/admin` 就能编辑网站内容，不需要碰代码。

---

## 第一步：创建 GitHub OAuth App（5 分钟）

1. 登录 GitHub，点右上角头像 → **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**
2. 填写：
   - **Application name**: `KaiSource CMS`
   - **Homepage URL**: 你的网站地址，比如 `https://www.kaisource.com`
   - **Authorization callback URL**: 你的 Worker 地址 + `/callback`，比如 `https://kaisource-oauth.你的用户名.workers.dev/callback`
3. 点 **Register application**
4. 记下 **Client ID** 和 **Client Secret**（点 Generate a new client secret）

---

## 第二步：部署 OAuth Worker（10 分钟）

1. 去 Cloudflare 后台 → **Workers & Pages** → **Create application** → **Create Worker**
2. 取个名字，比如 `kaisource-oauth`
3. 把 `_workers/oauth-worker.js` 的内容粘贴进去
4. 把开头的 `CLIENT_ID` 和 `CLIENT_SECRET` 填上你刚记下的值
5. 点 **Save and Deploy**
6. 记下 Worker 地址，比如 `https://kaisource-oauth.你的用户名.workers.dev`

---

## 第三步：更新 CMS 配置

1. 打开 `admin/config.yml`
2. 把第一行的 `repo` 改成你的 GitHub 仓库名（比如 `你的用户名/my-sourcing-site`）
3. 把 `base_url` 改成你 Worker 的地址

---

## 第四步：访问后台

部署上线后，在浏览器打开 `https://www.kaisource.com/admin`，点 **Login with GitHub** 授权登录即可。

---

## 你能在后台做什么

| 功能 | 说明 |
|------|------|
| **编辑首页 Hero 文案** | 改大标题、副标题、公司名 |
| **编辑联系信息** | 改邮箱、电话、地址 |
| **写博客文章** | Markdown 编辑器，写完自动生成页面 |
| **管理草稿** | 先保存草稿，预览满意后再发布 |

---

## 常见问题

**问：登录报错怎么办？**
答：检查 `config.yml` 里的 `repo` 和 `base_url` 是否正确，以及 Worker 里的 Client ID/Secret 是否填对。

**问：我可以加更多可编辑的字段吗？**
答：可以。告诉我你想改什么，我帮你加到配置里。

**问：这个 CMS 安全吗？**
答：登录用的是 GitHub OAuth，只有你授权的 GitHub 账号能登录。所有修改都会经过 Git 提交，可以随时回滚。
