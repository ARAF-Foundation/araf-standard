# Canonical Guidelines for the ARAF Standard Website

## 1. Canonical Status of the Website

The ARAF website is the canonical public specification for the ARAF Standard.

This means the website serves as the:

- authoritative description of the framework
- reference source for institutional users
- citation location for publications referencing ARAF
- documentation layer supporting certification and assessment

All descriptions of the framework used elsewhere (papers, presentations, articles) should be consistent with the definitions and structures published on the website.

No alternative or conflicting descriptions of the framework should exist across different pages.

## 2. Terminology Discipline

All pages must use consistent terminology.

Key terms must appear in the same form across the entire site.

Examples of canonical terms:

- Trust Architecture
- Agentic Risk Architecture Framework (ARAF)
- Governance Benchmark Index (GBI)
- Decision Supply Chain
- Distributed Decision Infrastructure (DDI)
- Reconstructability
- Institutional Reliance
- Governance Posture

Do not introduce alternate terms for the same concepts.

Example:

Correct:

"Decision Supply Chain"

Avoid:

- "decision pipeline"
- "AI decision flow"
- "system workflow"

Consistency is essential for institutional credibility and citation clarity.

## 3. Definition Hierarchy

Each core concept must have one canonical definition page.

These pages become the primary reference definitions for the framework.

Canonical definition pages include:

- Trust Architecture
- Six ARAF Dimensions
- Decision Supply Chain
- Governance Benchmark Index (GBI)
- Certification
- Evidence Standard

Other pages may reference these concepts but should not redefine them.

Instead they should link to the canonical definition.

## 4. Concept Introduction Rule

When a concept appears for the first time on a page:

- Use the full term
- Provide a short definition
- Link to the canonical page

Example:

The Governance Benchmark Index (GBI) is the composite scoring methodology used within ARAF to translate six-dimensional governance assessment into a comparable institutional signal.

Subsequent references on the page may use the abbreviation.

## 5. Methodology Integrity

Pages describing ARAF must preserve the internal logic of the framework.

The following elements should never be altered or reinterpreted:

The six dimensions of governance assessment:

- Autonomy Gradient
- Data Sensitivity Exposure
- Contract Infrastructure
- Liability Architecture
- Commercial Leverage
- Adaptive Stability

The GBI scoring scale:

- 1.0 represents strongest governance posture
- 5.0 represents highest governance exposure

The certification thresholds:

- ARAF Assessed
- ARAF Compliant
- ARAF Certified

The relationship between:

Assessment -> GBI -> Certification

These elements form the core methodology and must remain stable across the site.

## 6. Institutional Audience Orientation

All pages must be written for institutional readers.

Primary audiences include:

- corporate boards
- insurers
- investors
- regulators
- enterprise governance teams
- AI governance professionals

Pages should assume the reader is evaluating whether the framework can support institutional reliance.

Avoid:

- casual language
- marketing tone
- speculative commentary

Prefer:

- structured explanation
- formal definitions
- governance reasoning

## 7. Governance Architecture Framing

ARAF should always be framed as governance infrastructure, not a policy framework.

Avoid descriptions such as:

- AI ethics framework
- risk checklist
- compliance guideline

Instead emphasise:

- governance architecture
- accountability infrastructure
- institutional classification system

This framing distinguishes ARAF from existing AI governance frameworks.

## 8. Reconstructability Principle

The central principle of ARAF should remain visible throughout the site.

The principle is:

Autonomous systems become institutionally governable when the decisions they produce can be reconstructed from contemporaneous governance records.

Pages describing governance, assessment, or certification should reinforce this idea.

This principle explains why:

- evidence standards matter
- Decision Supply Chains must be mapped
- governance records must be contemporaneous

## 9. Evidence Orientation

When governance claims are discussed, pages should prioritise evidence production rather than policy statements.

The standard distinguishes between evidence tiers:

- infrastructure-generated evidence
- contemporaneous documentation
- reconstructed documentation

Where possible, pages should emphasise that governance credibility derives from evidence infrastructure, not declarations.

## 10. Version Discipline

Each published version of the ARAF Standard must be:

- dated
- version numbered
- citable

Changes between versions should be documented in the Version History page.

When describing the framework, pages should reference the current version in the citation format.

Example citation:

Martin, Carly. Agentic Risk Architecture Framework (ARAF), Version X.X. Institute for Autonomous Governance Pty Ltd.

## 11. Certification Distinction

Pages must maintain a clear distinction between:

The ARAF Standard

and

ARAF Certification

The standard defines the methodology.

Certification is produced through independent assessment conducted by accredited assessors.

The website must not imply that:

- certification is automatic
- organisations self-certify
- certification is purely declarative

Certification must always be described as independent evaluation.

## 12. Visual Consistency

All diagrams used on the site should align with the conceptual architecture of the framework.

Preferred visual types:

- system architecture diagrams
- governance flow diagrams
- dimensional models
- classification tables

Avoid decorative graphics that do not communicate governance structure.

Visuals should reinforce conceptual clarity.

## 13. Page Scope Discipline

Each page should focus on one governance concept.

Avoid pages that attempt to explain multiple parts of the framework simultaneously.

If a page begins to cover multiple concepts, split it into separate pages.

Example:

Decision Supply Chain

and

Decision Supply Chain Mapping

should be separate pages.

## 14. Cross-Page Consistency

When concepts appear across multiple pages:

- definitions must remain consistent
- scoring explanations must remain identical
- tables must not conflict

If a change is made to a concept definition, all related pages must be updated.

## 15. Citation Integrity

The ARAF Standard must be citable in academic, regulatory, and professional contexts.

Pages should therefore:

- maintain clear structure
- include stable definitions
- avoid conversational language

The website should function as a reference document, not a blog.

## 16. Governance Transparency

The website must clearly explain:

- who maintains the standard
- how revisions occur
- how certification operates
- how assessors are accredited

Transparency strengthens institutional trust.

## 17. Separation Between Standard and Commentary

The website should distinguish between:

- Standard documentation
- Thought leadership or commentary

The standard should remain stable and technical.

Articles or commentary should be hosted separately if possible.

## 18. Institutional Test for New Content

Before publishing a page ask:

Would a regulator, insurer, or institutional investor consider this page a reliable description of the framework?

If the answer is unclear, the page likely needs revision.

## 19. Header Structure Discipline (No Double Headers)

Pages must not display duplicate page headers.

If a page has a frontmatter `title`, that title is the canonical page heading and should be the only H1 shown.

Do not add an in-body Markdown H1 (`# ...`) or equivalent HTML H1 that repeats the same text as the frontmatter title.

Use this structure:

- frontmatter `title` only for page heading
- optional opening paragraph after frontmatter
- section content beginning at H2 (`## ...`) or `<h2 ...>`

Pre-publish check:

- verify that the page does not render Title + identical in-body H1
- remove duplicated H1 if present
- keep anchors on H2/H3 sections instead of adding a second page-level heading

## Summary

The canonical guidelines ensure that the ARAF website remains:

- methodologically consistent
- institutionally credible
- conceptually clear
- citable as a standard specification

They function as the governance rules for the documentation of the standard itself.

# ARAF v5 GOVERNANCE CONTROL LAYER (PERMANENT SOP)

## 1. Change Control Rule (Non-Negotiable)
Every future change must pass the v5 Deployment Prompt + Cross-Page Integrity Audit. No page may be edited, expanded, or redesigned without a full v5 check and cross-page validation.

## 2. Source of Truth Hierarchy
- Tier 1 (cannot be overridden): Homepage, Certification page
- Tier 2 (must align): FAQ, Governance page, Directory
- Tier 3 (derived): all other pages, sales materials, decks, PDFs

## 3. Language Control System
- Approved: governance classification, institutional reliance, manageable enough to rely on
- Banned: responsible AI, trustworthy AI, AI safety, generic AI governance, platform-first language

## 4. Claim Control System
- Always allowed: “designed to support…”, “produces evidence…”, “decision-support…”
- Never allowed: required, must adopt, guarantees, ensures compliance, market standard

## 5. Certification Control System
- Must always include: scheme governance reference, independence + conflict controls, directory verification rule
- Must never: stand alone as a claim, imply compliance, imply approval

## 6. Methodology Control
- Only: Effective Dimension Score = GBI × (2 − GCI)
- Any other formula is invalid

## 7. Trigger Control
- Only: within 30 days of becoming aware
- No variation allowed

## 8. Directory Control
- Certification valid only if: present in directory, status = Active, scope defined, expiry defined
- If directory breaks, certification credibility breaks

## 9. Customer Success Control
- System must maintain: named operational owner, trigger notification path, condition tracking, renewal readiness

## 10. Fail-Safe Rule
If any page contradicts another, introduces new terminology, expands claims, or weakens disclaimer, the entire system is out of compliance until corrected.

## 11. Validation Checklist
- Category lock
- Claims discipline
- Disclaimer consistency
- Underwriting wedge
- Certification alignment
- Directory verification
- Methodology consistency
- Trigger consistency
- Governance clarity
- Customer Success operability

## 12. Approval Requirements
- All changes must be reviewed and approved against this SOP
- No exceptions for urgent or minor edits

## 13. Fail Conditions
- Contradiction, drift, or overclaim in any core page
- Directory not live or not up to date
- Formula or trigger variation
- Unapproved language or claims

## 14. Escalation Path
If a fail condition is detected, escalate to system owner for immediate correction. No further changes permitted until compliance is restored.

---

This SOP is the permanent governance control layer for the ARAF system. All future edits, releases, and operational changes must comply and pass cross-page validation.
