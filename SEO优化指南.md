# SEO 及 AI 收录优化指南

## 我已经帮你做好的

### 1. 技术 SEO
- 完整的 `<title>` 和 `<meta description>`
- `<meta keywords>` 覆盖核心搜索词
- `canonical` 标签防重复内容
- Open Graph / Twitter Card 社交分享标签
- `robots.txt` — 告诉搜索引擎哪些可以爬
- `sitemap.xml` — 把所有页面提交给搜索引擎

### 2. 结构化数据（JSON-LD）
这是让 **AI 和搜索引擎理解你网站内容** 的关键。我已经加入了：

| 类型 | 作用 |
|------|------|
| **ProfessionalService** | 告诉 Google/AI 你是一家深圳的采购代理公司，包括地址、电话、邮箱、服务范围、语言 |
| **FAQPage** | FAQ 问答会被搜索引擎直接展示在搜索结果里，AI 也会优先引用 |

这些结构化数据可以让你的网站在 Google 搜索结果中显示 **富媒体摘要**（评分、电话按钮、FAQ 折叠），也会让 AI 模型（ChatGPT、Claude、Gemini 等）在回答"深圳采购代理"相关问题时更容易引用你的内容。

### 3. 图片优化
- 所有图片加了描述性 `alt` 文本

---

## 你需要做的

### 1. 提交网站到搜索引擎（免费）

**Google Search Console：**
1. 去 [search.google.com/search-console](https://search.google.com/search-console)
2. 登录 Google 账号，输入你的域名
3. 按提示验证域名所有权（Cloudflare 有快捷验证方式）
4. 提交 `sitemap.xml`（输入 `sitemap.xml` 点提交）
5. 接下来几天到几周，你的页面会慢慢被 Google 收录

**Bing Webmaster Tools（也管 Yahoo 和 DuckDuckGo）：**
1. 去 [bing.com/webmasters](https://bing.com/webmasters)
2. 同样验证域名，提交 sitemap

### 2. 持续产出内容

搜索引擎喜欢**持续更新的、有价值的原创内容**。作为采购代理，你可以定期写：

| 内容类型 | 例子 | 收录价值 |
|----------|------|----------|
| **采购指南** | "How to Source Products from China: A Step-by-Step Guide" | 高——长期搜索量 |
| **品类知识** | "Sourcing Electronics from Shenzhen: What You Need to Know" | 高——精准流量 |
| **工厂验厂** | "What to Look for During a Factory Audit in China" | 中——专业信任 |
| **物流攻略** | "FOB vs CIF vs DDP: Which Shipping Term Should You Choose?" | 中——实用信息 |
| **客户案例** | "How We Helped a US Buyer Save 30% on Packaging" | 高——转化证据 |

### 3. 让 AI 更好地收录你

AI 模型在训练时和回答问题时，主要从这些来源获取信息：

- **你的网站内容**（结构化、清晰的页面）—— ✅ 已做好
- **外部引用**（其他网站提到你）—— 可以去 **LinkedIn、外贸论坛、Medium** 发帖
- **Google 搜索结果**（AI 会实时搜索）—— 所以做好 SEO 就等于做好了 AI 收录

### 4. 获取反向链接（重要）

在其他网站上放你的链接会大幅提升排名：

- 在 LinkedIn 个人资料加上网站链接
- 在 Alibaba / TradeIndia 等 B2B 平台的公司介绍里放链接
- 在 Medium / Substack 写采购相关文章，文末附链接
- 请合作过的客户在他们的网站上提一句

---

## 关键优先级

| 优先级 | 做什么 | 预计效果 |
|--------|--------|----------|
| 1 | 提交到 Google Search Console | 基础收录 |
| 2 | 写 2-3 篇采购指南文章 | 3-6 个月开始看到搜索流量 |
| 3 | LinkedIn 等平台建个人品牌 | 长期品牌曝光 |
| 4 | 获取反向链接 | 持续提升排名 |

---

## 常见问题

**问：网站上线后多久能在 Google 搜到？**
答：快的一周，慢的一两个月。提交 Search Console 后会加速。

**问：AI（如 ChatGPT）会收录我的网站吗？**
答：会的。AI 的训练数据包含公开网页，也会在回答问题时实时搜索。你的结构化数据（JSON-LD）会帮助 AI 更准确地理解你是什么公司、提供什么服务。

**问：需要请 SEO 公司吗？**
答：初期不需要。按上面的一步步做就行。等网站流量起来后，如果觉得需要更深入的优化，再考虑。
