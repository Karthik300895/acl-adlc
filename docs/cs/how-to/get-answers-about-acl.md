---
title: 'Jak získat odpovědi o ACL'
description: Použijte LLM k rychlému zodpovězení vašich otázek o ACL
sidebar:
  order: 4
---

## Začněte zde: ACL-Help

**Nejrychlejší způsob, jak získat odpovědi o ACL, je skill `acl-help`.** Tento inteligentní průvodce zodpoví více než 80 % všech otázek a je vám k dispozici přímo ve vašem IDE při práci.

ACL-Help je víc než vyhledávací nástroj — umí:

- **Prozkoumat váš projekt** a zjistit, co už bylo dokončeno
- **Rozumět přirozenému jazyku** — ptejte se běžnou řečí
- **Přizpůsobit se nainstalovaným modulům** — zobrazí relevantní možnosti
- **Automaticky se spouštět po workflow** — řekne vám přesně, co dělat dál
- **Doporučit první povinný úkol** — žádné hádání, kde začít

### Jak používat ACL-Help

Zavolejte ho jménem ve vaší AI relaci:

```
acl-help
```

:::tip
V závislosti na vaší platformě můžete také použít `/acl-help` nebo `$acl-help`, ale samotné `acl-help` by mělo fungovat všude.
:::

Spojte ho s dotazem v přirozeném jazyce:

```
acl-help I have a SaaS idea and know all the features. Where do I start?
acl-help What are my options for UX design?
acl-help I'm stuck on the PRD workflow
acl-help Show me what's been done so far
```

ACL-Help odpoví:

- Co je doporučeno pro vaši situaci
- Jaký je první povinný úkol
- Jak vypadá zbytek procesu

## Kdy použít tohoto průvodce

Použijte tuto sekci, když:

- Chcete pochopit architekturu nebo interní fungování ACL
- Potřebujete odpovědi mimo to, co ACL-Help nabízí
- Zkoumáte ACL před instalací
- Chcete prozkoumat zdrojový kód přímo

## Kroky

### 1. Vyberte si zdroj

| Zdroj                | Nejlepší pro                                | Příklady                  |
| -------------------- | ------------------------------------------- | ------------------------- |
| **Složka `_acl`**    | Jak ACL funguje — agenti, workflow, prompty | „Co dělá PM agent?“       |
| **Celý GitHub repo** | Historie, instalátor, architektura          | „Co se změnilo ve v6?“    |
| **`llms-full.txt`**  | Rychlý přehled z dokumentace                | „Vysvětli čtyři fáze ACL“ |

Složka `_acl` se vytvoří při instalaci ACL. Pokud ji ještě nemáte, naklonujte si repo.

### 2. Nasměrujte AI na zdroj

**Pokud vaše AI umí číst soubory (Claude Code, Cursor atd.):**

- **ACL nainstalován:** Nasměrujte na složku `_acl` a ptejte se přímo
- **Chcete hlubší kontext:** Naklonujte si [celé repo](https://github.com/acl-code-org/ACL-ADLC)

**Pokud používáte ChatGPT nebo Claude.ai:**

Načtěte `llms-full.txt` do vaší relace:

```text
https://acl-code-org.github.io/ACL-ADLC/llms-full.txt
```

### 3. Položte svou otázku

:::note[Příklad]
**O:** „Řekni mi nejrychlejší způsob, jak něco vytvořit s ACL“

**A:** Spusťte `acl-quick-dev`. Předejte přímý záměr, issue, specifikaci nebo naplánovanou story; workflow využije dostupný kontext a zvolí potřebnou hloubku upřesnění, plánování, implementace a revize.
:::

## Co získáte

Přímé odpovědi o ACL — jak agenti fungují, co dělají workflow, proč jsou věci strukturované tak, jak jsou — bez čekání na odpověď od někoho jiného.

## Tipy

- **Ověřte překvapivé odpovědi** — LLM se občas mýlí. Zkontrolujte zdrojový soubor nebo se zeptejte na Discordu.
- **Buďte konkrétní** — „Co dělá krok 3 PRD workflow?“ je lepší než „Jak funguje PRD?“

## Stále jste uvízli?

Zkusili jste přístup přes LLM a stále potřebujete pomoc? Nyní máte mnohem lepší otázku k položení.

| Kanál                     | Použijte pro                           |
| ------------------------- | -------------------------------------- |
| `#acl-adlc-help`          | Rychlé otázky (chat v reálném čase)    |
| `help-requests` fórum     | Detailní otázky (vyhledatelné, trvalé) |
| `#suggestions-feedback`   | Nápady a požadavky na funkce           |
| `#report-bugs-and-issues` | Hlášení chyb                           |

**Discord:** [discord.gg/gk8jAdXWmj](https://discord.gg/gk8jAdXWmj)

**GitHub Issues:** [github.com/acl-code-org/ACL-ADLC/issues](https://github.com/acl-code-org/ACL-ADLC/issues) (pro jasné chyby)
