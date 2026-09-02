---
title: 'Mapa pracovních postupů'
description: Vizuální reference fází workflow ACL Method a jejich výstupů
sidebar:
  order: 1
---

ACL Method (ACL) je modul v ekosystému ACL, zaměřený na dodržování osvědčených postupů context engineeringu a plánování. AI agenti fungují nejlépe s jasným, strukturovaným kontextem. Systém ACL buduje tento kontext progresivně napříč 4 odlišnými fázemi — každá fáze a volitelně více workflow v každé fázi produkují dokumenty, které informují další, takže agenti vždy vědí, co budovat a proč.

Zdůvodnění a koncepty vycházejí z agilních metodik, které byly v průmyslu úspěšně používány jako mentální framework.

Pokud si kdykoli nejste jisti, co dělat, skill `acl-help` vám pomůže zůstat na cestě nebo vědět, co dělat dál. Vždy se můžete odkázat sem — ale `acl-help` je plně interaktivní a mnohem rychlejší, pokud již máte nainstalovaný ACL Method. Navíc, pokud používáte různé moduly, které rozšířily ACL Method nebo přidaly další komplementární moduly — `acl-help` se vyvíjí a zná vše, co je dostupné, aby vám dal nejlepší radu v daném okamžiku.

Důležitá poznámka: Každý workflow níže lze spustit přímo vaším nástrojem přes skill nebo načtením agenta a použitím záznamu z nabídky agenta.

<iframe src="/workflow-map-diagram.html" title="Diagram mapy workflow ACL Method" width="100%" height="100%" style="border-radius: 8px; border: 1px solid #334155; min-height: 900px;"></iframe>

<p style="font-size: 0.8rem; text-align: right; margin-top: -0.5rem; margin-bottom: 1rem;">
  <a href="/workflow-map-diagram.html" target="_blank" rel="noopener noreferrer">Otevřít diagram v novém panelu ↗</a>
</p>

## Fáze 1: Analýza (volitelná)

Prozkoumejte problémový prostor a validujte nápady před závazkem k plánování.

| Workflow            | Účel                                                                                                                                                                                                                                                 | Produkuje                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `acl-brainstorming` | Brainstorming nápadů na projekt s řízenou facilitací brainstormingového kouče                                                                                                                                                                        | `brainstorming-report.md`                            |
| `acl-deep-recon`    | Validace předpokladů nebo výběr mezi variantami — návrh promptu pro váš nástroj hloubkového výzkumu, zpracování jeho zprávy, nebo výzkum přímo zde; tržní, doménový, technický, konkurenční, uživatelský, akademický; ověřené, citované, obnovitelné | Výzkumná zpráva či shrnutí + volitelný HTML briefing |
| `acl-product-brief` | Zachycení strategické vize — nejlepší, když je váš koncept jasný                                                                                                                                                                                     | `product-brief.md`                                   |
| `acl-prfaq`         | Working Backwards — zátěžový test a zformování vašeho produktového konceptu                                                                                                                                                                          | `prfaq-{project}.md`                                 |

## Fáze 2: Plánování

Definujte, co budovat a pro koho.

| Workflow   | Účel                                                                                                                                           | Produkuje                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `acl-prd`  | Definice požadavků (FR/NFR)                                                                                                                    | `PRD.md`                                                                |
| `acl-ux`   | Návrh uživatelského zážitku (když záleží na UX)                                                                                                | `DESIGN.md`, `EXPERIENCE.md`                                            |
| `acl-spec` | Destiluje jakýkoli vstupní záměr (brief, PRD, přepis, poznámky) do stručného kontraktu `SPEC.md` + doprovodných souborů — zafixuje CO před JAK | `SPEC.md` + doprovodné soubory pod `{output_folder}/specs/spec-{slug}/` |

## Fáze 3: Solutioning

Rozhodněte, jak to budovat, a rozložte práci na stories.

| Workflow                             | Účel                                            | Produkuje                     |
| ------------------------------------ | ----------------------------------------------- | ----------------------------- |
| `acl-architecture`                   | Explicitní technická rozhodnutí                 | `architecture.md` s ADR       |
| `acl-create-epics-and-stories`       | Rozložení požadavků na implementovatelnou práci | Soubory epiců se stories      |
| `acl-check-implementation-readiness` | Kontrola brány před implementací                | Rozhodnutí PASS/CONCERNS/FAIL |

## Fáze 4: Implementace

Všechny implementační vstupy se sbíhají do `acl-quick-dev`. Přijímá přímý záměr, issue, specifikaci nebo naplánovanou story a zvolí potřebnou míru upřesnění, plánování, implementace a revize.

| Workflow              | Účel                                                                            | Produkuje                            |
| --------------------- | ------------------------------------------------------------------------------- | ------------------------------------ |
| `acl-quick-dev`       | Převod přímého záměru nebo naplánované story na implementovaný a revidovaný kód | `spec-*.md` + kód                    |
| `acl-sprint-planning` | Inicializace sledování (jednou na projekt pro sekvencování dev cyklu)           | `sprint-status.yaml`                 |
| `acl-code-review`     | Validace kvality implementace                                                   | Schváleno nebo požadovány změny      |
| `acl-correct-course`  | Řešení významných změn uprostřed sprintu                                        | Aktualizovaný plán nebo přesměrování |
| `acl-sprint-status`   | Sledování průběhu sprintu a stavu stories                                       | Aktualizace stavu sprintu            |
| `acl-retrospective`   | Revize po dokončení epicu                                                       | Poučení                              |

### Přímý a plánovaný vstup

Jasná práce může vstoupit do `acl-quick-dev` přímo. Větší iniciativa může nejprve vytvořit PRD, UX, architekturu, epicy, stories, kontrolu připravenosti a sprint plán. Tyto artefakty přidávají kontext; nevybírají jiný implementační workflow.

## Správa kontextu

Každý dokument se stává kontextem pro další fázi. PRD říká architektovi, jaká omezení záleží. Architektura říká dev agentovi, jaké vzory následovat. Soubory stories poskytují zaměřený, kompletní kontext pro implementaci. Bez této struktury agenti dělají nekonzistentní rozhodnutí.

### Kontext projektu

:::tip[Doporučeno]
Vytvořte `project-context.md` pro zajištění toho, aby AI agenti dodržovali pravidla a preference vašeho projektu. Tento soubor funguje jako ústava vašeho projektu — vede implementační rozhodnutí napříč všemi workflow. Tento volitelný soubor lze vygenerovat na konci tvorby architektury, nebo u existujícího projektu ho lze také vygenerovat pro zachycení toho, co je důležité pro zachování souladu se současnými konvencemi.
:::

**Jak ho vytvořit:**

- **Ručně** — Vytvořte `_acl-output/project-context.md` s vaším technologickým stackem a pravidly implementace
- **Vygenerujte ho** — Spusťte `acl-generate-project-context` pro automatické generování z vaší architektury nebo kódové báze

[**Zjistit více o project-context.md**](../explanation/project-context.md)
