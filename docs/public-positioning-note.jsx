export default function PositioningNote() {
  return (
    <div style={{
      fontFamily: "'Libre Baskerville', Georgia, serif",
      background: "#1A1A1A",
      minHeight: "100vh",
      color: "#F9F8F5"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .page-wrapper { max-width: 760px; margin: 0 auto; padding: 80px 40px; }
        .tag { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #666; margin-bottom: 20px; }
        h1 { font-size: 46px; font-weight: 700; line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 32px; color: white; }
        h1 em { font-style: italic; color: #C8C0B0; }
        .date { font-family: 'DM Mono', monospace; font-size: 11px; color: #555; margin-bottom: 56px; }
        .lede { font-size: 20px; line-height: 1.65; color: #C8C0B0; margin-bottom: 48px; padding-bottom: 48px; border-bottom: 1px solid #2A2A2A; }
        h2 { font-size: 13px; font-family: 'DM Mono', monospace; letter-spacing: 0.12em; text-transform: uppercase; color: #666; margin-top: 40px; margin-bottom: 16px; }
        p { font-size: 16px; line-height: 1.8; color: #A8A098; margin-bottom: 20px; }
        p strong { color: #E8E0D0; }
        .list-item { display: flex; gap: 16px; margin-bottom: 12px; align-items: flex-start; }
        .list-arrow { font-family: 'DM Mono', monospace; color: #555; font-size: 13px; padding-top: 3px; flex-shrink: 0; }
        .list-text { font-size: 15px; line-height: 1.7; color: #A8A098; }
        .list-text strong { color: #E8E0D0; }
        .thesis-block { border: 1px solid #2E2E2E; padding: 36px 40px; margin: 48px 0; }
        .thesis-block p { color: #C8C0B0; font-size: 17px; line-height: 1.75; margin-bottom: 0; }
        .thesis-block strong { color: white; }
        .clarifies-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-top: 16px; }
        .clarifies-item { background: #222; padding: 20px 22px; }
        .clarifies-item .item-label { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #555; margin-bottom: 8px; }
        .clarifies-item .item-text { font-size: 14px; line-height: 1.6; color: #A8A098; }
        .doesnt-list { display: grid; gap: 2px; margin-top: 16px; }
        .doesnt-item { background: #1E1E1E; padding: 14px 20px; font-size: 14px; color: #666; font-family: 'DM Mono', monospace; }
        .doesnt-item::before { content: "✗  "; color: #444; }
        .bottom-rule { border: none; border-top: 1px solid #2A2A2A; margin: 56px 0 32px; }
        .foot { font-family: 'DM Mono', monospace; font-size: 11px; color: #444; line-height: 1.8; }
        @media (max-width: 640px) {
          .page-wrapper { padding: 40px 20px; }
          h1 { font-size: 32px; }
          .clarifies-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-wrapper">
        <div className="tag">Public Statement · Decision-Path Clarification</div>
        <h1>ARAF is clarifying,<br/><em>not expanding.</em></h1>
        <div className="date">ARAF Standard v3.0 · Institute for Autonomous Governance Pty Ltd</div>

        <p className="lede">
          The market conversation around autonomous systems has moved closer to the problem ARAF was built to address. Governance must be legible across the full path by which a request becomes a consequential decision.
        </p>

        <h2>What the market now needs</h2>
        <p>
          Institutions increasingly need to understand not only whether a system is authorised to operate, but whether governance is present at the points that matter most:
        </p>

        {[
          ["Admissibility", "when inputs enter the system"],
          ["Decision formation", "while decisions are being formed"],
          ["Action boundary", "when outputs cross into operational consequence"],
          ["Traceability", "when evidence must support reconstructability"],
          ["Post-deployment monitoring", "when deployed systems must be governed over time"],
        ].map(([label, desc]) => (
          <div className="list-item" key={label}>
            <span className="list-arrow">→</span>
            <span className="list-text"><strong>{label}:</strong> {desc}</span>
          </div>
        ))}

        <div className="thesis-block">
          <p>
            ARAF's current update makes that logic explicit. These changes do not turn ARAF into a runtime control product. They clarify <strong>what must be governed and evidenced</strong> if an autonomous system is to be institutionally defensible.
          </p>
        </div>

        <h2>What has been clarified</h2>

        <div className="clarifies-grid">
          {[
            ["D2 — Admissibility", "Admissibility is now an explicit control objective at the data boundary. Governance must address whether requests, states, provenance, and authority are eligible to enter the decision path."],
            ["D1 — Decision Integrity", "Decision integrity is now named and defined. The governance question is not only whether the system was permitted to act, but whether the decision being formed is fit for context."],
            ["D6 — Portfolio Monitoring", "Post-deployment monitoring now extends beyond single-system review to include correlated drift and portfolio-level governance signals where the deployment footprint requires it."],
            ["Independence", "The requirement that governance, execution, and evaluation not collapse into the same function is now explicit and scorable."],
          ].map(([label, text]) => (
            <div className="clarifies-item" key={label}>
              <div className="item-label">{label}</div>
              <div className="item-text">{text}</div>
            </div>
          ))}
        </div>

        <h2 style={{marginTop: "48px"}}>What ARAF does not do</h2>

        <div className="doesnt-list">
          {[
            "Prescribe a specific runtime architecture or control stack",
            "Require a specific inference-time supervision mechanism",
            "Adopt vendor-specific language or control topology",
            "Create a new scoring domain or change GBI structure",
            "Add a new ARAF dimension",
            "Take sides in the debate between runtime governance vendors",
          ].map((item) => (
            <div className="doesnt-item" key={item}>{item}</div>
          ))}
        </div>

        <h2 style={{marginTop: "48px"}}>The governing sentence</h2>
        <p style={{color: "#C8C0B0", fontSize: "17px", lineHeight: "1.75"}}>
          <strong style={{color: "white"}}>ARAF does not prescribe the runtime mechanism by which any organisation implements those controls.</strong> It defines the governance and evidentiary conditions under which those controls may be regarded as institutionally defensible.
        </p>

        <h2>The result</h2>
        <p>
          A clearer standard. A more legible benchmark. A stronger basis for institutional trust.
        </p>
        <p>
          ARAF remains what it has always been: a governance classification and institutional comparability layer. Its role is to define what must be governed, evidenced, and independently reviewable — regardless of how any organisation technically implements those controls.
        </p>

        <hr className="bottom-rule" />
        <div className="foot">
          <p>ARAF Standard v3.0 · Institute for Autonomous Governance Pty Ltd · CC BY 4.0</p>
          <p style={{marginTop: "8px"}}>
            Full clarification package: Decision Supply Chain · Decision Integrity · GN-001 Decision Path Coverage Test · GBI Impact Note · Assessor Transition Memo
          </p>
        </div>
      </div>
    </div>
  );
}
