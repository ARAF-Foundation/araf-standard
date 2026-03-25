export default function GN001DecisionPathTest() {
  const [openSection, setOpenSection] = React.useState(null);

  const sections = [
    {
      id: "admissibility",
      number: "01",
      title: "Admissibility Controls Exist",
      concern: "Materially non-admissible requests or states enter the decision path without a defined governance check or without retained evidence.",
      examine: [
        "Policy or rules describing admissibility conditions",
        "Operating procedures for admissibility failures",
        "Evidence that admissibility checks occur in practice",
        "Retained records showing the outcome of those checks",
      ],
    },
    {
      id: "decision-integrity",
      number: "02",
      title: "Decision Integrity Is Governed",
      concern: "Autonomous outputs can proceed to operational significance without defined context-fitness criteria, escalation rules, or intervention conditions.",
      examine: [
        "Context-fitness criteria — documented criteria or review standard",
        "Escalation thresholds — conditions triggering pause, review, or halt",
        "Confidence or uncertainty thresholds, if used",
        "Pause, override, or human review rules",
        "Accountable ownership of those controls",
      ],
    },
    {
      id: "action-boundary",
      number: "03",
      title: "Action Boundary Is Defined",
      concern: "The organisation cannot identify when a decision becomes consequential, binding, or operationally effective.",
      examine: [
        "The organisation's definition of the action boundary for the system",
        "Approval or commit authority rules",
        "Halt, override, or escalation mechanisms at the boundary",
        "Evidence that consequential transitions are recorded",
      ],
    },
    {
      id: "traceability",
      number: "04",
      title: "Trace Is Reconstructable",
      concern: "The organisation cannot materially reconstruct what happened, what controls applied, or who was accountable at relevant stages.",
      examine: [
        "Event logs covering material stages of the decision path",
        "Approval and escalation records",
        "Override and rejection records",
        "Audit artifacts and evidence retention practices",
      ],
    },
    {
      id: "monitoring",
      number: "05",
      title: "Monitoring Extends Beyond Single System",
      concern: "The deployment footprint reasonably requires cross-system visibility, but monitoring remains confined to isolated system checks.",
      examine: [
        "Monitoring and review procedures — scope and cadence",
        "Cross-system alerting or aggregation mechanisms",
        "Periodic governance review materials",
        "Evidence of correlated drift or repeated pattern analysis",
        "Remediation records arising from portfolio-level signals",
      ],
      note: "This check applies where the organisation deploys multiple governed systems. Where a single system is deployed in isolation, note this and proceed.",
    },
    {
      id: "accountability",
      number: "06",
      title: "Accountability Assigned Across Chain",
      concern: "Materially consequential decisions are generated, approved, and evaluated within overlapping functions without disclosure, justification, or compensating controls.",
      examine: [
        "Governance charters and role descriptions",
        "Committee mandates and terms of reference",
        "Separation-of-duty controls",
        "Conflict or independence disclosures",
        "Evidence that overlaps are visible, justified, and proportionate",
      ],
    },
  ];

  return (
    <div style={{
      fontFamily: "'Libre Baskerville', Georgia, serif",
      background: "#F9F8F5",
      minHeight: "100vh",
      color: "#1A1A1A"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .page-wrapper { max-width: 820px; margin: 0 auto; padding: 80px 40px; }
        .breadcrumb { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #888; margin-bottom: 48px; }
        .breadcrumb span { color: #1A1A1A; }
        h1 { font-size: 38px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 8px; }
        .version-tag { font-family: 'DM Mono', monospace; font-size: 11px; color: #888; letter-spacing: 0.1em; margin-bottom: 40px; }
        .lead { font-size: 17px; line-height: 1.75; color: #2A2A2A; margin-bottom: 40px; border-left: 3px solid #1A1A1A; padding-left: 24px; }
        h2 { font-size: 22px; font-weight: 700; margin-top: 56px; margin-bottom: 16px; }
        p { font-size: 15px; line-height: 1.8; margin-bottom: 16px; color: #2A2A2A; }
        .check-item { border: 1px solid #E5E0D8; margin-bottom: 8px; background: white; }
        .check-header { display: flex; align-items: flex-start; gap: 20px; padding: 20px 24px; cursor: pointer; user-select: none; }
        .check-header:hover { background: #F5F3EF; }
        .check-num { font-family: 'DM Mono', monospace; font-size: 13px; color: #888; min-width: 28px; padding-top: 2px; }
        .check-title { font-size: 16px; font-weight: 700; flex: 1; }
        .check-arrow { font-family: 'DM Mono', monospace; font-size: 14px; color: #888; transition: transform 0.2s; }
        .check-arrow.open { transform: rotate(90deg); }
        .check-body { padding: 0 24px 20px 72px; }
        .concern-label { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #C0392B; margin-bottom: 6px; margin-top: 4px; }
        .concern-text { font-size: 14px; color: #C0392B; line-height: 1.6; margin-bottom: 16px; font-style: italic; }
        .examine-label { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #555; margin-bottom: 8px; }
        .examine-list { list-style: none; }
        .examine-list li { font-size: 14px; line-height: 1.6; padding: 5px 0; color: #333; border-bottom: 1px solid #F0EDE6; }
        .examine-list li::before { content: "→ "; font-family: 'DM Mono', monospace; color: #888; }
        .note-text { font-size: 13px; color: #666; font-style: italic; margin-top: 12px; padding: 10px 14px; background: #F5F3EF; border-left: 2px solid #888; }
        .principle-box { background: #1A1A1A; color: #F9F8F5; padding: 28px 32px; margin: 40px 0; }
        .principle-box p { color: #E8E4DC; font-size: 15px; line-height: 1.75; margin-bottom: 0; }
        .synthesis-block { background: white; border: 1px solid #E5E0D8; padding: 28px 32px; margin-top: 40px; }
        .gap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px; }
        .gap-item { padding: 10px 16px; background: #F9F8F5; border: 1px solid #E5E0D8; font-size: 14px; font-family: 'DM Mono', monospace; color: #333; }
        .divider { border: none; border-top: 1px solid #E5E0D8; margin: 40px 0; }
        .footnote { font-family: 'DM Mono', monospace; font-size: 12px; color: #888; margin-top: 56px; padding-top: 20px; border-top: 1px solid #E5E0D8; line-height: 1.7; }
        @media (max-width: 640px) {
          .page-wrapper { padding: 40px 20px; }
          h1 { font-size: 28px; }
          .check-body { padding-left: 24px; }
          .gap-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-wrapper">
        <div className="breadcrumb">Assessor Guidance / GN-001 / <span>Decision Path Coverage Test</span></div>

        <h1>Decision Path Coverage Test</h1>
        <div className="version-tag">GN-001 Supplement · ARAF v3.0 · Institute for Autonomous Governance Pty Ltd</div>

        <p className="lead">
          An assessor must verify that governance is evidenced across the full decision path, not only at a single control boundary. The assessor evaluates governance coverage and evidentiary sufficiency — not the adoption of any specific runtime architecture, model topology, or vendor implementation.
        </p>

        <p style={{marginBottom: "8px"}}>
          One instruction applies at the outset of every assessment:
        </p>

        <div className="principle-box">
          <p>Assessment must cover the full decision path, not isolated system components.</p>
        </div>

        <h2>Required Checks</h2>
        <p>
          The assessor must determine whether the organisation has defined and evidenced governance across each of the following stages. Select each check to see what to examine and the assessment concern.
        </p>

        {sections.map((section) => (
          <div className="check-item" key={section.id}>
            <div
              className="check-header"
              onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
            >
              <span className="check-num">{section.number}</span>
              <span className="check-title">{section.title}</span>
              <span className={`check-arrow ${openSection === section.id ? "open" : ""}`}>›</span>
            </div>
            {openSection === section.id && (
              <div className="check-body">
                <div className="concern-label">Assessment concern</div>
                <div className="concern-text">{section.concern}</div>
                <div className="examine-label">The assessor should examine</div>
                <ul className="examine-list">
                  {section.examine.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {section.note && (
                  <div className="note-text">{section.note}</div>
                )}
              </div>
            )}
          </div>
        ))}

        <hr className="divider" />

        <h2>Independence Note</h2>
        <p>
          Where institutional reliance, certification, or external assurance is claimed, the assessor should pay close attention to whether execution, governance, and evaluation functions are meaningfully distinguishable. ARAF does not require strict structural separation in every case. It does require that overlaps are visible, justified, and governed in proportion to risk.
        </p>

        <h2>Reporting Note</h2>
        <p>
          Where the assessor finds partial coverage, the assessor should report which stage of the decision path lacks coverage, what evidence is missing or insufficient, and whether the gap is a design gap, an evidence gap, or an accountability gap.
        </p>

        <div className="synthesis-block">
          <div style={{fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", marginBottom: "16px"}}>
            Assessor gap classification
          </div>
          <p style={{marginBottom: "12px", fontSize: "14px"}}>After completing all checks, identify the principal gap type:</p>
          <div className="gap-grid">
            <div className="gap-item">Design gap</div>
            <div className="gap-item">Evidence gap</div>
            <div className="gap-item">Accountability gap</div>
            <div className="gap-item">Monitoring gap</div>
            <div className="gap-item">Independence gap</div>
          </div>
        </div>

        <div className="footnote">
          <p>GN-001 Supplement · Decision Path Coverage Test · ARAF Standard v3.0 · Institute for Autonomous Governance Pty Ltd · CC BY 4.0</p>
          <p style={{marginTop: "8px"}}>
            Related: <a href="/standard/decision-supply-chain/" style={{color: "#1A1A1A"}}>Decision Supply Chain</a> · <a href="/standard/decision-integrity/" style={{color: "#1A1A1A"}}>Decision Integrity</a> · <a href="/assessor-guidance/assessor-accreditation-standard/" style={{color: "#1A1A1A"}}>Assessor Accreditation Standard</a>
          </p>
        </div>
      </div>
    </div>
  );
}
