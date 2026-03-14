# GN-001: Conducting an ARAF Governance Assessment

*Assessor Guidance Note GN-001 · Agentic Risk Architecture Framework v3.0*

---

This guidance note provides end-to-end operational methodology for accredited assessors conducting ARAF governance assessments. It covers the full assessment lifecycle from engagement setup through report delivery and post-assessment obligations.

GN-001 is the foundational assessor methodology document. GN-002 (Cross-Border Deployment Assessment) and GN-003 (Governance Coherence Assessment) are supplementary documents that extend this guidance for specific assessment contexts. Where a cross-border deployment is in scope, apply GN-002 alongside this note from Section 2 onwards. Where a Compliant or Certified determination is sought, apply GN-003 for the coherence evaluation component.

This guidance note must be read in conjunction with the [Assessor Accreditation Standard](/assessor-guidance/assessor-accreditation-standard/), which governs the conditions under which assessments may be conducted. Nothing in this note modifies those requirements.

![ARAF Assessment Lifecycle: operational sequence applied by accredited assessors when conducting a governance architecture assessment under the Agentic Risk Architecture Framework (ARAF)](/images/araf/araf_gn001_assessment_lifecycle.svg)

*ARAF Assessment Lifecycle — Operational sequence applied by accredited assessors when conducting a governance architecture assessment under the Agentic Risk Architecture Framework (ARAF).*

---

## 1. Engagement Setup

Before accepting any assessment engagement, the assessor must complete a pre-engagement independence check against the requirements set out in Section 3 of the Assessor Accreditation Standard. This is not optional and is not satisfied by a general declaration. The assessor must review each independence criterion against the specific organisation being assessed and document the outcome.

Where a potential conflict of interest is identified, the assessor must disclose it to the organisation before accepting the engagement. Where a disclosed conflict cannot be adequately mitigated — for example, where the assessor has provided advisory services directly related to the governance architecture under assessment within the preceding 12 months — the assessor must decline.

The engagement letter must specify:

- the systems within scope, identified by name and function
- the assessment window, including start and end dates
- the certification tier being targeted, if any
- the methodology version to be applied (current published version at engagement commencement)
- the independence declaration and any disclosed conflicts with mitigation arrangements
- the documentation standard to be applied to the assessment report

Where the organisation has not identified a target certification tier, the assessor should clarify this before commencing. An assessment conducted without a target tier may still produce a valid GBI score and dimensional profile, but the evidence collection and coherence assessment procedures differ depending on whether Compliant or Certified status is sought.

---

## 2. System Scoping and Decision Supply Chain Mapping

### Identifying systems within scope

Not every autonomous system an organisation operates requires ARAF assessment. The scoping decision should be driven by consequence: systems that make or materially influence consequential decisions without per-decision human authorisation are within scope. Systems that produce recommendations requiring human approval before action are not autonomous in the ARAF sense, though they may warrant assessment if the practical independence of human review is limited.

Confirm with the organisation which systems are proposed for assessment. Review the confirmation against the organisation's own system inventory where one exists. Where the proposed scope appears to exclude material autonomous systems, document the exclusion and its basis.

### Mapping the Decision Supply Chain

For each system in scope, produce a Decision Supply Chain map before dimensional scoring begins. The map must identify:

- each link in the chain from training data origin to operational output
- the party responsible for governance at each link (data provider, foundation model developer, fine-tuning provider, deploying organisation, downstream recipients)
- the contractual relationship governing each link, including the jurisdiction of governing law
- the jurisdictional boundaries crossed at each link
- the governance accountability assignment at each link

The chain map is both an assessment tool and a required report component. Produce it in sufficient detail for an institutional reader — board member, underwriter, or regulator — to understand who is accountable for what at each stage of decision formation.

For cross-border deployments, apply GN-002 Section 2 from this point. The jurisdictional footprint mapping in GN-002 extends the chain map with a jurisdiction matrix that the standard chain map does not require.

The infrastructure-versus-decision-participating provider distinction is analytically important. A cloud compute provider is infrastructure: it does not shape the content of decisions. A foundation model provider is decision-participating: its contribution shapes the content of every decision the system produces. The governance requirements, contractual provisions, and evidence obligations differ between these categories. The chain map must reflect this distinction.

The following template structures the chain map required by this section. The assessment report must include a completed version of this template.

### Decision Supply Chain Mapping Template

| Chain Link | Function | Provider / Entity | Jurisdiction | Governance Responsibility | Contract Instrument | Decision Participation |
|---|---|---|---|---|---|---|
| Training Data Origin | Data creation / acquisition | | | Data provenance compliance | Data licence agreement | Indirect |
| Foundation Model | Model architecture and training | | | Model training governance | AI service agreement | Direct |
| Fine-Tuning Layer | Model specialisation | | | Dataset governance | Internal governance documentation | Direct |
| RAG Layer (if applicable) | Runtime content retrieval | | | Content source governance | Internal policy | Direct |
| Application Layer | Decision generation | Deploying organisation | | Operational governance | Internal operational procedures | Direct |
| Delivery Interface | Output delivery | | | Customer interaction governance | Platform terms / customer contracts | Indirect |

Assessors must ensure that the completed chain map identifies every party that influences decision formation, distinguishes decision-participating providers from infrastructure providers, identifies the jurisdictional footprint of the decision pipeline, and documents contractual governance at each link. The Jurisdiction column must use the full jurisdiction name, not an abbreviation.

---

## 3. Evidence Collection

### Evidence categories

ARAF governance evidence falls into four categories. Evidence collection should be organised by category, not by dimension, because a single piece of evidence may be relevant to multiple dimensions.

**Design evidence** addresses governance architecture at the point of system design and deployment authorisation. This includes system design documents, deployment authorisation records, initial governance assessments, AIOC establishment records, and board approval documentation.

**Deployment evidence** addresses the governance decisions made at the time of deployment. This includes model selection records, provider agreement terms, fine-tuning governance documentation, scope boundary definitions, and initial risk assessments.

**Operational evidence** addresses governance in production. This includes operational logs, AIOC decision records, monitoring reports, exception handling records, incident reports, escalation records, and reassessment records. Operational evidence is the primary evidence category for governance coherence assessment.

**Outcome evidence** addresses governance responses to adverse outcomes. This includes incident investigation records, regulatory correspondence, litigation records, and remediation documentation. Outcome evidence is reactive but the protocol for producing it must be established proactively.

### Evidence requests

Issue evidence requests by category before the assessment commences. Do not request evidence dimension by dimension — this signals to the organisation which dimensions are under scrutiny and may produce targeted rather than representative evidence.

A complete evidence request covers all four categories. Specify the format requirements for each category, including the authenticity and integrity requirements in the ARAF Evidence Standard.

### Evidence quality tier classification

As evidence is received, classify each item by quality tier:

- **Tier 1** — infrastructure-generated, tamper-evident records (system logs, audit trails, automated governance records). Highest admissibility.
- **Tier 2** — contemporaneous documentation produced at or near the time of the event (board minutes, AIOC decision logs, deployment authorisation records produced before the assessment). High admissibility.
- **Tier 3** — reconstructed documentation produced after the event (retrospective governance narratives, policy documents prepared in anticipation of assessment). Lower admissibility.
- **Tier 4** — management representation (written assertions without supporting contemporaneous records). Not admissible for coherence assessment at any certification tier.

Identify Tier 4 situations early. Where management representation is the only available source for a material control, communicate this to the organisation before scoring. The organisation needs to understand that Tier 4 evidence cannot support a coherence finding and that the control in question will be assessed as not evidenced. This is not a punitive outcome — it is the correct assessment of the governance record. The presence of Tier 4 as the primary evidence source for any control is itself a governance finding requiring notation in the report.

### Interview protocol

Interviews with AIOC members, system owners, and operational teams supplement documentary evidence. They do not replace it. An interview that confirms what the documents show strengthens the evidence record. An interview that contradicts what the documents show, or that describes governance practices for which no documentary evidence exists, produces a Tier 4 situation.

Interview notes must be contemporaneous — produced during or immediately after the interview, not reconstructed from memory. Where an interviewee makes a material representation that is not supported by documentary evidence, document the representation explicitly and classify it as Tier 4.

---

## 4. Dimensional Scoring

Score each dimension independently before considering dimensional interactions. The multiplier assessment in Section 5 follows dimensional scoring and must not influence it.

For each dimension, the scoring process has three steps: review the evidence relevant to that dimension; apply the dimension's scoring criteria against the evidence; and document the scoring rationale, including the evidence reviewed, the criteria applied, and the basis for the score assigned.

### D1 — Autonomy Gradient

D1 establishes the foundational governance burden. It is not simply a technical classification of what the system does — it is an assessment of whether the governance architecture is adequate for the autonomy level at which the system actually operates.

The key distinction is between nominal and effective autonomy. A system nominally classified as supervised may operate at a higher effective autonomy level if the human oversight mechanism is inadequate for the decision volume, if exception handling procedures are poorly defined, or if scope boundaries are not enforced in practice.

Score the effective autonomy level, not the nominal classification. Where the organisation has classified its own system at a lower autonomy level than the evidence supports, document the discrepancy.

A supervisory governance structure applied to a high-autonomy deployment is not an oversight structure. It is the appearance of oversight without the substance.

### D2 — Data Sensitivity Exposure

Assess operational data sensitivity and training data provenance as separate risk categories. An adequate D2 score requires adequate governance of both.

For training data provenance, the assessment covers three layers: the foundation model layer (what representations has the foundation model developer made, and what warranties and indemnification are available); the fine-tuning layer (what is the legal basis for using each data category, and what documentation supports it); and the retrieval-augmented generation layer where applicable (what copyright exposure does runtime content retrieval create).

Cross-border deployments create jurisdictional divergence in training data provenance obligations. Apply GN-002 Section 3 for D2 scoring in cross-border contexts.

### D3 — Contract Infrastructure

D3 assesses the legal expression of governance — whether the contracts governing the system's operation adequately address the autonomous action consequences the system creates.

Particular attention should be paid to: AI-specific liability provisions (or their absence); liability cap adequacy relative to the actual decision volume and consequence magnitude; force majeure provisions and whether they address jurisdictional events relevant to the deployment; provider substitution provisions; and negotiation governance processes.

Contract infrastructure gaps are invisible until they matter. The absence of adequate provisions may not create an immediately visible operational problem but creates the governance deficit that D3 is designed to measure.

### D4 — Liability Architecture

D4 assesses how liability for autonomous action consequences is structured, documented, and governed. The central concept is the autonomous action consequence category: outcomes produced by the system's decisions without per-step human authorisation.

Review whether the organisation has explicitly identified and documented autonomous action consequences for each material system. Assess whether liability caps in commercial agreements are adequate for the actual exposure the system creates — not the exposure a human-reviewed process would create. Assess whether carve-outs leave material exposure ungoverned, particularly force majeure, intellectual property, and consequential loss carve-outs.

The gap between autonomy level and liability architecture is the most common D4 finding. A system operating at Autonomy Gradient level 3 or above with liability caps structured for a supervised process has an ungoverned autonomous action consequence exposure.

### D5 — Commercial Leverage

D5 assesses provider dependency and commercial concentration risk. The governance question is whether the organisation has adequate provider substitution capacity and contractual protection against concentration events.

Assess the practical substitutability of each critical provider — not whether substitution is theoretically possible but whether it is operationally realistic within a timeframe that would allow the organisation to maintain service continuity. A provider who cannot be substituted within six months is a critical dependency regardless of contract terms.

Government-adjacent customer concentration requires specific screening for Political Cascade conditions. If D5 scores at 4 or above, assess D3 for Political Cascade trigger conditions before completing the multiplier analysis.

### D6 — Adaptive Stability

D6 assesses governance maintenance under operational conditions. The key question is whether the governance architecture remains adequate as the system, its operating environment, and the regulatory landscape change.

Assess the retraining governance protocol, the event-triggered reassessment mechanism, the AIOC meeting cadence and decision authority, and the anomaly escalation process. An organisation with robust design governance but no mechanism for detecting and responding to governance drift has an incomplete governance architecture.

The five operational conformance signals that inform D6 assessment are: boundary adherence (is the system operating within defined scope parameters); control invocation integrity (are governance controls being invoked as designed); audit trace completeness (does the evidence record allow reconstruction of governance decisions); behavioural drift (is the system's decision pattern consistent with its assessed governance posture); and governance scope drift (is the system's operational scope expanding beyond the assessed scope).

---

## 5. Multiplier Assessment

The multiplier assessment identifies compound governance weaknesses where dimensional interactions create risk greater than the sum of individual dimensional scores. Assess each of the four multiplier conditions after dimensional scoring is complete.

**Systemic Escalation** (D1 ≥ 4 AND D4 ≥ 4): High autonomy combined with inadequate liability architecture creates an ungoverned exposure at scale. The combination means the system is making consequential decisions at high volume without the liability architecture to govern the consequences. +3 GBI penalty.

**Infrastructure Collapse** (D3 ≥ 4 AND D1 ≥ 3): Inadequate contract infrastructure combined with operational autonomy creates accountability gaps that cannot be resolved after an adverse outcome. Where the contracts governing the system do not adequately address AI liability and the system operates at level 3 or above, the legal architecture for accountability has collapsed. +2 GBI penalty.

**Leverage Collapse** (D5 ≥ 4 AND D4 ≥ 3): High provider dependency combined with inadequate liability architecture means the organisation cannot maintain operational continuity or manage adverse outcomes if a critical provider relationship fails. +2 GBI penalty.

**Political Cascade** (D5 ≥ 4 AND D3 ≥ 3 with single-provider dependency and government-adjacent customer concentration): High commercial dependency combined with inadequate political force majeure or provider substitution provisions governing government designation events. A provider designation event converts customer concentration risk into existential revenue loss where contract infrastructure does not address the cascade mechanism. +2 GBI penalty.

Document the multiplier reasoning for each condition assessed, whether or not the condition is triggered. Where a condition is not triggered, the reasoning should confirm the basis for that determination — not merely assert that the thresholds were not met.

Where multiple multipliers are triggered, apply all penalties. The GBI composite score is the dimensional average plus all applicable multiplier penalties, subject to the maximum of 5.0.

---

## 6. GBI Calculation and Coherence Assessment

### GBI calculation

The GBI composite score is calculated as the unweighted average of the six dimensional scores, plus any applicable multiplier penalties. Apply the published calculation methodology without modification.

The GBI score reflects design adequacy. It answers the question: is the governance architecture designed adequately for the autonomy level at which this system operates?

### When coherence assessment applies

Coherence assessment is required for all ARAF Compliant and ARAF Certified determination attempts. It is not required for ARAF Assessed outcomes.

If the organisation's GBI score meets the threshold for Compliant (≤ 2.50) or Certified (≤ 1.75), the assessment must include a Governance Coherence Index (GCI) evaluation before a tier determination can be issued. A GBI score that meets the threshold is a necessary but not sufficient condition for Compliant or Certified status.

For coherence assessment methodology, apply GN-003 in full. GN-003 covers the three coherence components (Authority Adherence, Control Exercise, Drift Detection), evidence sampling procedures, the 180-day assessment window requirements, and GCI calculation.

The minimum 180-day separation between the GBI assessment date and the GCI assessment date must be enforced. Assessments commenced for organisations that have not been operating for 180 days cannot produce a Compliant or Certified determination regardless of GBI score. Document this constraint in the report.

---

## 7. Report Drafting

The assessment report must satisfy the documentation standard in Section 5 of the Assessor Accreditation Standard. This section provides drafting guidance to assist assessors in meeting that standard. The report template is set out in [Appendix A](#appendix-a--araf-assessment-report-template).

The report audience is institutional: boards, insurers, investors, and regulators. The report must be comprehensible to an informed institutional reader who has not been involved in the assessment. Dimensional scores without reasoning are not adequate. A report that communicates a GBI composite score without explaining how each dimension was scored and why produces a number, not governance infrastructure.

### Required sections

Every ARAF assessment report must include:

**Executive Summary** — the system assessed, the assessment window, the GBI composite score, any triggered multipliers, the certification tier where thresholds are met, and the most significant governance findings.

**Scope and Assessment Window** — the systems within scope, the explicit scope exclusions, the assessment window dates, the methodology version applied, and the assessor identity and accreditation reference.

**Decision Supply Chain Map** — the chain map produced in Section 2, with accountability assignments and contractual relationships at each link.

**Design Adequacy Assessment (GBI)** — for each of the six dimensions: the score, the scoring rationale, the evidence reviewed, the evidence quality tier classifications, and the basis for each classification.

**Multiplier Analysis** — for each of the four multiplier conditions: whether it was triggered, the dimensional scores that informed the assessment, and the compound governance exposure the condition produces where triggered.

**Governance Coherence Assessment (GCI)** — where coherence assessment applies: the three coherence component scores, the dimensional GCI profiles, the combined GCI score, the 180-day window dates, and the evidence sampled.

**Evidence Summary** — the governance evidence reviewed, organised by evidence category (design, deployment, operational, outcome), with evidence gaps identified explicitly.

**Remediation Roadmap** — where governance weaknesses are identified, specific remediation recommendations distinguishing structural risks from operational risks, with implications for remediation timelines and costs. The roadmap must be actionable: it must identify what needs to change, who needs to be accountable for the change, and what the governance outcome of adequate remediation would be.

**Certification Determination** — the certification tier where thresholds are satisfied, or a clear explanation of why certification thresholds were not met and what the distance to the nearest threshold is.

**Assessment Metadata** — report issue date, assessment window dates, assessor identity, accreditation reference, methodology version applied, and applicable validity period. Validity periods are tier-specific: ARAF Assessed findings may be relied upon for up to 60 days from the report issue date; ARAF Compliant certifications are valid for up to 12 months from the report issue date; ARAF Certified certifications are valid for up to 24 months from the report issue date, subject to successful completion of the mandatory 12-month interim surveillance assessment. State the applicable validity period and expiry date explicitly in the report metadata.

### Scope limitation and reliance statement

Every ARAF assessment report must include the following scope limitation and reliance statement. The statement appears verbatim. Do not omit or modify it. Where additional scope limitations apply — for example, where material systems were excluded from scope at the organisation's request, or where evidence limitations constrained the assessment — insert them after the standard statement, not in place of it.

---

**Assessment Basis**

This assessment evaluates the governance architecture of the system identified in this report using the Agentic Risk Architecture Framework (ARAF) methodology, Version 3.0.

The findings are based on evidence collected during the defined assessment window and validated as of the report issue date.

The assessment evaluates governance design adequacy and, where applicable, governance coherence using the dimensional scoring, multiplier analysis, and calculation procedures defined in the ARAF specification and associated methodology guidance.

**Reliance Period**

Absent a reassessment trigger event, the findings in this report may be relied upon for a period of 60 days from the report issue date.

After this period, organisations relying on the assessment should obtain confirmation from the deploying organisation or assessor that no reassessment trigger event has occurred.

**Trigger-Based Reassessment**

Reliance on this assessment is contingent on the system remaining materially consistent with the configuration and governance architecture evaluated during the assessment window.

A reassessment may be required prior to the end of the reliance period if a material change event occurs, including but not limited to:

- substitution or material modification of a foundation model or primary AI provider
- a change in system autonomy that materially alters decision authority
- expansion of system deployment scope into new jurisdictions or operational contexts
- modification of contractual or liability architecture governing the system
- a governance incident demonstrating failure of operational control mechanisms

Where such events occur, the deploying organisation should consider the assessment no longer representative of current governance conditions until reassessment is completed.

**Nature of the Assessment**

An ARAF assessment evaluates the governance architecture supporting autonomous decision infrastructure.

It does not constitute a guarantee of operational outcomes, a certification of technical safety performance, or a representation that governance controls will prevent all adverse events.

The assessment provides a structured governance signal describing the adequacy and operational coherence of governance mechanisms in place at the time of evaluation.

**Certification Determination**

Where the assessment results support an ARAF certification outcome, the applicable certification tier is determined using the thresholds defined in the ARAF Certification Framework.

Certification remains valid subject to the validity conditions and reassessment triggers defined in that framework.

Organisations holding an ARAF certification are expected to maintain internal monitoring processes capable of identifying reassessment trigger events throughout the certification validity period.

---

### Design adequacy versus operational coherence

For Compliant and Certified reports, the design adequacy findings and the operational coherence findings must be separated explicitly. The report structure must make clear which findings arise from the GBI assessment and which arise from the GCI assessment. An institutional reader — particularly an underwriter or regulator — needs to understand whether a governance finding relates to architecture design or operational practice.

---

## 8. Certification Determination and Communication

### Determining the certification tier

Apply the published certification thresholds without modification:

- **ARAF Certified** — GBI ≤ 1.75 AND GCI ≥ 0.85
- **ARAF Compliant** — GBI ≤ 2.50 AND GCI ≥ 0.70
- **ARAF Assessed** — any GBI score; no GCI requirement

Both GBI and GCI thresholds must be satisfied for Compliant and Certified determinations. A GBI score that meets the threshold but a GCI score that does not means the organisation is ARAF Assessed, not Compliant or Certified.

### Communicating a certification outcome

Where thresholds are met, communicate the certification tier clearly in the report executive summary and in any separate certification communication. State the GBI score, the GCI score, the report issue date, the applicable validity period and expiry date, and the reassessment trigger obligations that apply. Validity periods: ARAF Compliant — up to 12 months from report issue date; ARAF Certified — up to 24 months from report issue date, conditional on completion of the 12-month interim surveillance assessment.

### Communicating a non-certification outcome

A non-certification outcome is not a failure. It is a measurement. Communicate it as such.

The report must clearly identify the distance to the nearest certification threshold — the specific dimensional scores or coherence components that are preventing threshold achievement — and the remediation pathway. Where borderline scores are involved, explain the assessment basis for those scores in sufficient detail that the organisation can understand what governance change would produce a different outcome.

The remediation roadmap must distinguish structural risks (governance architecture problems requiring design changes, which take longer and cost more) from operational risks (governance practice problems that can be addressed through process and protocol changes). An organisation that understands this distinction can prioritise remediation effectively.

### Borderline scores and multiplier discretion

Where a multiplier condition is borderline — dimensional scores are close to trigger thresholds — document the assessment basis with particular care. The assessor's reasoning for a marginal trigger or non-trigger determination will be the most scrutinised part of the report if the outcome is disputed.

There is no discretion in applying multipliers. Where the trigger conditions are met, the penalty applies. Where they are not met, it does not. The assessment judgment is in the dimensional scoring that produces the inputs to the trigger conditions, not in the multiplier application itself.

---

## 9. Post-Assessment Obligations

### Reassessment trigger monitoring

Once a certification has been issued, the assessor's obligations do not end. Certified organisations must notify their accredited assessor of triggering events within 60 days of occurrence.

The canonical trigger definitions are set out in the [ARAF Reassessment Trigger Taxonomy (RT-001)](/assessor-guidance/reassessment-trigger-taxonomy/). Triggers fall into four categories:

- **Category A — Autonomy and Operational Scope:** autonomy level change (A1); operational scope expansion (A2)
- **Category B — Supply Chain and Provider:** primary AI provider or model substitution (B1); contract infrastructure change (B2)
- **Category C — Governance Architecture:** AIOC structure or authority change (C1); governance control degradation (C2)
- **Category D — Incidents and Adverse Events:** material governance incident (D1); systematic governance drift (D2)

For each trigger, RT-001 specifies whether the event requires mandatory reassessment or an assessor determination, and how the trigger applies across certification tiers.

When notified of a trigger event, the assessor must document the notification date, assess whether mandatory reassessment is required under RT-001, and communicate the determination to the organisation within 30 days. Where reassessment is not required, document the basis and retain it in the assessment record.

Continued use of certification after a triggering event without completing the required notification and assessor determination process constitutes a certification breach. Document this if it occurs and report it to the Institute for Autonomous Governance in accordance with accreditation obligations.

### Record retention

Maintain assessment records for a minimum of seven years from the assessment date, or for the period required by applicable professional regulations where that period is longer. Records must include the complete evidence file, the assessment report in final form, all versions of the report produced during the assessment, engagement correspondence, and independence documentation.

Records must be available for quality assurance review upon request. Refusal to produce records during quality assurance review is grounds for accreditation suspension.

---

## Relationship to Other Documents

| Document | Relationship |
|---|---|
| Assessor Accreditation Standard | Governs accreditation conditions; GN-001 supplements but does not modify it |
| GN-002: Cross-Border Deployment Assessment | Extends Sections 2, 3, 5, and 7 of this guidance for cross-border deployments |
| GN-003: Governance Coherence Assessment | Extends Section 6 of this guidance for coherence evaluation |
| RT-001: Reassessment Trigger Taxonomy | Canonical trigger definitions referenced in Section 9 |
| Decision Supply Chain | Normative specification for chain mapping in Section 2 |
| Six ARAF Dimensions | Normative specification for dimensional scoring in Section 4 |
| Governance Benchmark Index | Normative specification for GBI calculation in Section 6 |
| Certification Framework | Normative specification for certification tier determination in Section 8 |
| Governance Coherence Addendum | Normative specification for GCI assessment in Section 6 |

---

## See also

- [Assessor Accreditation Standard](/assessor-guidance/assessor-accreditation-standard/)
- [GN-002: Cross-Border Deployment Assessment](/assessor-guidance/gn-002/)
- [GN-003: Governance Coherence Assessment](/assessor-guidance/gn-003/)
- [RT-001: Reassessment Trigger Taxonomy](/assessor-guidance/reassessment-trigger-taxonomy/)
- [Decision Supply Chain](/standard/decision-supply-chain/)
- [Six ARAF Dimensions](/standard/six-dimensions/)
- [Governance Benchmark Index](/certification/governance-benchmark-index/)
- [Certification Framework](/certification/certification-framework/)

---

## Appendix A — ARAF Assessment Report Template

This template structures the assessment report required by Section 7. All sections are mandatory unless otherwise noted. Complete each section in the order presented.

---

### Report Metadata

| Field | Entry |
|---|---|
| Report issue date | |
| Certification issuance date | |
| Assessment window | |
| Systems assessed | |
| Methodology version | |
| Assessor name | |
| Assessor accreditation ID | |
| Certification tier | |
| Certification validity | ARAF Assessed: findings may be relied upon for 60 days from report issue date. ARAF Compliant: valid for up to 12 months from certification issuance date. ARAF Certified: valid for up to 24 months from certification issuance date, subject to 12-month interim surveillance assessment. |
| Certification expiry date | |

---

### 1. Executive Summary

Provide a concise summary covering: system assessed; GBI composite score; GCI score (where applicable); certification tier determination; most significant governance findings; key remediation priorities.

---

### 2. Scope and Assessment Window

| Element | Description |
|---|---|
| Systems in scope | |
| Explicit exclusions | |
| Assessment window dates | |
| Methodology version applied | |
| Assessor independence declaration | |

---

### 3. Decision Supply Chain Map

Insert the completed Decision Supply Chain mapping table from Section 2 of this guidance note. Provide a narrative explanation of accountability assignment and jurisdictional footprint sufficient for an institutional reader to understand who is accountable at each stage of decision formation.

---

### 4. Design Adequacy Assessment (GBI)

#### Dimensional scoring

| Dimension | Score | Evidence Reviewed | Evidence Tier | Scoring Rationale |
|---|---|---|---|---|
| D1 Autonomy Gradient | | | | |
| D2 Data Sensitivity Exposure | | | | |
| D3 Contract Infrastructure | | | | |
| D4 Liability Architecture | | | | |
| D5 Commercial Leverage | | | | |
| D6 Adaptive Stability | | | | |

#### GBI composite score

GBI = unweighted average of D1–D6 + applicable multiplier penalties

---

### 5. Multiplier Analysis

| Multiplier | Trigger Condition | Triggered | Reasoning | Governance Exposure |
|---|---|---|---|---|
| Systemic Escalation | D1 ≥ 4 AND D4 ≥ 4 | | | |
| Infrastructure Collapse | D3 ≥ 4 AND D1 ≥ 3 | | | |
| Leverage Collapse | D5 ≥ 4 AND D4 ≥ 3 | | | |
| Political Cascade | D5 ≥ 4 AND D3 ≥ 3 with single-provider dependency and government-adjacent customer concentration | | | |

Document reasoning for each condition regardless of whether it is triggered.

---

### 6. Governance Coherence Assessment (GCI)

*Required for Compliant and Certified determinations only. Where GBI does not meet the Compliant threshold, note this section as not applicable and state the GBI score.*

| Component | Score | Evidence Sample |
|---|---|---|
| Authority Adherence | | |
| Control Exercise | | |
| Drift Detection | | |

**Combined GCI score:**

**180-day window:** Assessment window start / Assessment window end

---

### 7. Evidence Summary

| Category | Evidence Items Reviewed | Gaps Identified |
|---|---|---|
| Design | | |
| Deployment | | |
| Operational | | |
| Outcome | | |

Evidence gaps must be recorded explicitly. Where a gap results in a Tier 4 classification for a material control, identify the control and the governance implication.

---

### 8. Remediation Roadmap

| Finding | Risk Type | Recommended Action | Responsible Party | Estimated Timeline |
|---|---|---|---|---|
| | Structural | | | |
| | Operational | | | |

Structural risks require governance architecture changes. Operational risks can be addressed through process and protocol changes. Distinguish these explicitly.

---

### 9. Certification Determination

| Tier | Requirement | Result |
|---|---|---|
| ARAF Certified | GBI ≤ 1.75 AND GCI ≥ 0.85 | |
| ARAF Compliant | GBI ≤ 2.50 AND GCI ≥ 0.70 | |
| ARAF Assessed | Any GBI | |

Where thresholds are not met, state the distance to the nearest threshold and the specific dimensional scores or coherence components preventing threshold achievement.

---

### 10. Scope Limitation and Reliance Statement

Insert the following verbatim. Do not modify. Where additional scope limitations apply, insert them after the standard statement.

---

**Assessment Basis**

This assessment evaluates the governance architecture of the system identified in this report using the Agentic Risk Architecture Framework (ARAF) methodology, Version 3.0.

The findings are based on evidence collected during the defined assessment window and validated as of the report issue date.

The assessment evaluates governance design adequacy and, where applicable, governance coherence using the dimensional scoring, multiplier analysis, and calculation procedures defined in the ARAF specification and associated methodology guidance.

**Reliance Period**

Absent a reassessment trigger event, the findings in this report may be relied upon for a period of 60 days from the report issue date.

After this period, organisations relying on the assessment should obtain confirmation from the deploying organisation or assessor that no reassessment trigger event has occurred.

**Trigger-Based Reassessment**

Reliance on this assessment is contingent on the system remaining materially consistent with the configuration and governance architecture evaluated during the assessment window.

A reassessment may be required prior to the end of the reliance period if a material change event occurs, including but not limited to:

- substitution or material modification of a foundation model or primary AI provider
- a change in system autonomy that materially alters decision authority
- expansion of system deployment scope into new jurisdictions or operational contexts
- modification of contractual or liability architecture governing the system
- a governance incident demonstrating failure of operational control mechanisms

Where such events occur, the deploying organisation should consider the assessment no longer representative of current governance conditions until reassessment is completed.

**Nature of the Assessment**

An ARAF assessment evaluates the governance architecture supporting autonomous decision infrastructure.

It does not constitute a guarantee of operational outcomes, a certification of technical safety performance, or a representation that governance controls will prevent all adverse events.

The assessment provides a structured governance signal describing the adequacy and operational coherence of governance mechanisms in place at the time of evaluation.

**Certification Determination**

Where the assessment results support an ARAF certification outcome, the applicable certification tier is determined using the thresholds defined in the ARAF Certification Framework.

Certification remains valid subject to the validity conditions and reassessment triggers defined in that framework.

Organisations holding an ARAF certification are expected to maintain internal monitoring processes capable of identifying reassessment trigger events throughout the certification validity period.

---

### 11. Assessment Metadata

| Field | Entry |
|---|---|
| Report issue date | |
| Certification issuance date | |
| Assessment window | |
| Certification tier | |
| Certification validity | ARAF Assessed: findings may be relied upon for 60 days from report issue date. ARAF Compliant: valid for up to 12 months from certification issuance date. ARAF Certified: valid for up to 24 months from certification issuance date, subject to 12-month interim surveillance assessment. |
| Certification expiry date | |
| Reassessment triggers | See RT-001 Reassessment Trigger Taxonomy |
| Assessor signature | |

---

*Martin, Carly. Agentic Risk Architecture Framework (ARAF), Assessor Guidance Note GN-001: Conducting an ARAF Governance Assessment, Version 3.0. Institute for Autonomous Governance Pty Ltd, 2026.*

---

*© 2026 Institute for Autonomous Governance Pty Ltd*