export default function DecisionSupplyChain() {
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
        h1 { font-size: 42px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 8px; }
        .version-tag { font-family: 'DM Mono', monospace; font-size: 11px; color: #888; letter-spacing: 0.1em; margin-bottom: 40px; }
        .lead { font-size: 19px; line-height: 1.7; color: #2A2A2A; margin-bottom: 56px; border-left: 3px solid #1A1A1A; padding-left: 24px; font-style: italic; }
        h2 { font-size: 26px; font-weight: 700; margin-top: 64px; margin-bottom: 20px; letter-spacing: -0.01em; }
        h3 { font-size: 17px; font-weight: 700; margin-top: 40px; margin-bottom: 12px; font-family: 'DM Mono', monospace; letter-spacing: 0.04em; text-transform: uppercase; color: #333; }
        p { font-size: 16px; line-height: 1.8; margin-bottom: 20px; color: #2A2A2A; }
        .stage-block { background: white; border: 1px solid #E5E0D8; border-left: 4px solid #1A1A1A; padding: 28px 32px; margin-bottom: 16px; }
        .stage-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: #888; margin-bottom: 8px; }
        .stage-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; }
        .stage-body { font-size: 15px; line-height: 1.75; color: #333; margin-bottom: 12px; }
        .stage-map { font-family: 'DM Mono', monospace; font-size: 12px; color: #666; background: #F5F3EF; padding: 8px 12px; display: inline-block; }
        .mapping-table { width: 100%; border-collapse: collapse; margin-top: 32px; font-size: 14px; }
        .mapping-table th { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; text-align: left; padding: 10px 16px; background: #1A1A1A; color: #F9F8F5; }
        .mapping-table td { padding: 12px 16px; border-bottom: 1px solid #E5E0D8; vertical-align: top; line-height: 1.6; }
        .mapping-table tr:last-child td { border-bottom: none; }
        .mapping-table tr:nth-child(even) td { background: white; }
        .dim-tag { font-family: 'DM Mono', monospace; font-size: 11px; color: #1A1A1A; background: #E8E4DC; padding: 2px 8px; white-space: nowrap; }
        .principle-box { background: #1A1A1A; color: #F9F8F5; padding: 32px 36px; margin-top: 56px; margin-bottom: 40px; }
        .principle-box p { color: #E8E4DC; font-size: 17px; line-height: 1.75; margin-bottom: 0; }
        .principle-box strong { color: white; }
        .accountability-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
        .accountability-item { background: white; border: 1px solid #E5E0D8; padding: 20px 24px; font-size: 14px; line-height: 1.6; }
        .accountability-item strong { display: block; font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; color: #555; }
        .divider { border: none; border-top: 1px solid #E5E0D8; margin: 48px 0; }
        .footnote { font-family: 'DM Mono', monospace; font-size: 12px; color: #888; margin-top: 64px; padding-top: 24px; border-top: 1px solid #E5E0D8; line-height: 1.7; }
        @media (max-width: 640px) {
          .page-wrapper { padding: 40px 20px; }
          h1 { font-size: 30px; }
          .accountability-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-wrapper">
        <div className="breadcrumb">The Standard / <span>Decision Supply Chain</span></div>

        <h1>Decision Supply Chain</h1>
        <div className="version-tag">ARAF v3.0 · Institute for Autonomous Governance Pty Ltd</div>

        <p className="lead">
          Governance of autonomous systems is governance of the full decision path.
        </p>

        <p>
          The Decision Supply Chain describes how a decision moves through a governed autonomous system and where accountability, control, and evidence attach across that path.
        </p>
        <p>
          ARAF uses the Decision Supply Chain to make institutional governance legible. Its purpose is not to prescribe a runtime architecture or enforcement method. Its purpose is to determine whether the organisation can show, with sufficient evidence, that the decision path is governed in a way that is intelligible, accountable, and defensible.
        </p>
        <p>
          For ARAF purposes, governance applies across the full decision path — from the point a request, state, or instruction enters the governed system through decision formation, action, traceability, and post-deployment monitoring. Each stage introduces distinct control objectives and evidence requirements.
        </p>

        <hr className="divider" />

        <h2>Governance Across the Decision Path</h2>

        <p>
          ARAF assesses governance across the full decision path rather than at a single control point. A governance architecture that addresses only one stage does not govern the decision path.
        </p>
        <p>
          For interpretive purposes, the decision path comprises five governance layers:
        </p>

        <div className="stage-block">
          <div className="stage-label">Stage 01</div>
          <div className="stage-title">Admissibility</div>
          <p className="stage-body">
            Whether the request, state, provenance, authority, and context are eligible to enter the governed system. Admissibility is assessed before model invocation or equivalent decision initiation. Its absence is a governance failure at the earliest stage of the path.
          </p>
          <div className="stage-map">Maps to: Data boundary · Assessed under D2</div>
        </div>

        <div className="stage-block">
          <div className="stage-label">Stage 02</div>
          <div className="stage-title">Decision Formation</div>
          <p className="stage-body">
            Whether the system's emerging decision is being formed within defined governance conditions, escalation thresholds, and intervention rules. The question is not only whether the system has authority to act, but whether the decision being formed is appropriate for the specific task and circumstances at that moment.
          </p>
          <p className="stage-body">
            A system that can detect uncertainty or misalignment and still proceed has monitoring without governance.
          </p>
          <div className="stage-map">Maps to: Inference boundary · Assessed under D1</div>
        </div>

        <div className="stage-block">
          <div className="stage-label">Stage 03</div>
          <div className="stage-title">Action Boundary</div>
          <p className="stage-body">
            Whether the proposed output is permitted to cross into operational consequence. Authorisation to act is not the same as admissibility to commit. A correctly formed decision may still require a distinct commitment gate before it becomes binding.
          </p>
          <div className="stage-map">Maps to: Action boundary · Assessed under D1, D3</div>
        </div>

        <div className="stage-block">
          <div className="stage-label">Stage 04</div>
          <div className="stage-title">Traceability</div>
          <p className="stage-body">
            Whether the path from input to consequence is reconstructable through reliable, contemporaneous evidence. Governance that only evaluates after the decision has propagated is not governance. It is documentation of what already happened.
          </p>
          <div className="stage-map">Maps to: Evidence architecture · Assessed across all dimensions</div>
        </div>

        <div className="stage-block">
          <div className="stage-label">Stage 05</div>
          <div className="stage-title">Post-Deployment Monitoring</div>
          <p className="stage-body">
            Whether the organisation monitors behavioural drift, recurring failure patterns, governance degradation, and cross-system signals over time. Where multiple governed systems operate in parallel, monitoring must extend beyond single-system review to include portfolio-level signals.
          </p>
          <div className="stage-map">Maps to: Lifecycle layer · Assessed under D6</div>
        </div>

        <div className="principle-box">
          <p>
            ARAF does not prescribe how decisions are shaped in-flight. It defines the <strong>governance and evidentiary conditions</strong> under which those decisions are institutionally defensible.
          </p>
        </div>

        <h2>Mapping: Boundaries and Stages</h2>
        <p>The three ARAF governance boundaries operationalise three of the five stages. Evidence and monitoring apply across the full chain.</p>

        <table className="mapping-table">
          <thead>
            <tr>
              <th>Decision Path Stage</th>
              <th>ARAF Boundary</th>
              <th>Primary Dimension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Input admissibility</td>
              <td>Data boundary</td>
              <td><span className="dim-tag">D2</span></td>
            </tr>
            <tr>
              <td>Decision formation</td>
              <td>Inference boundary</td>
              <td><span className="dim-tag">D1</span></td>
            </tr>
            <tr>
              <td>Commit and execution</td>
              <td>Action boundary</td>
              <td><span className="dim-tag">D1</span> <span className="dim-tag">D3</span></td>
            </tr>
            <tr>
              <td>Trace and chain integrity</td>
              <td>All boundaries</td>
              <td><span className="dim-tag">All dimensions</span></td>
            </tr>
            <tr>
              <td>Post-deployment monitoring</td>
              <td>Lifecycle layer</td>
              <td><span className="dim-tag">D6</span></td>
            </tr>
          </tbody>
        </table>

        <hr className="divider" />

        <h2>Accountability Across the Chain</h2>
        <p>
          The Decision Supply Chain is an accountability structure as well as a control structure. The organisation should be able to identify, for each material stage in the decision path, the responsible operational function, the responsible governance or approval function, and the responsible assurance or review function.
        </p>
        <p>
          Where governance, execution, and evaluation are materially collapsed into the same function, that overlap must be disclosed and justified.
        </p>

        <div className="accountability-grid">
          <div className="accountability-item">
            <strong>Operational function</strong>
            The function that executes decisions or processes inputs at each stage.
          </div>
          <div className="accountability-item">
            <strong>Governance function</strong>
            The function that approves, reviews, or authorises decisions at each stage.
          </div>
          <div className="accountability-item">
            <strong>Assurance function</strong>
            The function that independently evaluates whether governance is operating as intended.
          </div>
          <div className="accountability-item">
            <strong>Evidence record</strong>
            The retained documentation enabling reconstruction of accountability at each stage.
          </div>
        </div>

        <hr className="divider" />

        <h2>What ARAF Governs</h2>
        <p>
          ARAF governs the institutional conditions under which a decision path may be regarded as governable, evidenced, and accountable. It does not prescribe a specific model architecture, runtime enforcement method, inference supervision technique, vendor-specific control stack, or universal partitioning of pre-inference, in-flight, and post-inference operations.
        </p>
        <p>
          Its role is to define what must be governed and what must be evidenced, regardless of how the organisation implements those controls.
        </p>

        <div className="footnote">
          <p>ARAF Standard v3.0 · Decision Supply Chain · Institute for Autonomous Governance Pty Ltd · CC BY 4.0</p>
          <p style={{marginTop: "8px"}}>Related: <a href="/standard/decision-integrity/" style={{color: "#1A1A1A"}}>Decision Integrity</a> · <a href="/standard/six-dimensions/" style={{color: "#1A1A1A"}}>Six Dimensions</a> · <a href="/assessor-guidance/assessor-guidance-note/" style={{color: "#1A1A1A"}}>GN-001 Assessor Guidance</a></p>
        </div>
      </div>
    </div>
  );
}
