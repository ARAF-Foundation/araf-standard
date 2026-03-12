# ARAF Website Edit Log

Last updated: 2026-03-12

This file is the orchestration layer for pending website changes.
Do not track execution status in content files, inline TODO text, or commit-message fragments.

## Queue

### Content queue

- [ ] Certification lifecycle text: apply tier-specific reassessment validity windows (Assessed 12 months, Compliant 18 months, Certified 24 months) where legacy wording still states a single 12-month maximum.
- [ ] Certification and FAQ terminology pass: align Founding Stewardship and Institute naming consistently across all governance references.
- [ ] Governance citation pass: confirm citation consistency (v2.1 historical citations vs v3.0 canonical routing notes) across governance and certification pages.
- [ ] Downloads and resource references: confirm all companion/addendum entries and version labels are internally consistent.

### Architecture queue

- [ ] Route canonicalisation: keep `/standard-governance/` as canonical and keep `/governance/standard-governance/` as compatibility route only.
- [ ] Internal link cleanup: update homepage and internal links that still target non-canonical governance route paths.
- [ ] Sidebar verification: confirm navigation ordering and visibility for newly added v3.0 sections.
- [ ] Build verification: run production build and resolve remaining MDX, link, or content-collection errors.
- [ ] Mobile and desktop visual QA: validate governance page classes and layout updates in `src/styles/custom.css`.

---

## In Progress

- [ ] Governance route harmonisation and link consistency review.
- [ ] Legacy-to-canonical transition notes across v2.x route pages.
- [ ] Working tree stabilization before branch batching.

---

## Completed

- [x] Added canonical Governance Coherence Addendum page.
- [x] Added canonical certification framework and supporting certification pages.
- [x] Added/updated evidence and assessor guidance pages for v3.0 structure.
- [x] Rewrote Standard Governance content at `/standard-governance/`.
- [x] Added compatibility routing note page at `/governance/standard-governance/`.
- [x] Added legacy-route notice blocks to key v2.x pages.
- [x] Updated governance attribution text in multiple diagram assets.

---

## Branch Batches (recommended)

Use small page- or concern-specific branches.

- `governance-route-cleanup`
- `certification-validity-alignment`
- `faq-terminology-pass`
- `sidebar-link-audit`
- `build-fix-round-1`

Suggested flow:

1. `git checkout -b <branch-name>`
2. Edit one page group only.
3. `npm run build`
4. Commit with a narrow message.
5. Push for Netlify preview.
6. Merge after preview review.

---

## Page Structure Checklist

Run this checklist for every edited page before merge.

- [ ] Page title
- [ ] Opening explanation paragraph
- [ ] Core concept explanation
- [ ] Institutional implication
- [ ] Cross-link references
- [ ] Citation block
- [ ] Footer metadata

---

## Searchable Task Marker Convention

If temporary markers are needed during active branch work, use:

`<!-- ARAF-TASK: short action description -->`

Remove these markers before merge unless they are intentionally retained as maintenance breadcrumbs.

---

## Kanban Snapshot

Columns:

- Backlog
- Queued
- Editing
- Previewed
- Merged
- Live

Active cards to split by page:

- Standard Governance page
- Certification framework page
- FAQ page
- Six Dimensions page
- GBI methodology page
- Downloads page
