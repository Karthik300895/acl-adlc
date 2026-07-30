

**筑梦架构（Build More Architect Dreams）** —— 简称 “ACL 方法”，面向 ACL 模块生态的 AI 驱动敏捷开发方法。它会随项目复杂度调整工作深度，从日常 bug 修复到企业级系统建设都能适配。

**100% 免费且开源。** 没有付费墙，没有封闭内容，也没有封闭 Discord。我们希望每个人都能平等获得高质量的人机协作开发方法。

## 为什么选择 ACL 方法？

传统 AI 工具常常替你思考，结果往往止于“能用”。ACL 通过专业智能体和引导式工作流，让 AI 成为协作者：流程有结构，决策有依据，产出更稳定。

- **AI 智能引导** —— 随时调用 `acl-help` 获取下一步建议
- **规模与领域自适应** —— 按项目复杂度自动调整规划深度
- **结构化工作流** —— 覆盖分析、规划、架构、实施全流程
- **专业角色智能体** —— 提供 PM、架构师、开发者、UX 等 12+ 角色
- **派对模式** —— 多个智能体可在同一会话协作讨论
- **完整生命周期** —— 从头脑风暴一路到交付上线



## 快速开始

**先决条件**：[Node.js](https://nodejs.org) v20+

```bash
npx acl-adlc install
```

> 想体验最新预发布版本？可使用 `npx acl-adlc@next install`。它比默认版本更新更快，也可能更容易发生变化。

按照安装程序提示操作，然后在项目文件夹中打开你的 AI IDE（Claude Code、Cursor 等）。

**非交互式安装**（用于 CI/CD）：

```bash
npx acl-adlc install --directory /path/to/project --modules acl --tools claude-code --yes
```

> **不确定下一步？** 直接问 `acl-help`。它会告诉你“必做什么、可选什么”，例如：`acl-help 我刚完成架构设计，接下来做什么？`

## 模块

ACL 可通过官方模块扩展到不同专业场景。你可以在安装时选择，也可以后续随时补装。

| 模块                                                                                                                | 用途                           |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| ACL Method (ACL) | 核心框架，内含 34+ 工作流         |
| ACL Builder (BMB)   | 创建自定义 ACL 智能体与工作流     |
| Test Architect (TEA)| 基于风险的测试策略与自动化         |
| Game Dev Studio (BMGD)| 游戏开发工作流（Unity/Unreal/Godot） |
| Creative Intelligence Suite (CIS) | 创新、头脑风暴、设计思维           |

## Web Bundles（网页端 Skill 包）

V4 版本首次推出了 Web Bundles，而在 V6 中，它们以全新的面貌重磅回归！

Web Bundles 将精选的 ACL Skills 打包，方便你将其直接安装为 **Google Gemini Gems** 或 **ChatGPT Custom GPTs**。你可以利用网页端 LLM 的订阅服务完成前期的规划工作（头脑风暴、产品简报、PRD、PRFAQ、UX 规范、市场与行业研究），然后将整理好的产出物导入 IDE 中直接进行代码落地。在网页端进行前期规划采用固定订阅制，而非按 Token 计费的 IDE 模式，这对于长周期项目来说能够显著降低成本。你可以灵活选择 Gemini 或 ChatGPT 中效果最好的模型。

目前已上架功能：头脑风暴、产品简报、PRFAQ、PRD、UX 规范、市场与行业研究。

## 文档

ACL 方法文档站点 — 教程、指南、概念和参考




## 贡献

我们欢迎贡献！请参阅 [CONTRIBUTING.md](CONTRIBUTING.md) 了解指南。

## 许可证

MIT 许可证 — 详见 [LICENSE](LICENSE)。

---

**ACL** 和 **ACL-ADLC** 是 ACL Code, LLC 的商标。详见 [TRADEMARK.md](TRADEMARK.md)。



请参阅 [CONTRIBUTORS.md](CONTRIBUTORS.md) 了解贡献者信息。
