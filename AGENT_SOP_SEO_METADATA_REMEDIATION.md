# SEO Metadata Remediation Agent SOP

## Purpose
This SOP defines the step-by-step process for refactoring and centralizing SEO metadata in the ARAF Standard codebase. The goal is to eliminate duplication, ensure a single source of truth, and align with best-practice SEO architecture for maintainability and clarity.

---

## Scope
- Applies to all SEO metadata in Astro config, SEO component, page frontmatter, and public assets (SVG/PDF).
- Covers canonical URL handling, Open Graph/Twitter tags, and schema.org/Organization JSON-LD.

---

## Remediation Table

| File/Location                | Field                                                                       | Current Value Type                       | Risk/Issue                                                                                                    | Recommended Fix                                                                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `astro.config.mjs`           | `site`, default `title`, default `description`, `keywords`                  | Hard-coded strings                       | Global defaults can drift from actual page metadata; `keywords` adds maintenance with little value            | Centralise site-wide defaults in one metadata config; keep only true fallbacks; remove `keywords` unless intentionally retained |
| `src/components/SEO.astro`   | `title`, `description`, `canonical`, Open Graph tags, Twitter tags, JSON-LD | Mixed: hard-coded values plus props      | Too many SEO decisions concentrated in one component; risk of inconsistent precedence and stale global values | Make this component render-only; feed it resolved values from page/frontmatter plus central site config                         |
| `src/components/SEO.astro`   | OG/Twitter image, Twitter handle                                            | Hard-coded strings                       | Same social preview and attribution across all pages; poor share specificity                                  | Allow per-page OG image override, with one global fallback; move handle to central config                                       |
| `src/content/docs/**/*.mdx`  | `title`, `description`, `metaTitle`, `metaDescription`                      | Hard-coded strings in frontmatter        | Duplication, reused descriptions, ambiguity over source of truth                                              | Collapse to `title` + `description` only unless a page genuinely needs a separate SEO override                                  |
| `src/content/docs/**/*.mdx`  | `metaTitle`, `metaDescription`                                              | Often duplicates `title` / `description` | Unnecessary duplication increases drift risk                                                                  | Remove duplicated fields or generate from content defaults                                                                      |
| `public/**/*.svg`            | `<title>`                                                                   | Hard-coded string                        | Asset titles may not match current naming, branding, or page context                                          | Standardise SVG titles and align with brand and asset purpose                                                                   |
| `public/**/*.pdf`            | `/Title`                                                                    | Hard-coded string                        | PDF metadata may be stale, inconsistent, or misleading in search/share contexts                               | Normalise PDF title metadata before publish                                                                                     |
| Various canonical references | `canonical`                                                                 | Mixed SEO and non-SEO usage              | Search results for “canonical” may include unrelated logic; risk of inconsistent canonical generation         | Audit all usages; ensure only one SEO canonical path is used in metadata output                                                 |

---

## Implementation Rule Set
- One site metadata object (central config)
- One canonical generator
- One resolved SEO title per page
- One resolved SEO description per page
- One global fallback OG image, with optional per-page override
- No duplicated `metaTitle` / `metaDescription` unless documented

---

## Best-Practice Target State
**Central config:**
- site URL
- organisation name
- default title
- default description
- default OG image
- Twitter handle
- schema defaults

**Page frontmatter:**
- `title`
- `description`
- optional `ogImage`

**SEO component:**
- Consumes resolved values only
- Does not store marketing copy or page-specific literals

---

## Priority Order
**High**
1. `astro.config.mjs` cleanup
2. Refactor `src/components/SEO.astro` to render-only
3. Clean up `src/content/docs/**/*.mdx` frontmatter

**Medium**
4. Canonical audit
5. OG/Twitter image override support

**Low**
6. SVG title cleanup
7. PDF metadata cleanup

---

## Dev Handoff Note
SEO metadata is currently split across Astro config, the SEO component, page frontmatter, and some public assets. The main issue is not hard-coding itself but duplicated sources of truth. Refactor to one central site metadata config, page-level `title`/`description`, and a render-only SEO component with clear precedence rules.

---

## Acceptance Criteria
- All SEO metadata is resolved from a single source of truth per page.
- No duplicated or conflicting meta fields.
- Canonical URLs are generated consistently.
- OG/Twitter images and handles are overrideable per page.
- Asset metadata (SVG/PDF) is standardized and current.
- SEO component is render-only and receives all values as props.
