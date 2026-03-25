AGENT SOP — ARAF WEBSITE UPDATE
v3.0 Decision-Path Clarification + v3.1 Output Admission Amendment

Role: Website update agent
Repository: ARAF-Foundation/araf-standard
Deployment: Netlify via push to main
Classification: Execute against main branch. Do not create a PR — push directly.
Packages: ARAF v3.0 · Decision-Path Clarification · ARAF v3.1 · Output Admission and Verification Integrity

DESIGN SYSTEM QUICK REFERENCE
Typography: Libre Baskerville (headings), DM Mono (body/labels)
Palette: paper #f7f5f0 · ink #0d0d0b · gold #A88644 · cream #ede9e0 · rule #D4D0C8
Australian English throughout. No em dashes in public-facing content.
Downloads canonical path: /downloads/filename.pdf
MDX content path: src/content/docs/
Static assets: public/

SEQUENCING RULE
Execute Package A (v3.0) in full. Run Package A verification. Only then begin Package B (v3.1).
Package B edits depend on Package A content being live. Do not interleave.

---

PRE-FLIGHT CHECKS
Run all of the following before making any edits. Do not proceed if any check fails.

# 1. Confirm working tree is clean
git status

# 2. Pull latest main
git pull origin main

# 3. Confirm downloads directory exists
ls public/downloads/

# 4. Confirm all upload files are present in working directory
ls decision-supply-chain.jsx
ls decision-integrity.jsx
ls gn001-decision-path-test.jsx
ls public-positioning-note.jsx
ls ARAF-Interpretive-Note-Decision-Path.pdf
ls ARAF-Conforming-Amendments-Schedule.pdf
ls ARAF-GBI-Impact-Note.pdf
ls ARAF-Assessor-Transition-Memo.pdf
ls ARAF-Assessor-Checklist-Appendix.pdf
ls ARAF-Minimum-Evidence-Matrix.pdf
ls ARAF-Change-Log-Redline-Summary.pdf
ls ARAF_Amendment_v3_1_Output_Admission.pdf

# 5. Confirm current version references on all affected pages
grep -n "Version 3\.0\|v3\.0" src/content/docs/standard/six-dimensions.mdx
grep -n "Version 3\.0\|v3\.0" src/content/docs/decision-supply-chain.mdx
grep -n "Version 3\.0\|v3\.0" src/content/docs/evidence/evidence-infrastructure-standard.mdx
grep -n "Version 3\.0\|v3\.0" src/content/docs/certification/certification-framework.mdx
grep -n "Version 3\.0\|v3\.0" src/content/docs/version-history.mdx

Expected pre-flight state:
Working tree clean
All five pages return v3.0 references (correct — not yet updated)
public/downloads/ exists
All 12 upload files present in working directory

---

PACKAGE A — v3.0 DECISION-PATH CLARIFICATION
Items A-1 through A-11. Complete all before running Package A verification.

ITEM A-1 — Decision Supply Chain Page
File: src/content/docs/decision-supply-chain.mdx

A-1A — Add opening sentence
Locate the very first line of the page body (after frontmatter).
Insert the following as the first sentence before all existing content:

Governance of autonomous systems is governance of the full decision path.

Verify:
grep -n "Governance of autonomous systems is governance" src/content/docs/decision-supply-chain.mdx
Expected: line 1 or immediately after frontmatter.

A-1B — Insert "Governance Across the Decision Path" section
Locate the section heading "The Chain in Practice":
grep -n "The Chain in Practice" src/content/docs/decision-supply-chain.mdx

Locate the section heading "Governance Requirements for Each Link":
grep -n "Governance Requirements for Each Link" src/content/docs/decision-supply-chain.mdx

Insert the following new section between those two headings (blank line before and after):

## Governance Across the Decision Path

ARAF assesses governance across the full decision path rather than at a single control point. A governance architecture that addresses only one stage does not govern the decision path.

For interpretive purposes, the decision path comprises five governance layers:

**Stage 01 — Admissibility.** Whether the request, state, provenance, authority, and context are eligible to enter the governed system. Admissibility is assessed before model invocation or equivalent decision initiation. Its absence is a governance failure at the earliest stage of the path. Maps to: data boundary. Assessed under D2.

**Stage 02 — Decision Formation.** Whether the system's emerging decision is being formed within defined governance conditions, escalation thresholds, and intervention rules. The question is not only whether the system has authority to act, but whether the decision being formed is appropriate for the specific task and circumstances at that moment. Maps to: inference boundary. Assessed under D1.

**Stage 03 — Action Boundary.** Whether the proposed output is permitted to cross into operational consequence. Authorisation to act is not the same as admissibility to commit. Maps to: action boundary. Assessed under D1 and D3.

**Stage 04 — Traceability.** Whether the path from input to consequence is reconstructable through reliable, contemporaneous evidence. Governance that only evaluates after the decision has propagated is not governance. It is documentation of what already happened. Maps to: evidence architecture. Assessed across all dimensions.

**Stage 05 — Post-Deployment Monitoring.** Whether the organisation monitors behavioural drift, recurring failure patterns, governance degradation, and cross-system signals over time. Where multiple governed systems operate in parallel, monitoring must extend beyond single-system review to include portfolio-level signals. Maps to: lifecycle layer. Assessed under D6.

ARAF does not prescribe how decisions are shaped in-flight. It defines the governance and evidentiary conditions under which those decisions are institutionally defensible.

### Mapping: Boundaries and Stages

| Decision Path Stage | ARAF Boundary | Primary Dimension |
|---|---|---|
| Input admissibility | Data boundary | D2 |
| Decision formation | Inference boundary | D1 |
| Commit and execution | Action boundary | D1, D3 |
| Trace and chain integrity | All boundaries | All dimensions |
| Post-deployment monitoring | Lifecycle layer | D6 |

Verify:
grep -n "Governance Across the Decision Path" src/content/docs/decision-supply-chain.mdx
grep -n "Stage 01" src/content/docs/decision-supply-chain.mdx
grep -n "Stage 05" src/content/docs/decision-supply-chain.mdx
Expected: each returns 1.

A-1C — Add internal link to Decision Integrity page
In the Stage 02 — Decision Formation paragraph, link the phrase "decision integrity" to /standard/decision-integrity/ where it first appears.

Commit:
git add src/content/docs/decision-supply-chain.mdx
git commit -m "feat(v3.0): decision supply chain — five-stage decision path, mapping table"


ITEM A-2 — New Page: Decision Integrity
File to create: src/content/docs/standard/decision-integrity.mdx
Source content: decision-integrity.jsx (use as content reference — extract text, apply MDX format)

Create the file with the following frontmatter:
---
title: Decision Integrity
description: Decision integrity concerns whether a system's emerging decision is governed for fitness to context before that decision is relied upon, propagated, or allowed to become operationally consequential.
---

The page body must contain the following sections in order:

SECTION: Definition callout block
Decision integrity concerns whether a system's emerging decision is governed for fitness to context before that decision is relied upon, propagated, or allowed to become operationally consequential.

SECTION: ARAF positioning statement (use as pull quote or callout)
ARAF does not prescribe how decisions are shaped in-flight. It defines the governance and evidentiary conditions under which those decisions are institutionally defensible.

SECTION: Why the Concept Matters
Many governance models focus on whether a system is permitted to operate, whether an actor is authorised, or whether a policy exists at the boundary of use. Those controls remain necessary. They do not fully answer a different question: whether the decision being formed should be permitted to continue, to be relied upon, or to become consequential in the context in which it arises. Decision integrity addresses that gap.

A system can be fully authorised, processing legitimate data, operating within defined scope — and still produce a decision that is wrong for the context in which it is deployed. That is not an access control failure. It is a decision integrity failure.

SECTION: What Decision Integrity Is Not
Decision integrity is not a claim that governance can guarantee correctness. It is not a requirement for a specific inference-time product, runtime stack, or inline supervision mechanism. It is not a mandate for human review of every decision. Decision integrity is a governance concept. It concerns whether the organisation has defined the conditions under which an emerging decision is fit to proceed.

SECTION: Core Governance Questions
For ARAF purposes, decision integrity requires the organisation to address five questions:

**Context fitness.** Has the organisation defined the conditions under which a decision is fit or unfit for the relevant context?

**Escalation thresholds.** Has the organisation defined when uncertainty, anomaly, or sensitivity requires pause, escalation, override, or review?

**Confidence conditions.** Has the organisation defined whether confidence, uncertainty, or reliability indicators affect continued autonomous operation?

**Intervention authority.** Has the organisation defined who or what may interrupt, approve, reject, or redirect a decision path?

**Evaluator independence.** Has the organisation distinguished, where appropriate to risk, between the system generating the decision and the function evaluating whether that decision may continue?

SECTION: Relationships to Adjacent Concepts
Admissibility governs entry to the decision path. Decision integrity governs formation once the path has begun. The action boundary governs whether an output may cross into consequence. Decision integrity governs whether it should mature to that point. Traceability: decision integrity claims are strongest where governance conditions, escalation events, and intervention outcomes are evidenced contemporaneously.

SECTION: Failure Conditions
Decision integrity is considered deficient where:
- Non-admissible inputs enter the system without a defined governance check.
- Decisions are executed outside defined thresholds without escalation or intervention.
- No escalation or halt mechanism exists for high-risk or high-uncertainty decisions.
- Evaluation is performed by the same system without structural independence in high-reliance contexts.
- No contemporaneous evidence exists to justify the decision at the time it was made.

SECTION: Minimum Institutional Expectation
At minimum, an organisation making a strong governance claim must define: context-fitness criteria; escalation thresholds; intervention rules; decision-to-action transition conditions; and evidence of review, override, or continued progression where relevant. ARAF does not require a single method for achieving those outcomes. It requires that the organisation can explain and evidence how they are achieved.

SECTION: Institutional Implication
Decision integrity is the condition that determines whether a board can defend oversight, an insurer can underwrite exposure, a regulator can assess compliance, and an investor can rely on governance posture. A system that operates correctly but cannot demonstrate decision integrity remains institutionally fragile.

SECTION: Where This Sits in ARAF
Primary dimension: D1 — Autonomy Gradient (context fitness, escalation, intervention, evaluator independence)
Related dimensions: D2 — Data Sensitivity Exposure (admissibility at entry) · D4 — Liability Architecture (consequences of incorrect decisions) · D6 — Adaptive Stability (whether integrity is maintained over time)
Decision Supply Chain stage: Stage 02 — Decision Formation, between admissibility (Stage 01) and the action boundary (Stage 03).

Add to site navigation: immediately below "Decision Supply Chain" under The Standard.
Add to XML sitemap.

Verify:
ls src/content/docs/standard/decision-integrity.mdx
grep -n "Decision integrity concerns" src/content/docs/standard/decision-integrity.mdx
grep -n "Evaluator independence" src/content/docs/standard/decision-integrity.mdx
grep -n "Failure Conditions" src/content/docs/standard/decision-integrity.mdx
Expected: each returns 1.

Commit:
git add src/content/docs/standard/decision-integrity.mdx
git commit -m "feat(v3.0): add Decision Integrity concept page"


ITEM A-3 — GN-001 Assessor Guidance Note
File: src/content/docs/assessor-guidance/assessor-guidance-note.mdx
(Confirm exact path against sitemap. If GN-001 does not exist as a separate file, check ARAF Website files index for its location.)

A-3A — Add opening instruction
Locate the first line of the page body (after frontmatter).
Insert as the first line:

Assessment must cover the full decision path, not isolated system components.

A-3B — Insert Decision Path Coverage Test section
Locate the methodology section end. Locate the Reporting section start.
grep -n "Reporting\|reporting" src/content/docs/assessor-guidance/assessor-guidance-note.mdx

Insert the following new section immediately before the Reporting section (blank line before and after):

## Decision Path Coverage Test

An assessor must verify that governance is evidenced across the full decision path. The assessor evaluates governance coverage and evidentiary sufficiency. The assessor does not require any specific runtime architecture, model topology, or vendor-specific implementation.

**1. Admissibility controls exist.** The organisation has defined and evidenced checks for request, state, provenance, authority, and context before entry into the governed decision path. Assessment concern: materially non-admissible requests enter the decision path without a defined governance check or without retained evidence.

**2. Decision integrity is governed.** The organisation has defined context-fitness criteria, escalation thresholds, intervention rules, and accountable ownership of those controls. Assessment concern: autonomous outputs can proceed to operational significance without defined criteria, escalation rules, or intervention conditions.

**3. The action boundary is defined.** The organisation has identified when a proposed decision becomes operationally consequential, with approval, halt, override, or escalation conditions specified. Assessment concern: the organisation cannot identify when a decision becomes binding or effective.

**4. The trace is reconstructable.** Evidence is sufficient to reconstruct the material path from initiating condition through decision, intervention, consequence, and review. Assessment concern: the organisation cannot materially reconstruct what happened or who was accountable.

**5. Monitoring extends beyond single system where required.** Where multiple governed systems are deployed, monitoring is not limited to isolated system review. Assessment concern: deployment footprint requires cross-system visibility but monitoring is confined to isolated checks.

**6. Accountability is assigned across the chain.** Roles and responsibilities are assigned across decision generation, approval, evaluation, oversight, and remediation, with independence and conflict conditions defined. Assessment concern: consequential decisions are generated, approved, and evaluated within overlapping functions without disclosure.

Where any stage is ungoverned, report: which stage lacks coverage; what evidence is missing; whether the gap is a design gap, evidence gap, accountability gap, monitoring gap, or independence gap.

See also: [Decision Supply Chain](/decision-supply-chain/) · [Decision Integrity](/standard/decision-integrity/)

Download: [Decision Path Coverage Checklist (PDF)](/downloads/ARAF-Assessor-Checklist-Appendix.pdf)

Verify:
grep -n "Assessment must cover the full decision path" src/content/docs/assessor-guidance/assessor-guidance-note.mdx
grep -n "Decision Path Coverage Test" src/content/docs/assessor-guidance/assessor-guidance-note.mdx
grep -n "Admissibility controls exist" src/content/docs/assessor-guidance/assessor-guidance-note.mdx
Expected: each returns 1.

Commit:
git add src/content/docs/assessor-guidance/assessor-guidance-note.mdx
git commit -m "feat(v3.0): GN-001 — add Decision Path Coverage Test, opening instruction"


ITEM A-4 — Homepage
File: src/content/docs/index.mdx (or equivalent homepage file — confirm path)
grep -rn "ARAF Standard\|Governance Benchmark Index" src/content/docs/index.mdx

A-4A — Add announcement block
Locate the section after the hero/introduction and before the core components listing.
Insert:

## What's New

ARAF clarifies governance across the full decision path.

ARAF now makes explicit that governance applies across the full decision path — from admissibility and decision formation through action, traceability, and post-deployment monitoring. [See what changed →](/standard/decision-integrity/)

A-4B — Add framing sentence
Locate the existing core framing copy. Append after the final sentence of that block:

ARAF governs the decision path, not the model.

A-4C — Add Decision Integrity to core components listing
In the list of core components, add Decision Integrity as a linked item pointing to /standard/decision-integrity/.

Verify:
grep -n "ARAF governs the decision path" src/content/docs/index.mdx
grep -n "decision-integrity" src/content/docs/index.mdx
Expected: each returns at least 1.

Commit:
git add src/content/docs/index.mdx
git commit -m "feat(v3.0): homepage — decision path announcement, framing sentence, DI link"


ITEM A-5 — Upload 7 PDFs to public/downloads/
Files to copy from working directory:

cp ARAF-Interpretive-Note-Decision-Path.pdf public/downloads/
cp ARAF-Conforming-Amendments-Schedule.pdf public/downloads/
cp ARAF-GBI-Impact-Note.pdf public/downloads/
cp ARAF-Assessor-Transition-Memo.pdf public/downloads/
cp ARAF-Assessor-Checklist-Appendix.pdf public/downloads/
cp ARAF-Minimum-Evidence-Matrix.pdf public/downloads/
cp ARAF-Change-Log-Redline-Summary.pdf public/downloads/

Verify all seven:
ls -lh public/downloads/ARAF-Interpretive-Note-Decision-Path.pdf
ls -lh public/downloads/ARAF-Conforming-Amendments-Schedule.pdf
ls -lh public/downloads/ARAF-GBI-Impact-Note.pdf
ls -lh public/downloads/ARAF-Assessor-Transition-Memo.pdf
ls -lh public/downloads/ARAF-Assessor-Checklist-Appendix.pdf
ls -lh public/downloads/ARAF-Minimum-Evidence-Matrix.pdf
ls -lh public/downloads/ARAF-Change-Log-Redline-Summary.pdf
Expected: all seven files present, non-zero size.

A-5B — Update downloads page
File: src/content/docs/downloads.mdx
grep -n "Core Framework\|Framework Documents" src/content/docs/downloads.mdx

Add a new section "Decision-Path Clarification Package — v3.0" to the downloads page. List all seven files. GBI Impact Note first.

**Decision-Path Clarification Package — v3.0**

- [Interpretive Note: Decision Path Clarification](/downloads/ARAF-Interpretive-Note-Decision-Path.pdf) — For assessors, partners, and early adopters. Clarifies what changed and what did not.
- [GBI Impact Note: Decision-Path Clarification](/downloads/ARAF-GBI-Impact-Note.pdf) — How the clarification affects GBI interpretation and scoring. Start here for benchmark questions.
- [Certification and Assessor Transition Memo](/downloads/ARAF-Assessor-Transition-Memo.pdf) — Effective dates, treatment of existing certifications, and assessor instruction.
- [Assessor Checklist: Decision Path Coverage](/downloads/ARAF-Assessor-Checklist-Appendix.pdf) — Printable checklist companion to GN-001.
- [Minimum Evidence Matrix: D1 · D2 · D6 · AIOC](/downloads/ARAF-Minimum-Evidence-Matrix.pdf) — Evidence expectations by control area.
- [Conforming Amendments Schedule](/downloads/ARAF-Conforming-Amendments-Schedule.pdf) — Term harmonisation across the corpus.
- [Change Log and Redline Summary v3.0](/downloads/ARAF-Change-Log-Redline-Summary.pdf) — Full audit of what changed and why.

Verify:
grep -n "Decision-Path Clarification Package" src/content/docs/downloads.mdx
grep -n "ARAF-GBI-Impact-Note" src/content/docs/downloads.mdx
Expected: each returns 1.

Commit:
git add public/downloads/ARAF-*.pdf
git add src/content/docs/downloads.mdx
git commit -m "docs(v3.0): upload 7 clarification PDFs, update downloads page"


ITEM A-6 — Six Dimensions Page — D1, D2, D6 insertions
File: src/content/docs/standard/six-dimensions.mdx

A-6A — D2: insert admissibility paragraph
Locate the D2 section and the first bullet in the "Operational data sensitivity" list:
grep -n "Operational data sensitivity" src/content/docs/standard/six-dimensions.mdx

Insert the following paragraph immediately before that first bullet:

Before the data boundary is crossed, governance must also address input admissibility: whether the request, state, provenance, and authority presenting at the boundary are eligible to enter the decision path at all. Admissibility is a distinct control objective from data sensitivity classification. Failure condition: materially non-admissible requests or states enter the system without a defined governance check or retained evidence of that check.

After the admissibility paragraph, add:
→ See [Decision Integrity](/standard/decision-integrity/)

Verify:
grep -n "Admissibility is a distinct control objective" src/content/docs/standard/six-dimensions.mdx
Expected: 1.

A-6B — D1: add sixth sub-factor
Locate the D1 sub-factors list. Locate the fifth (final) sub-factor:
grep -n "sub-factor\|Sub-factor\|What it assesses" src/content/docs/standard/six-dimensions.mdx

Insert the following as a new sixth sub-factor after the existing fifth:

**Decision integrity governance.** Does the governance architecture address whether decisions being formed are fit for the context in which they are being made, not only whether the system has authority to act? Decision integrity governance requires defined context fitness criteria, documented escalation thresholds connected to action, and an evaluation function independent of the system producing the decision. A governance architecture that addresses authorisation without addressing context fitness has governed the permission question while leaving the decision integrity question open. Failure condition: autonomous outputs can proceed to operational significance without defined context-fitness criteria, escalation rules, or accountable intervention rules.

Locate the D1 institutional implication paragraph. Append to the end of it:

A system operating within scope but without decision integrity governance is not fully governed. The autonomy level determines the scale of the problem. The decision integrity governance determines whether that problem has been addressed.

Verify:
grep -n "Decision integrity governance" src/content/docs/standard/six-dimensions.mdx
Expected: 1.

A-6C — D6: replace monitoring architecture sub-factor
Locate the existing "Monitoring architecture" bullet in the D6 section:
grep -n "Monitoring architecture" src/content/docs/standard/six-dimensions.mdx

Replace the existing monitoring architecture bullet with:

**Monitoring architecture.** Is the monitoring architecture designed to produce governance telemetry, not merely engineering telemetry? A system generating extensive performance metrics but no governance records has operational monitoring without operational accountability.

**Portfolio and fleet monitoring.** Where the organisation deploys more than one governed system, does monitoring extend beyond single-system stability to cross-system and portfolio-level signals? Correlated drift across systems, repeated escalation patterns across deployments, and recurring admissibility failures that no individual system review will surface are governance signals requiring portfolio-level detection. The AIOC register is the instrument through which portfolio monitoring is conducted. Failure condition: governance monitoring is limited to isolated system review despite a deployment footprint that reasonably requires cross-system visibility.

Locate the D6 institutional implication paragraph. Append to the end of it:

For boards, Dimension 6 is the portfolio governance signal as well as the single-system maintenance signal. An AIOC that maintains an inventory without conducting cross-system governance analysis has inventory management without portfolio governance.

Verify:
grep -n "Portfolio and fleet monitoring" src/content/docs/standard/six-dimensions.mdx
Expected: 1.


ITEM A-7 — Six Dimensions Page — independence clause
File: src/content/docs/standard/six-dimensions.mdx (same file as A-6, separate commit)

Locate the dimensions overview introduction section — the introductory text before the D1 heading:
grep -n "^## D1\|^### D1\|Dimension 1" src/content/docs/standard/six-dimensions.mdx

Insert the following paragraph at the end of the overview introduction, immediately before the D1 heading (blank line before and after):

One requirement applies across all six dimensions: independence. Governance, execution, and evaluation must not collapse into the same function where institutional reliance is high. Assessors must verify, across all dimensional assessment, that the governance functions being evaluated are structurally independent of the operational functions they govern. This applies to the AIOC, to assessors, and to any evaluation function the organisation designates as part of its decision integrity governance.

Verify:
grep -n "One requirement applies across all six dimensions" src/content/docs/standard/six-dimensions.mdx
Expected: 1.

Commit A-6 and A-7 together:
git add src/content/docs/standard/six-dimensions.mdx
git commit -m "feat(v3.0): six dimensions — D1 decision integrity, D2 admissibility, D6 portfolio monitoring, independence clause"


ITEM A-8 — Version History Page
File: src/content/docs/version-history.mdx

Locate the existing v3.0 row:
grep -n "v3\.0\|3\.0" src/content/docs/version-history.mdx | head -10

Insert the following row immediately after the v3.0 row:

| v3.0 (Clarification) | March 2026 | Current | Decision path governance clarification. Decision Supply Chain updated with explicit five-stage decision path. New Decision Integrity concept page published. D1: decision integrity governance sub-factor added. D2: admissibility explicit as control objective. D6: portfolio and fleet monitoring added. Independence requirement explicit across dimensions. GN-001: Decision Path Coverage Test added. No change to GBI scoring methodology, certification tier thresholds, multiplier logic, or six-dimension structure. |

NOTE: Do not add the v3.1 row here. That is Item B-7.

Verify:
grep -n "v3\.0 (Clarification)\|Decision Path Coverage Test" src/content/docs/version-history.mdx
grep -n "v3\.0" src/content/docs/version-history.mdx
Expected: v3.0 original row unchanged and new clarification row both present.

Commit:
git add src/content/docs/version-history.mdx
git commit -m "docs(v3.0): add v3.0 clarification row to version history"


ITEM A-9 — Glossary
File: src/content/docs/glossary.mdx (confirm path)

Add the following six terms in alphabetical order, matching existing glossary entry format:

**Action boundary.** The point at which a proposed output becomes operationally consequential.

**Admissibility.** The eligibility of a request, state, provenance, authority, and context to enter the governed decision path. See also: [Decision Supply Chain, Stage 01](/decision-supply-chain/).

**Decision integrity.** The governance conditions under which an emerging decision is assessed for contextual fitness before reliance, propagation, or operational consequence. See also: [Decision Integrity](/standard/decision-integrity/).

**Evaluator independence.** The degree of separation between the function generating a decision and the function assessing whether that decision may continue, be relied upon, or be externally assured.

**Post-deployment monitoring.** The ongoing review of governance performance, behavioural drift, recurring control failures, and systemic signals after deployment.

**Traceability.** The capacity to reconstruct the material path from initiating condition to consequence through retained evidence.

Verify:
grep -n "Admissibility\|Decision integrity\|Evaluator independence\|Post-deployment monitoring\|Traceability\|Action boundary" src/content/docs/glossary.mdx
Expected: six matches (one per term).

Commit:
git add src/content/docs/glossary.mdx
git commit -m "docs(v3.0): glossary — add six decision-path terms"


ITEM A-10 — Institutional Applications Pages

A-10A — Hub page (/institutional-applications/ or equivalent)
Locate the hub page introduction paragraph.
grep -rn "institutional\|Institutional" src/content/docs/ --include="*.mdx" -l

Add the following sentence to the hub page introduction:

ARAF governs the full decision path — from admissibility and decision formation through action, traceability, and post-deployment monitoring.

Add link: [Decision Integrity](/standard/decision-integrity/)

A-10B — Boards page (/boards/ or equivalent)
Locate the section describing what ARAF assesses for boards.
After the existing text, insert:

ARAF now makes explicit that governance applies across the full decision path. For boards, this means governance must cover not only whether the system was authorised to operate, but whether decisions being formed were fit for context, whether they crossed into consequence through a defined commitment gate, and whether post-deployment monitoring detects systemic risk signals across the organisation's full agent deployment.

Add link: [Decision Integrity — the governance condition boards must be able to defend](/standard/decision-integrity/)

A-10C — Insurers page (if live)
Locate the underwriting relevance section.
Insert:

Decision integrity is the governance condition that determines whether autonomous system exposure can be assessed on an actuarial basis. Absence of defined context-fitness criteria, escalation thresholds, and independent evaluation makes autonomous system risk materially harder to underwrite.

Add link: [Decision Integrity — the governance condition for underwritable autonomous risk](/standard/decision-integrity/)

Commit:
git add src/content/docs/institutional-applications/
git add src/content/docs/boards/
git add src/content/docs/insurers/ 2>/dev/null || true
git commit -m "feat(v3.0): institutional pages — decision path governance references and links"


ITEM A-11 — Trust Architecture Page
File: src/content/docs/trust-architecture.mdx (confirm path)

Locate the definition section at the top of the page.
grep -n "Trust Architecture\|trust architecture" src/content/docs/trust-architecture.mdx | head -5

After the existing definition text, insert the following paragraph:

ARAF does not prescribe how decisions are controlled during inference. It defines the governance and evidentiary conditions under which those decisions are institutionally defensible.

At the bottom of the page, add:

→ [Decision Integrity — the governance condition for institutional defensibility](/standard/decision-integrity/)

Verify:
grep -n "ARAF does not prescribe how decisions are controlled during inference" src/content/docs/trust-architecture.mdx
Expected: 1.

Commit:
git add src/content/docs/trust-architecture.mdx
git commit -m "feat(v3.0): trust architecture — positioning statement and Decision Integrity link"


PACKAGE A VERIFICATION
Push all Package A commits and verify before starting Package B.

git push origin main

# Wait for Netlify deployment (2-3 minutes). Then:

# 1. Opening sentence — Decision Supply Chain
curl -s https://araf-standard.org/decision-supply-chain/ | grep -c "Governance of autonomous systems is governance"
# Expected: 1

# 2. Decision Integrity page live
curl -s https://araf-standard.org/standard/decision-integrity/ | grep -c "Decision integrity concerns"
# Expected: 1

# 3. GN-001 — Coverage Test present
curl -s https://araf-standard.org/assessor-guidance/assessor-guidance-note/ | grep -c "Decision Path Coverage Test"
# Expected: 1

# 4. Six Dimensions — decision integrity sub-factor
curl -s https://araf-standard.org/standard/six-dimensions/ | grep -c "Decision integrity governance"
# Expected: 1

# 5. GBI Impact Note PDF resolves
curl -I https://araf-standard.org/downloads/ARAF-GBI-Impact-Note.pdf | grep "HTTP"
# Expected: HTTP/2 200

# 6. Decision Integrity nav item visible
curl -s https://araf-standard.org/ | grep -c "decision-integrity"
# Expected: at least 1

All six checks must return expected results before proceeding to Package B.

---

PACKAGE B — v3.1 OUTPUT ADMISSION AMENDMENT
Items B-1 through B-9. Begin only after all Package A verification checks pass.

ITEM B-1 — Upload Amendment PDF
File to add: public/downloads/ARAF_Amendment_v3_1_Output_Admission.pdf

cp ARAF_Amendment_v3_1_Output_Admission.pdf public/downloads/ARAF_Amendment_v3_1_Output_Admission.pdf

Verify:
ls -lh public/downloads/ARAF_Amendment_v3_1_Output_Admission.pdf
Expected: file present, non-zero size.

Commit:
git add public/downloads/ARAF_Amendment_v3_1_Output_Admission.pdf
git commit -m "docs: add ARAF v3.1 amendment PDF to downloads"


ITEM B-2 — Six Dimensions Page — D3 extension
File: src/content/docs/standard/six-dimensions.mdx

B-2A — D3 opening definition
Locate:
grep -n "Contract Infrastructure governs how the system" src/content/docs/standard/six-dimensions.mdx

Replace (exact string):
Contract Infrastructure governs how the system's decisions become commitments.

With:
Contract Infrastructure governs how the system's decisions are admitted into external environments and structured into commitments.

Verify:
grep -n "admitted into external environments" src/content/docs/standard/six-dimensions.mdx
Expected: 1.

B-2B — D3 "What it assesses" list: new final sub-factor
Locate the final bullet in the D3 "What it assesses" list:
grep -n "Negotiation governance" src/content/docs/standard/six-dimensions.mdx

Insert the following as a new bullet immediately after the negotiation governance item, before the next subheading (blank line before and after):

- **Output admission and provenance control.** Does the organisation maintain controls governing which system-generated outputs are permitted to enter shared decision environments (including contract negotiation, procurement interactions, and commitments), and does each output carry a verifiable provenance signal indicating whether it has been human-reviewed, authorised, and attributable? Where autonomous or AI-assisted outputs are transmitted externally without provenance or review status, those outputs are treated as intentional positions by counterparties. This constitutes a contract infrastructure failure: ungoverned outputs entering a binding process.

Verify:
grep -n "Output admission and provenance control" src/content/docs/standard/six-dimensions.mdx
Expected: 1.

B-2C — D3: insert Output Admission Problem subsection
Locate the "The timing problem" subheading in the D3 section:
grep -n "The timing problem" src/content/docs/standard/six-dimensions.mdx

Insert the following new subsection immediately before that subheading (blank line before and after):

### The Output Admission Problem

Contract infrastructure governs not only how commitments are structured, but how candidate commitments are admitted into the negotiation process.

AI-enabled systems produce outputs that resemble considered positions: contract clauses, redlines, negotiation arguments, and structured responses. When these outputs are transmitted externally, they enter a shared decision environment irrespective of whether they were reviewed by a human, authorised within internal governance structures, or generated as exploratory or draft material.

Counterparties cannot distinguish governed outputs from ungoverned ones. They must treat all received positions as intentional. This forces verification, response, and negotiation activity regardless of output quality or provenance.

The governance failure is not incorrect output. It is the absence of admission control at the output boundary.

Ungoverned output transmission creates a structural cost transfer. The organisation deploying the system externalises its governance deficit onto the counterparty, which must absorb the verification burden. This is not ordinary negotiation inefficiency. It is a one-sided transfer of governance cost across the contract boundary.

Verify:
grep -n "The Output Admission Problem" src/content/docs/standard/six-dimensions.mdx
grep -n "absence of admission control" src/content/docs/standard/six-dimensions.mdx
Expected: each returns 1.

B-2D — D3 scoring note
Locate D3 scoring guidance or GBI implication note within the D3 section:
grep -n "scored at\|score.*3\|D3.*floor\|floor.*D3" src/content/docs/standard/six-dimensions.mdx

If a scoring note block exists, append to it. If no scoring note block exists, add the following after the Output Admission Problem subsection just inserted:

**Scoring floors.** Where output admission controls are absent, D3 must be scored at or above 3.0. Where system-generated outputs are routinely transmitted externally without provenance or review status, D3 must be scored at or above 4.0.

Verify:
grep -n "Scoring floors\|scored at or above 3\.0\|scored at or above 4\.0" src/content/docs/standard/six-dimensions.mdx
Expected: 1.

Commit:
git add src/content/docs/standard/six-dimensions.mdx
git commit -m "feat(v3.1): D3 — output admission failure, two-layer model, scoring floors"


ITEM B-3 — Decision Supply Chain Page — output admission boundary
File: src/content/docs/decision-supply-chain.mdx

B-3A — Update boundary list to five boundaries
Locate the boundary list introduction:
grep -n "Four boundaries matter\|Five boundaries matter\|data boundary\|inference boundary" src/content/docs/decision-supply-chain.mdx

Apply the following logic:
If page reads "Four boundaries matter": change to "Five boundaries matter" and insert the output admission boundary between the inference boundary and the action boundary.
If page reads "Three boundaries matter": change to "Five boundaries matter" and insert both the jurisdictional boundary and the output admission boundary.

Target state (exact text):
Five boundaries matter: the data boundary, the inference boundary, the output admission boundary, the action boundary, the jurisdictional boundary.

Verify:
grep -n "Five boundaries matter\|output admission boundary" src/content/docs/decision-supply-chain.mdx
Expected: at least 2.

B-3B — Update the boundary-to-stage mapping table
Locate the mapping table added in A-1B.
grep -n "Output admission" src/content/docs/decision-supply-chain.mdx

Add a new row between "Inference boundary / D1" and "Action boundary / D1, D3":

| Output admission | Output admission boundary | D3 |

B-3C — Insert Output Admission Boundary subsection
Locate the inference boundary subsection end and the action boundary subsection start:
grep -n "The Inference Boundary\|The Action Boundary\|inference boundary" src/content/docs/decision-supply-chain.mdx

Insert the following new subsection between the inference boundary and action boundary subsections (blank line before and after):

### The Output Admission Boundary

The output admission boundary governs which system-generated outputs are permitted to enter binding processes. It sits between inference and action. It is the point at which a model-generated output becomes a candidate decision.

**Admission** is defined as the point at which a system-generated output exits the deploying organisation's governance perimeter and enters a shared decision environment where it can influence, be relied upon, or be treated as a position by another party.

A shared decision environment includes any context where an external party can interpret the output as a position, respond to it as if intentional, rely on it in forming a decision, or incur cost or risk in evaluating it. This includes contract negotiation, procurement interactions, advisory exchanges, and structured communications with customers, regulators, or partners.

A failure at this boundary — Output Admission Failure — occurs when outputs are transmitted without provenance (human, AI-assisted, or autonomous), review status (unreviewed, reviewed, or approved), or accountability assignment. At this point, the output enters the Decision Supply Chain as if it were a governed decision.

Where outputs cross organisational boundaries, the Decision Supply Chain extends beyond the deploying organisation. Counterparties become involuntary participants in the chain, absorbing verification obligations for outputs whose governance status is unknown.

Verify:
grep -n "The Output Admission Boundary\|Output Admission Failure\|involuntary participants" src/content/docs/decision-supply-chain.mdx
Expected: each returns 1.

Commit:
git add src/content/docs/decision-supply-chain.mdx
git commit -m "feat(v3.1): add output admission boundary to Decision Supply Chain"


ITEM B-4 — Evidence Infrastructure Standard (MDX)
File: src/content/docs/evidence/evidence-infrastructure-standard.mdx

B-4A — Add output provenance evidence element
Locate the Authority and Attribution section:
grep -n "Authority and Attribution\|authority.*attribution\|Attribution" src/content/docs/evidence/evidence-infrastructure-standard.mdx

Insert the following new evidence element within the Authority and Attribution section, after the existing elements in that section:

**Output provenance and admission status.** For each externally transmitted decision artefact, the evidence record must include:
- Generation source (human, AI-assisted, or autonomous)
- Review status at time of transmission
- Identity of reviewer or approver where applicable
- Timestamp of admission into the Decision Supply Chain

Outputs lacking provenance metadata are treated as ungoverned for assessment purposes. Where externally transmitted outputs cannot be linked to an admission record with defined provenance and review status, the corresponding control must be assessed as not evidenced. This constitutes a D3 deficiency irrespective of internal governance claims.

Verify:
grep -n "Output provenance and admission status\|treated as ungoverned" src/content/docs/evidence/evidence-infrastructure-standard.mdx
Expected: each returns 1.

Commit:
git add src/content/docs/evidence/evidence-infrastructure-standard.mdx
git commit -m "feat(v3.1): add output provenance evidence element to EIS-01 MDX"


ITEM B-5 — Evidence Infrastructure Standard (Standalone HTML)
File: public/documents/EIS-01-Evidence-Infrastructure-Standard.html
This file is a standalone HTML document deployed separately from the MDX content. It must be updated independently to match B-4.

B-5A — Add output provenance evidence element
Locate the Authority and Attribution section in the HTML:
grep -n "Authority and Attribution\|authority-attribution\|provenance" public/documents/EIS-01-Evidence-Infrastructure-Standard.html

Insert the equivalent HTML for the output provenance element. Match the existing HTML structure (paragraph tags, list tags) used for other evidence elements in that section. Content is identical to B-4A above; only the markup format changes to match the existing HTML structure of the document.

Verify:
grep -n "Output provenance\|treated as ungoverned" public/documents/EIS-01-Evidence-Infrastructure-Standard.html
Expected: each returns 1.

Commit:
git add public/documents/EIS-01-Evidence-Infrastructure-Standard.html
git commit -m "feat(v3.1): add output provenance element to EIS-01 standalone HTML"


ITEM B-6 — Certification Framework Page
File: src/content/docs/certification/certification-framework.mdx

B-6A — Assessment scope note
Locate the assessment requirements section:
grep -n "assessment.*require\|Initial assessment\|Assessment must" src/content/docs/certification/certification-framework.mdx

Insert the following note within or immediately after the assessment requirements section:

Assessment must include evaluation of output admission controls for all systems that generate externally transmitted decision artefacts. Systems lacking admission controls cannot achieve ARAF Compliant or Certified status where those outputs enter shared decision environments forming part of binding commercial processes.

Verify:
grep -n "output admission controls\|cannot achieve ARAF Compliant" src/content/docs/certification/certification-framework.mdx
Expected: 1.

B-6B — Event-triggered reassessment list
Locate the event-triggered reassessment list:
grep -n "event-triggered\|Event-triggered\|reassessment.*trigger\|trigger.*reassessment" src/content/docs/certification/certification-framework.mdx

Add the following two items to the event-triggered reassessment list:
- Identification of ungoverned outputs entering external negotiation or commitment processes
- Evidence of systematic verification burden transfer to counterparties

Verify:
grep -n "ungoverned outputs entering\|verification burden transfer" src/content/docs/certification/certification-framework.mdx
Expected: each returns 1.

Commit:
git add src/content/docs/certification/certification-framework.mdx
git commit -m "feat(v3.1): add admission control scope to certification requirements"


ITEM B-7 — Version History Page
File: src/content/docs/version-history.mdx

B-7A — Add v3.1 row
Locate the v3.0 row and the v3.0 clarification row added in A-8:
grep -n "v3\.0\|v3\.1" src/content/docs/version-history.mdx | head -10

Insert the following row immediately after the v3.0 clarification row (not before it):

| v3.1 | March 2026 | Current | Minor amendment. Output Admission Failure formalised as a D3 failure mode. D3 extended to include Admission Infrastructure (Layer 1) alongside existing Commitment Infrastructure (Layer 2). Layer Dominance Rule established. Output Admission Boundary added to Decision Supply Chain as the fifth boundary. Output provenance element added to EIS-01. Assessment scope extended for Certification. Infrastructure Collapse multiplier extended to capture Output Admission Failure where D3 ≥ 4 (Layer 1 absent) and D1 ≥ 3. GBI scoring methodology, certification tiers, and multiplier trigger conditions unchanged. |

Verify:
grep -n "v3\.1\|Output Admission Failure" src/content/docs/version-history.mdx
grep -n "v3\.0" src/content/docs/version-history.mdx
Expected: both v3.0 rows and the v3.1 row present; v3.0 original row unchanged.

Commit:
git add src/content/docs/version-history.mdx
git commit -m "docs(v3.1): add v3.1 row to version history"


ITEM B-8 — Downloads Page
File: src/content/docs/downloads.mdx

B-8A — Add amendment entry
Locate the Core Framework Documents section:
grep -n "Core Framework\|Framework Documents\|Amendment\|Governance Benchmark Index" src/content/docs/downloads.mdx

Insert the following entry in the Core Framework Documents section, after existing GBI or Certification entries, before any supplementary or crosswalk sections:

**ARAF Amendment Document v3.1 — Output Admission and Verification Integrity**

D3 extension: Contract Infrastructure. Formalises Output Admission Failure as a named failure mode. Introduces the output admission boundary, two-layer D3 model, Layer Dominance Rule, and scoring floors. Affects: Six Dimensions (D3), Decision Supply Chain (fifth boundary), EIS-01 (output provenance element), Certification Framework (assessment scope), Multiplier Logic CP-002 v2 (Infrastructure Collapse extended).

[Download PDF](/downloads/ARAF_Amendment_v3_1_Output_Admission.pdf)

Verify:
grep -n "ARAF_Amendment_v3_1\|Output Admission and Verification" src/content/docs/downloads.mdx
Expected: 1.

Commit:
git add src/content/docs/downloads.mdx
git commit -m "docs(v3.1): add amendment v3.1 entry to downloads page"


ITEM B-9 — Copilot Instructions Update
File: .github/copilot-instructions.md
This file governs the design agent's understanding of the ARAF framework. It must be updated to reflect the D3 extension.

B-9A — D3 sub-factor list
Locate:
grep -n "Contract Infrastructure\|D3.*sub-factor\|D3.*assesses" .github/copilot-instructions.md

Add "output admission and provenance control" to the D3 sub-factor list if one exists.

B-9B — Infrastructure Collapse description
Locate:
grep -n "Infrastructure Collapse\|D3.*multiplier\|multiplier.*D3" .github/copilot-instructions.md

Update the Infrastructure Collapse description to note it captures both commitment-layer and admission-layer D3 failure. Do not change the trigger condition (D3 ≥ 4 AND D1 ≥ 3).

Verify:
grep -n "output admission\|admission.*boundary\|Infrastructure Collapse" .github/copilot-instructions.md
Expected: at least 2 matches.

Commit:
git add .github/copilot-instructions.md
git commit -m "docs(v3.1): update copilot instructions — D3 two-layer model, admission boundary"


FINAL PUSH AND VERIFICATION

# Push all commits
git push origin main

# Wait for Netlify deployment (2-3 minutes). Then run all checks:

# PACKAGE A checks
curl -s https://araf-standard.org/decision-supply-chain/ | grep -c "Governance Across the Decision Path"
# Expected: 1

curl -s https://araf-standard.org/standard/decision-integrity/ | grep -c "Decision integrity concerns"
# Expected: 1

curl -s https://araf-standard.org/assessor-guidance/assessor-guidance-note/ | grep -c "Decision Path Coverage Test"
# Expected: 1

curl -s https://araf-standard.org/standard/six-dimensions/ | grep -c "Decision integrity governance"
# Expected: 1

curl -I https://araf-standard.org/downloads/ARAF-GBI-Impact-Note.pdf | grep "HTTP"
# Expected: HTTP/2 200

# PACKAGE B checks
curl -s https://araf-standard.org/standard/six-dimensions/ | grep -c "Output Admission Problem"
# Expected: 1

curl -s https://araf-standard.org/decision-supply-chain/ | grep -c "output admission boundary"
# Expected: 1

curl -s https://araf-standard.org/evidence/evidence-infrastructure-standard/ | grep -c "Output provenance"
# Expected: 1

curl -s https://araf-standard.org/certification/certification-framework/ | grep -c "output admission controls"
# Expected: 1

curl -s https://araf-standard.org/version-history/ | grep -c "v3.1"
# Expected: 1

curl -I https://araf-standard.org/downloads/ARAF_Amendment_v3_1_Output_Admission.pdf | grep "HTTP"
# Expected: HTTP/2 200

curl -s https://araf-standard.org/downloads/ | grep -c "ARAF_Amendment_v3_1"
# Expected: 1

curl -s https://araf-standard.org/documents/EIS-01-Evidence-Infrastructure-Standard.html | grep -c "Output provenance"
# Expected: 1


DELIVERABLE CONFIRMATION
When all post-deployment checks return expected results, confirm completion with:

ARAF website update complete — v3.0 + v3.1.

Package A (v3.0 Decision-Path Clarification):
Items completed: A-1 (Decision Supply Chain), A-2 (Decision Integrity page), A-3 (GN-001),
A-4 (Homepage), A-5 (7 PDFs + Downloads), A-6 (D1/D2/D6), A-7 (Independence),
A-8 (Version History), A-9 (Glossary), A-10 (Institutional pages), A-11 (Trust Architecture)

Package B (v3.1 Output Admission Amendment):
Items completed: B-1 (PDF upload), B-2 (Six Dimensions D3), B-3 (Decision Supply Chain),
B-4 (EIS-01 MDX), B-5 (EIS-01 HTML), B-6 (Certification), B-7 (Version History),
B-8 (Downloads), B-9 (Copilot instructions)

Deployment: live at araf-standard.org
Commits: [list commit hashes]


WHAT THIS SOP DOES NOT COVER
The following are out of scope and require separate execution:

GCA Section 7 correction (trigger notification period 30 days → 60 days): separate SOP required.
Glossary additions for v3.1 (Output Admission, Output Admission Failure, Shared Decision Environment, Verification Drag, Output Admission Boundary): add in next glossary update cycle.
GN-004 publication (Output Admission and Provenance Control assessor guidance note): not yet drafted; flagged for next release.
Contract Boundary Integrity GTM pack (six-asset sales execution pack): operational sales collateral, not a website update. Deploy through Venture Bench sales channel separately.
CP-002 v2 document publication: if publishing as a standalone download, add to /downloads/ in a separate update.
VB Global Pricing Strategy Layer v3.5: internal document. No website publication required.


FILES REQUIRED IN GITHUB BEFORE EXECUTION
The following files must be present in the repository working directory before this SOP is executed. All files are available for download from this session.

UPLOAD TO GITHUB BEFORE RUNNING THIS SOP:

New MDX page (create in repository):
  src/content/docs/standard/decision-integrity.mdx
  → Create this file using the content specified in Item A-2 above.

PDFs — copy to public/downloads/:
  ARAF-Interpretive-Note-Decision-Path.pdf
  ARAF-Conforming-Amendments-Schedule.pdf
  ARAF-GBI-Impact-Note.pdf
  ARAF-Assessor-Transition-Memo.pdf
  ARAF-Assessor-Checklist-Appendix.pdf
  ARAF-Minimum-Evidence-Matrix.pdf
  ARAF-Change-Log-Redline-Summary.pdf
  ARAF_Amendment_v3_1_Output_Admission.pdf

JSX artifacts (for reference — content extracted into MDX manually):
  decision-supply-chain.jsx    → content reference for A-1
  decision-integrity.jsx       → content reference for A-2
  gn001-decision-path-test.jsx → content reference for A-3
  public-positioning-note.jsx  → content reference for A-4

All PDFs and the amendment DOCX are available for download from this conversation.
The JSX files are available for download from this conversation.
The decision-integrity.mdx file must be created by the agent using the content in Item A-2.

Institute for Autonomous Governance Pty Ltd · ACN 696 112 277 · March 2026
ARAF v3.0 + v3.1 · Internal use only
