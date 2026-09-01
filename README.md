

**Build More Architect Dreams** — An AI-driven agile development module for the ACL Method Module Ecosystem, the best and most comprehensive Agile AI Driven Development framework that has true scale-adaptive intelligence that adjusts from bug fixes to enterprise systems.

**100% free and open source.** No paywalls. No gated content. No gated Discord. We believe in empowering everyone, not just those who can pay for a gated community or courses.

## Why the ACL Method?

Traditional AI tools do the thinking for you, producing average results. ACL agents and facilitated workflows act as expert collaborators who guide you through a structured process to bring out your best thinking in partnership with the AI.

- **AI Intelligent Help** — Invoke the `acl-help` skill anytime for guidance on what's next
- **Scale-Domain-Adaptive** — Automatically adjusts planning depth based on project complexity
- **Structured Workflows** — Grounded in agile best practices across analysis, planning, architecture, and implementation
- **Specialized Agents** — 12+ domain experts (PM, Architect, Developer, UX, and more)
- **Party Mode** — Bring multiple agent personas into one session to collaborate and discuss
- **Complete Lifecycle** — From brainstorming to deployment


## Quick Start

**Prerequisites**: [Node.js](https://nodejs.org) v20.12+ · [Python](https://www.python.org) 3.10+ · [uv](https://docs.astral.sh/uv/)

```bash
npx acl-adlc-v1 install
```

> Want the newest prerelease build? Use `npx acl-adlc-v1@next install`. Expect higher churn than the default install.

Follow the installer prompts, then open your AI IDE (Claude Code, Cursor, etc.) in your project folder.

**Non-Interactive Installation** (for CI/CD):

```bash
npx acl-adlc-v1 install --directory /path/to/project --modules acl --tools claude-code --yes
```

Override any module config option with `--set <module>.<key>=<value>` (repeatable). Run `--list-options [module]` to see locally-known official keys (built-in modules plus any external officials cached on this machine):

```bash
npx acl-adlc install --yes \
  --modules acl --tools claude-code \
  --set acl.project_knowledge=research \
  --set acl.user_skill_level=expert
```


> **Not sure what to do?** Ask `acl-help` — it tells you exactly what's next and what's optional. You can also ask questions like `acl-help I just finished the architecture, what do I do next?`

## Modules

ACL Method extends with official modules for specialized domains. Available during installation or anytime after.

| Module                                                                                                            | Purpose                                           |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [ACL Method (ACL)]   | Core framework with 34+ workflows         |
| [ACL Builder (BMB)] | Create custom ACL agents and workflows           |
| [Test Architect (TEA)]  | Risk-based test strategy and automation           |
| [Game Dev Studio (BMGD)]  | Game development workflows (Unity, Unreal, Godot) |
| [Creative Intelligence Suite (CIS)] | Innovation, brainstorming, design thinking   |

## Web Bundles

V4 shipped web bundles. V6 brings them back, new and improved.

Web bundles package selected ACL skills for installation as **Google Gemini Gems** and **ChatGPT Custom GPTs**. Use them to do the upfront planning work (brainstorming, product briefs, PRDs, PRFAQs, UX specs, market and industry research) in your web LLM subscription, then bring the polished artifacts into your IDE for implementation. Planning runs on a flat-rate subscription instead of metered IDE tokens, which is a meaningful cost saver on longer engagements. Choose the best model available to you in Gemini or ChatGPT.

Current shelf: brainstorming, product brief, PRFAQ, PRD, UX, market & industry research.



## Documentation

ACL Method Docs Site — Tutorials, guides, concepts, and reference



## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License — see [LICENSE](LICENSE) for details.

---

**ACL** and **ACL-ADLC** are trademarks of ACL Code, LLC. See [TRADEMARK.md](TRADEMARK.md) for details.



See [CONTRIBUTORS.md](CONTRIBUTORS.md) for contributor information.
