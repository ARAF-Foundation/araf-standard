# INSTITUTE FOR AUTONOMOUS GOVERNANCE PTY LTD
**ACN 696 112 277**

## ARAF STANDARD — COMPANION DOCUMENT
# Governance Coherence Addendum

| SPECIFICATION | PUBLISHED | APPLIES TO | STATUS |
|---|---|---|---|
| v3.0 | March 2026 | ARAF Compliant and Certified tiers | Current |

---

## Contents

1. Purpose and Scope
2. Relationship to the ARAF Standard
3. Governance Coherence Components
4. The Governance Coherence Index (GCI)
5. Evidence Requirements
6. Assessment Report Structure
7. Re-Assessment Triggers
8. Assessor Accreditation Requirements

---

## § 01 Purpose and Scope

This Addendum formalises the Governance Coherence layer of the ARAF Standard. It specifies how operational governance is evaluated, measured, and reported alongside the existing six-dimension design assessment.

Governance Coherence addresses the most significant limitation of design-only assessment: the decoupling between documented governance architecture and actual operational practice. An organisation may maintain governance documentation of excellent quality while governance controls are not exercised in operation. ARAF Compliant and ARAF Certified certification tiers require demonstration of operational coherence, not design adequacy alone.

This Addendum applies to all ARAF assessments at the Compliant and Certified certification tiers. It does not modify the ARAF Assessed tier, which remains a design adequacy assessment.

---

## § 02 Relationship to the ARAF Standard

Governance Coherence is not a seventh ARAF dimension. It is an evaluation layer applied across all six existing dimensions. This preserves the existing scoring architecture while adding operational verification.

The design assessment (GBI) evaluates whether governance architecture is appropriately structured for the system's risk profile. Governance Coherence evaluates whether that architecture is actually exercised. The GBI and GCI together determine certification tier eligibility.

The parallel is the SOC 2 Type I / Type II distinction. The GBI assessment corresponds to Type I: point-in-time design adequacy. The Governance Coherence assessment corresponds to Type II: operational effectiveness over a defined period.

---

## § 03 Governance Coherence Components

### 3.1 Authority Adherence

Authority Adherence measures whether operational decisions occurred within the authority boundaries defined in the governance architecture.

Assessment indicators include: decision logs showing authority level applied at each consequential action; escalation records demonstrating that decisions exceeding defined autonomy thresholds were escalated to the appropriate authority level; override logs documenting instances where automated decisions were superseded by human intervention, with authorisation records for each override.

A pattern of systematic boundary violations — decisions consistently operating at autonomy levels above those defined in the governance architecture — is a critical coherence finding requiring immediate remediation before certification can be issued or maintained.

### 3.2 Control Exercise

Control Exercise measures whether specified governance controls were performed at the required cadence and depth during the assessment window.

Assessment indicators include: governance meeting records with timestamps, attendance, and decision records; approval documentation for system changes, autonomy level modifications, and provider substitutions; monitoring reports demonstrating that surveillance obligations were fulfilled; and incident records showing governance processes were triggered by operational events.

The absence of any recorded exceptions is a negative coherence indicator. Real operational deployments of autonomous systems always produce edge cases, boundary conditions, and governance events. Zero exceptions suggests either that the governance process is not being exercised or that exception recording is not functional. Assessors must specifically evaluate the absence of exceptions rather than treating it as evidence of clean operation.

### 3.3 Drift Detection

Drift Detection measures whether the system's operational behaviour has diverged from the governance assumptions made at the time of the initial or most recent assessment.

Drift is specific to autonomous systems. Unlike human-operated processes, autonomous systems can change their own effective behaviour post-deployment through model updates, training data changes, scope expansion, and adaptive logic. A system may have been correctly assessed at deployment and may have drifted outside its governance architecture without any deliberate decision by the organisation.

Assessment indicators include: model version tracking with change impact assessments; operational scope documentation comparing deployed scope against assessed scope; decision pattern analysis identifying systematic changes in decision distributions; and provider change records where third-party AI components have been substituted or updated.

Drift detection is the component that distinguishes Governance Coherence from standard audit methodology. It is the primary justification for continuous or periodic coherence reassessment rather than one-time certification.

---

## § 04 The Governance Coherence Index (GCI)

### 4.1 Scoring Methodology

The GCI is scored on a 0.0 to 1.0 scale, calculated per ARAF dimension. A GCI of 1.0 represents full operational coherence: all governance controls exercised at the required frequency and depth, no authority boundary violations, and no measurable drift from governance assumptions.

The GCI is not a single aggregate score. Dimensional scores must be reported individually to preserve diagnostic utility. A combined GCI is calculated as a weighted average for certification tier determination, with weighting applied based on the system's risk profile as determined by the GBI assessment.

### 4.2 GCI as GBI Modifier

The GCI functions as a modifier on the base GBI dimensional scores. For a given dimension, the effective score used for certification tier determination is:

> **Effective Dimension Score = GBI Dimension Score ÷ GCI Dimension Score**

This means an organisation with strong governance design (low GBI score, indicating low risk) but poor operational coherence (low GCI) will have its effective certification posture degraded to reflect operational reality. The system rewards organisations that both design well and operate accordingly.

### 4.3 Certification Thresholds

Provisional certification thresholds for the initial deployment period are as follows. These thresholds are subject to formal review after 50 completed assessments.

| TIER | REQUIREMENTS |
|---|---|
| **ARAF Compliant** | GBI score ≤ 2.5 (existing threshold); GCI ≥ 0.70 across all assessed dimensions; No critical coherence findings unresolved at time of certification |
| **ARAF Certified** | GBI score ≤ 1.75 (existing threshold); GCI ≥ 0.85 across all assessed dimensions; Tier 1 evidence for at least 80% of sampled controls; No critical or significant coherence findings unresolved |

### 4.4 Calibration Protocol

During the initial deployment period (first 20 certifications), the following calibration requirements apply:

| REQUIREMENT | DESCRIPTION |
|---|---|
| **Dual-Assessor** | All GCI scores must be independently validated by a second accredited assessor. |
| **Range Reporting** | GCI scores reported as a range (e.g., 0.75–0.85) rather than a point estimate. |
| **Inter-Rater Tracking** | Scoring differences between assessors must be documented and submitted to the ARAF Standards Authority. |
| **Threshold Review** | Provisional thresholds reviewed and adjusted as needed after 20 and 50 assessments. |

---

## § 05 Evidence Requirements

### 5.1 Evidence Tiers

| TIER | TYPE | DESCRIPTION |
|---|---|---|
| **Tier 1** | Infrastructure-Generated Evidence | Evidence produced directly by technical enforcement infrastructure: automated decision logs, enforcement action records, exception and override logs, drift monitoring outputs. Tier 1 evidence is the most reliable because it is contemporaneous and cannot be retrospectively assembled. |
| **Tier 2** | Contemporaneous Documentation | Evidence produced at the time of governance events but not by automated infrastructure: governance meeting records with timestamps, approval documentation, escalation logs, manual review records. Tier 2 evidence is acceptable where Tier 1 is structurally unavailable (primarily for D3, D4, and D5 assessments). |
| **Tier 3** | Reconstructed Documentation | Evidence assembled retrospectively from available records. Tier 3 evidence is acceptable only for the ARAF Assessed tier and is not acceptable for Compliant or Certified coherence assessment. Where an organisation can only produce Tier 3 evidence, the assessment report must note this explicitly and the coherence assessment must be qualified accordingly. |

### 5.2 Evidence Requirements by Certification Tier

**ARAF Assessed:** No coherence evidence required. Design adequacy assessment only.

**ARAF Compliant:** Tier 1 or Tier 2 evidence required. Where Tier 2 evidence is used in lieu of Tier 1 for D1, D2, or D6, the assessment report must note the limitation. Tier 2 evidence is the expected standard for D3, D4, and D5.

**ARAF Certified:** Tier 1 evidence required for at least 80% of sampled controls. Tier 2 evidence acceptable for D3, D4, and D5. Any control assessed on Tier 2 evidence must be individually identified in the assessment report.

### 5.3 Assessment Window

The minimum assessment window for coherence evaluation is 180 days, aligned with the ARAF Re-Score cadence. The assessment window must be specified in the certification report.

Assessors must sample governance artifacts across the entire assessment window, not only from periods immediately preceding assessment. Sampling must check presence, timeliness, and completeness of evidence.

### 5.4 Data Handling

- Evidence reviewed during assessment must be held under confidentiality obligations equivalent to those applicable to financial audit work papers
- Evidence must not be retained beyond the period required for assessment completion and regulatory compliance
- Evidence destruction protocols must be specified in the assessment engagement terms
- Where evidence contains personal data, assessment must comply with applicable privacy legislation

---

## § 06 Assessment Report Structure

All ARAF Compliant and Certified assessment reports must separate design adequacy findings from operational coherence findings. The required report structure is:

- Executive Summary (including certification tier, GBI score, GCI scores, scope)
- Scope and Assessment Window
- Design Adequacy Assessment (GBI dimensional scores and findings)
- Governance Coherence Assessment (GCI dimensional scores and findings)
- Evidence Summary (evidence tier used per dimension, gaps noted)
- Findings and Observations (critical, significant, and informational)
- Scope Limitation and Disclaimer

The scope limitation language must appear in every Compliant and Certified assessment report:

> *This certification covers the governance architecture design and operational coherence of [Organisation] during the assessment window specified above. It does not guarantee future system performance, safety, or absence of adverse outcomes. Certification is subject to re-assessment upon the occurrence of material change events as defined in the ARAF Standard.*

---

## § 07 Re-Assessment Triggers

The following events invalidate the coherence assessment and require mandatory reassessment before certified status can be maintained:

- Material change to the system's autonomy level (increase of more than one Autonomy Gradient level)
- Substitution of a primary AI provider or model
- Significant expansion of operational scope beyond the scope assessed
- A material incident in which the governance architecture was engaged, tested, or found insufficient
- Discovery of systematic governance drift identified outside the normal assessment cycle
- A government action, including supply chain risk designation, affecting the enterprise's primary AI provider or any material component of the Decision Supply Chain

Organisations must notify their accredited assessor of triggering events within 60 days of occurrence. Continued use of a certification after a triggering event without initiating reassessment constitutes a certification breach.

---

## § 08 Assessor Accreditation Requirements

Governance Coherence assessment requires competencies distinct from design adequacy assessment. Accredited assessors must complete the Governance Coherence module of the ARAF Assessor Accreditation Programme before conducting coherence assessments at the Compliant or Certified tier. The module covers:

- Evidence evaluation methodology for each coherence component
- Sampling design for governance artifact review
- Drift analysis techniques for autonomous systems
- GCI scoring mechanics and calibration protocols
- Report structure and scope limitation requirements

---

*Martin, Carly. Agentic Risk Architecture Framework (ARAF), Version 3.0. Institute for Autonomous Governance Pty Ltd, 2026.*

*© 2026 Institute for Autonomous Governance Pty Ltd*
