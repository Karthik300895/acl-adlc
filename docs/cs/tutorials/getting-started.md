---
title: "Začínáme"
description: Nainstalujte ACL a vytvořte svůj první projekt
---

Vytvářejte software rychleji pomocí pracovních postupů řízených AI se specializovanými agenty, kteří vás provedou plánováním, architekturou a implementací.

## Co se naučíte

- Nainstalovat a inicializovat ACL Method pro nový projekt
- Používat **ACL-Help** — vašeho inteligentního průvodce, který ví, co dělat dál
- Zvolit správnou hloubku plánování pro vaši práci
- Postupovat fázemi od požadavků k fungujícímu kódu
- Efektivně používat agenty a pracovní postupy

:::note[Předpoklady]
- **Node.js 20.12+** — Vyžadováno pro instalátor
- **Git** — Doporučeno pro správu verzí
- **AI-powered IDE** — Claude Code, Cursor nebo podobné
- **Nápad na projekt** — I jednoduchý stačí pro učení
:::

:::tip[Nejsnadnější cesta]
**Instalace** → `npx acl-adlc install`
**Zeptejte se** → `acl-help what should I do first?`
**Tvořte** → Nechte ACL-Help vás provést workflow po workflow
:::

## Seznamte se s ACL-Help: Váš inteligentní průvodce

**ACL-Help je nejrychlejší způsob, jak začít s ACL.** Nemusíte si pamatovat workflow nebo fáze — prostě se zeptejte a ACL-Help:

- **Prozkoumá váš projekt** a zjistí, co už bylo uděláno
- **Ukáže vaše možnosti** na základě nainstalovaných modulů
- **Doporučí, co dál** — včetně prvního povinného úkolu
- **Odpoví na otázky** jako „Mám nápad na SaaS, kde začít?“

### Jak používat ACL-Help

Spusťte ho ve vašem AI IDE vyvoláním skillu:

```
acl-help
```

Nebo ho spojte s otázkou pro kontextové poradenství:

```
acl-help I have an idea for a SaaS product, I already know all the features I want. where do I get started?
```

ACL-Help odpoví s:
- Co je doporučeno pro vaši situaci
- Jaký je první povinný úkol
- Jak vypadá zbytek procesu

### Řídí i pracovní postupy

ACL-Help nejen odpovídá na otázky — **automaticky se spouští na konci každého workflow** a řekne vám přesně, co dělat dál. Žádné hádání, žádné prohledávání dokumentace — jen jasné pokyny k dalšímu povinnému workflow.

:::tip[Začněte zde]
Po instalaci ACL okamžitě vyvolejte skill `acl-help`. Detekuje, jaké moduly máte nainstalované, a navede vás ke správnému výchozímu bodu pro váš projekt.
:::

## Pochopení ACL

ACL vám pomáhá vytvářet software prostřednictvím řízených pracovních postupů se specializovanými AI agenty. Proces probíhá ve čtyřech fázích:

| Fáze | Název          | Co se děje                                              |
| ---- | -------------- | ------------------------------------------------------- |
| 1    | Analýza        | Brainstorming, průzkum, product brief nebo PRFAQ *(volitelné)* |
| 2    | Plánování      | Vytvoření požadavků (PRD nebo specifikace)              |
| 3    | Solutioning    | Návrh architektury podle potřeby                         |
| 4    | Implementace   | Implementace každé změny nebo naplánované story, volitelně pomocí automatizované orchestrace |

**[Otevřete Mapu pracovních postupů](../reference/workflow-map.md)** pro prozkoumání fází, workflow a správy kontextu.

Hloubka plánování je flexibilní:

| Hloubka | Nejlepší pro | Kontext před implementací |
| --- | --- | --- |
| **Přímá** | Jasné opravy, funkce, issues nebo existující specifikace | Záměr, issue nebo specifikace |
| **Produktové plánování** | Produkty, platformy a složité funkce | PRD a volitelný UX návrh |
| **Plné solutioning** | Koordinované, rizikové nebo mezisystémové iniciativy | PRD, UX, architektura, epicy, stories a sprint plán |

:::note
Nejde o oddělené implementační cesty. Všechny vstupy se sbíhají do `acl-quick-dev`; plánování pouze mění množství dostupného kontextu.
:::

## Instalace

Otevřete terminál v adresáři vašeho projektu a spusťte:

```bash
npx acl-adlc install
```

Pokud chcete nejnovější prereleaseový build místo výchozího release kanálu, použijte `npx acl-adlc@next install`.

Při výzvě k výběru modulů zvolte **ACL Method**.

Instalátor vytvoří dvě složky:
- `_acl/` — agenti, workflow, úkoly a konfigurace
- `_acl-output/` — prozatím prázdná, ale zde se budou ukládat vaše artefakty

:::tip[Váš další krok]
Otevřete vaše AI IDE ve složce projektu a spusťte:

```
acl-help
```

ACL-Help detekuje, co jste dokončili, a doporučí přesně, co dělat dál. Můžete mu také klást otázky jako „Jaké mám možnosti?“ nebo „Mám nápad na SaaS, kde začít?“
:::

:::note[Jak načítat agenty a spouštět workflow]
Každý workflow má **skill**, který vyvoláte jménem ve vašem IDE (např. `acl-prd`). Váš AI nástroj rozpozná název `acl-*` a spustí ho — nemusíte načítat agenty zvlášť. Můžete také vyvolat agentní skill přímo pro obecnou konverzaci (např. `acl-agent-pm` pro PM agenta).
:::

:::caution[Nové chaty]
Vždy začněte nový chat pro každý workflow. Tím předejdete problémům s kontextovými omezeními.
:::

## Krok 1: Zvolte hloubku plánování

Použijte z fází 1–3 tolik, kolik vaše práce potřebuje. U jasné, ohraničené práce můžete přejít přímo ke [Kroku 2](#krok-2-sestavte-svůj-projekt). **Pro každý workflow používejte nové chaty.**

:::tip[Kontext projektu (volitelné)]
Před začátkem zvažte vytvoření `project-context.md` pro dokumentaci vašich technických preferencí a pravidel implementace. Tím zajistíte, že všichni AI agenti budou dodržovat vaše konvence v průběhu celého projektu.

Vytvořte ho ručně na `_acl-output/project-context.md` nebo ho vygenerujte po architektuře pomocí `acl-generate-project-context`. [Zjistit více](../explanation/project-context.md).
:::

### Fáze 1: Analýza (volitelná)

Všechny workflow v této fázi jsou volitelné:
- **brainstorming** (`acl-brainstorming`) — Řízená ideace
- **průzkum** (`acl-deep-recon`) — Navrhne prompt pro váš vlastní nástroj hloubkového výzkumu, zpracuje hotovou zprávu do stručného shrnutí pro navazující práci, nebo výzkum provede přímo — tržní, doménový, technický, konkurenční, uživatelský a akademický — s ověřováním tvrzení a životním cyklem obnovy
- **product-brief** (`acl-product-brief`) — Doporučený základní dokument, když je váš koncept jasný
- **prfaq** (`acl-prfaq`) — Working Backwards výzva pro zátěžový test a zformování vašeho produktového konceptu

### Fáze 2: Plánování (podle potřeby)

Pro práci, které prospívá produktové plánování:
1. Vyvolejte **PM agenta** (`acl-agent-pm`) v novém chatu
2. Spusťte workflow `acl-prd` (`acl-prd`)
3. Výstup: `PRD.md`

:::note[UX Design (volitelné)]
Pokud má váš projekt uživatelské rozhraní, vyvolejte **UX-Designer agenta** (`acl-agent-ux-designer`) a spusťte UX design workflow (`acl-ux`) po vytvoření PRD.
:::

### Fáze 3: Solutioning (podle potřeby)

**Vytvoření architektury**
1. Vyvolejte **Architect agenta** (`acl-agent-architect`) v novém chatu
2. Spusťte `acl-architecture` (`acl-architecture`)
3. Výstup: Dokument architektury s technickými rozhodnutími

**Vytvoření epiců a stories**

:::tip[Vylepšení ve V6]
Epicy a stories se nyní vytvářejí *po* architektuře. Tím vznikají kvalitnější stories, protože architektonická rozhodnutí (databáze, API vzory, tech stack) přímo ovlivňují rozklad práce.
:::

1. Vyvolejte **PM agenta** (`acl-agent-pm`) v novém chatu
2. Spusťte `acl-create-epics-and-stories` (`acl-create-epics-and-stories`)
3. Workflow využívá jak PRD, tak architekturu k vytvoření technicky informovaných stories

**Kontrola připravenosti k implementaci** *(vysoce doporučeno)*
1. Vyvolejte **Architect agenta** (`acl-agent-architect`) v novém chatu
2. Spusťte `acl-check-implementation-readiness` (`acl-check-implementation-readiness`)
3. Validuje soudržnost všech plánovacích dokumentů

## Krok 2: Sestavte svůj projekt

Přejděte k implementaci s jakýmkoli dostupným kontextem: přímým požadavkem, issue, specifikací nebo plně naplánovanou story. **Každý workflow by měl běžet v novém chatu.**

U plánované práce spusťte `acl-quick-dev` a určete vybranou story nebo položku sprintu, například: `Implementuj story 2.3 z _acl-output/planning-artifacts/epics.md`.

### Inicializace plánování sprintu (pro plánovanou práci)

Vyvolejte **Developer agenta** (`acl-agent-dev`) a spusťte `acl-sprint-planning` (`acl-sprint-planning`). Tím se vytvoří `sprint-status.yaml` pro sledování všech epiců a stories.

Když Quick Dev v tomto souboru rozpozná vybranou story, během implementace ji přesune do stavu `in-progress` a po dokončení implementace do stavu `review`.

### Cyklus vývoje

Pro každou přímou změnu nebo naplánovanou story opakujte tento cyklus s novými chaty:

| Krok | Agent | Workflow             | Příkaz                     | Účel                               |
| ---- | ----- | -------------------- | -------------------------- | ---------------------------------- |
| 1    | DEV   | `acl-quick-dev`     | `acl-quick-dev`           | Upřesnění, plán, implementace, revize a prezentace |
| 2    | DEV   | `acl-code-review`   | `acl-code-review`         | Dodatečná validace kvality *(doporučeno)* |

Revize v Quick Dev je součástí každého běhu. `acl-code-review` je volitelná nezávislá validační vrstva v novém kontextu.

Po dokončení všech stories v epicu vyvolejte **Developer agenta** (`acl-agent-dev`) a spusťte `acl-retrospective` (`acl-retrospective`).

## Co jste dosáhli

Naučili jste se základy budování s ACL:

- Nainstalovali ACL a nakonfigurovali ho pro vaše IDE
- Zvolili hloubku plánování odpovídající vaší práci
- Vytvořili plánovací dokumenty (PRD, architektura, epicy a stories)
- Pochopili cyklus vývoje pro implementaci

Váš projekt nyní obsahuje:

```text
váš-projekt/
├── _acl/                                   # Konfigurace ACL
├── _acl-output/
│   ├── planning-artifacts/
│   │   ├── PRD.md                           # Váš dokument požadavků
│   │   ├── architecture.md                  # Technická rozhodnutí
│   │   └── epics/                           # Soubory epiců a stories
│   ├── implementation-artifacts/
│   │   └── sprint-status.yaml               # Sledování sprintu
│   └── project-context.md                   # Pravidla implementace (volitelné)
└── ...
```

## Rychlý přehled

| Workflow                              | Příkaz                                     | Agent     | Účel                                            |
| ------------------------------------- | ------------------------------------------ | --------- | ----------------------------------------------- |
| **`acl-help`** ⭐                    | `acl-help`                               | Jakýkoli  | **Váš inteligentní průvodce — ptejte se na cokoli!** |
| `acl-prd`                     | `acl-prd`                         | PM        | Vytvoření dokumentu požadavků (PRD)             |
| `acl-architecture`            | `acl-architecture`                | Architect | Vytvoření dokumentu architektury                |
| `acl-generate-project-context`       | `acl-generate-project-context`           | Analyst   | Vytvoření souboru kontextu projektu             |
| `acl-create-epics-and-stories`       | `acl-create-epics-and-stories`           | PM        | Rozklad PRD na epicy                            |
| `acl-check-implementation-readiness` | `acl-check-implementation-readiness`     | Architect | Validace soudržnosti plánování                  |
| `acl-sprint-planning`                | `acl-sprint-planning`                    | DEV       | Inicializace sledování sprintu                  |
| `acl-quick-dev`                      | `acl-quick-dev`                          | DEV       | Implementace záměru, issue, funkce, opravy nebo story |
| `acl-code-review`                    | `acl-code-review`                        | DEV       | Revize implementovaného kódu                    |

## Časté otázky

**Potřebuji vždy architekturu?**
Ne. Architekturu použijte, když je třeba explicitně zachytit technická rozhodnutí nebo mezisystémová omezení. Jasná práce může vstoupit přímo do `acl-quick-dev`; větší iniciativa přináší do stejného workflow plánovací artefakty.

**Mohu později změnit svůj plán?**
Ano. Workflow `acl-correct-course` (`acl-correct-course`) řeší změny rozsahu během implementace.

**Co když chci nejdřív brainstormovat?**
Vyvolejte Analyst agenta (`acl-agent-analyst`) a spusťte `acl-brainstorming` (`acl-brainstorming`) před zahájením PRD.

**Musím dodržovat striktní pořadí?**
Ne striktně. Jakmile se naučíte postup, můžete spouštět workflow přímo pomocí Rychlého přehledu výše.

## Získání pomoci

:::tip[První zastávka: ACL-Help]
**Vyvolejte `acl-help` kdykoli** — je to nejrychlejší způsob, jak se odpoutat. Zeptejte se na cokoli:
- „Co mám dělat po instalaci?“
- „Zasekl jsem se na workflow X“
- „Jaké mám možnosti pro Y?“
- „Ukaž mi, co bylo dosud uděláno“

ACL-Help prozkoumá váš projekt, detekuje, co jste dokončili, a řekne vám přesně, co dělat dál.
:::

- **Během workflow** — Agenti vás provázejí otázkami a vysvětleními
- **Komunita** — [Discord](https://discord.gg/gk8jAdXWmj) (#acl-adlc-help, #report-bugs-and-issues)

## Klíčové poznatky

:::tip[Zapamatujte si]
- **Začněte s `acl-help`** — Váš inteligentní průvodce, který zná váš projekt a možnosti
- **Vždy používejte nové chaty** — Začněte nový chat pro každý workflow
- **Hloubka plánování se liší** — přímý záměr i plně naplánované stories vstupují do `acl-quick-dev`
- **ACL-Help se spouští automaticky** — Každý workflow končí pokyny, co dělat dál
:::

Jste připraveni začít? Nainstalujte ACL, vyvolejte `acl-help` a nechte svého inteligentního průvodce ukázat cestu.
