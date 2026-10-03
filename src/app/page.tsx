import { DemoTerminal } from "@/components/demo-terminal";
import { contractYaml } from "@/content/demo";

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/lucabecci/drifti";
const getStartedUrl = process.env.NEXT_PUBLIC_GET_STARTED_URL || `${githubUrl}#readme`;

const steps = [
  { number: "01", title: "Observe", body: "See the files, processes and endpoints an agent actually uses during an execution.", command: "drifti observe" },
  { number: "02", title: "Learn", body: "Turn representative executions into a focused Capability Profile.", command: "drifti learn" },
  { number: "03", title: "Contract", body: "Generate a proposed drifti.yaml, then review its authority before accepting it.", command: "drifti generate" },
  { number: "04", title: "Verify", body: "Compare later executions with the reviewed contract and inspect new authority.", command: "drifti verify" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Brand() {
  return <a className="brand" href="#top" aria-label="Drifti, back to top"><span className="brand-mark" aria-hidden="true">◈</span><span>drifti<span className="brand-dot">.</span></span></a>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="top" />
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#product">Product</a>
            <a href="#how-it-works">How it works</a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
          </nav>
          <a className="header-cta" href={getStartedUrl} target="_blank" rel="noopener noreferrer">Get started <Arrow /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> CAPABILITY CONTRACTS FOR AI AGENTS</div>
              <h1 id="hero-title">Know what your agents can do.<br /><span>Catch when they do more.</span></h1>
              <p className="hero-description">Drifti learns what your AI agents need, turns it into a capability contract, and detects when their behavior drifts outside that contract.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={getStartedUrl} target="_blank" rel="noopener noreferrer">Get started <Arrow /></a>
                <a className="button button-secondary" href={githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub <Arrow diagonal /></a>
              </div>
              <div className="hero-facts"><span>Open source</span><i /><span>Local first</span><i /><span>Built for CI</span></div>
            </div>
            <div className="hero-demo"><div className="demo-caption"><span>THE PRODUCT LOOP</span><span>01 — 05</span></div><DemoTerminal /></div>
          </div>
          <div className="hero-edge" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
        </section>

        <section className="problem-section section" id="product" aria-labelledby="problem-title">
          <div className="container">
            <div className="section-heading split-heading">
              <span className="section-index">01 / THE PROBLEM</span>
              <div><h2 id="problem-title">Your agents are gaining capabilities faster than you can track them.</h2><p>Coding agents read files, write code, run processes and connect to services. The authority you expect them to use usually stays implicit.</p></div>
            </div>
            <div className="authority-visual">
              <div className="authority-label"><span>AGENT EXECUTION</span><strong>codex exec</strong><small>ambient authority</small></div>
              <div className="authority-rails" aria-label="Capability categories an agent can exercise">
                <div><span className="rail-icon">↳</span><span>filesystem.read</span><span className="rail-end">FILES</span></div>
                <div><span className="rail-icon">↳</span><span>filesystem.write</span><span className="rail-end">CODE</span></div>
                <div><span className="rail-icon">↳</span><span>process.execute</span><span className="rail-end">SHELL</span></div>
                <div><span className="rail-icon">↳</span><span>network.connect</span><span className="rail-end">SERVICES</span></div>
              </div>
              <div className="authority-question"><span>THE MISSING PIECE</span><strong>What authority did it actually need?</strong><span className="question-mark" aria-hidden="true">?</span></div>
            </div>
          </div>
        </section>

        <section className="loop-section section" id="how-it-works" aria-labelledby="loop-title">
          <div className="container">
            <div className="section-heading loop-heading"><span className="section-index">02 / THE LOOP</span><div><h2 id="loop-title">From execution to explicit authority.</h2><p>A simple developer workflow for capabilities that can be reviewed and checked again.</p></div></div>
            <div className="steps-grid">{steps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number} <span aria-hidden="true">↗</span></span><div><h3>{step.title}</h3><p>{step.body}</p></div><code>$ {step.command}</code></article>)}</div>
          </div>
        </section>

        <section className="contract-section section" aria-labelledby="contract-title">
          <div className="container contract-grid">
            <div className="contract-copy"><span className="section-index">03 / THE CONTRACT</span><h2 id="contract-title">Authority you can read.<br /><span>And review.</span></h2><p>Observed behavior becomes a proposed Capability Contract. Review it like code, keep it in Git, and make changes explicit.</p><div className="contract-path" aria-label="Agent behavior to contract to Git review"><span>agent behavior</span><b>↓</b><span>drifti.yaml</span><b>↓</b><span>Git review</span></div><p className="contract-note">Observation is evidence. Human review decides what belongs in the trusted contract.</p></div>
            <div className="code-panel contract-panel"><div className="panel-header"><span><span className="file-icon">▤</span> drifti.yaml</span><span>CAPABILITY CONTRACT</span></div><pre><code>{contractYaml}</code></pre><div className="panel-footer"><span className="green-square" /> REVIEWABLE · VERSIONABLE · EXPLICIT</div></div>
          </div>
        </section>

        <section className="drift-section section" aria-labelledby="drift-title">
          <div className="container drift-grid">
            <div className="drift-copy"><span className="section-index">04 / CAPABILITY DRIFT</span><h2 id="drift-title">When behavior changes,<br /><span>see what changed.</span></h2><p>A later execution crosses the contract boundary. Drifti reports the new capability and the Evidence behind it, so a developer can decide what to do next.</p><div className="drift-status"><span className="status-symbol">!</span><div><strong>Capability Drift detected</strong><span>New authority outside the reviewed contract</span></div></div></div>
            <div className="diff-panel"><div className="panel-header"><span>↗ &nbsp; execution diff</span><span>VERIFY / 002</span></div><div className="diff-body"><div className="diff-context">network:<br />&nbsp; connect:</div><div className="diff-line">&nbsp;&nbsp;&nbsp; - api.openai.com</div><div className="diff-line added">+ &nbsp; - production-db.internal</div></div><div className="diff-footer"><span className="diff-alert">● DRIFT DETECTED</span><span>Inspect Evidence →</span></div></div>
          </div>
        </section>

        <section className="workflow-section section" aria-labelledby="workflow-title"><div className="container"><div className="section-heading split-heading"><span className="section-index">05 / DEVELOPER WORKFLOW</span><div><h2 id="workflow-title">Fits where you already build.</h2><p>Start locally, review a proposed contract in Git, then use verification in your development and CI workflow.</p></div></div><div className="workflow-track" aria-label="Local development, contract, Git, CI and verification"><div><span>01</span><strong>Local development</strong><small>observe & learn</small></div><b>→</b><div><span>02</span><strong>drifti.yaml</strong><small>reviewed contract</small></div><b>→</b><div><span>03</span><strong>Git</strong><small>visible changes</small></div><b>→</b><div><span>04</span><strong>CI</strong><small>verify executions</small></div></div></div></section>

        <section className="trust-section section" aria-labelledby="trust-title"><div className="container trust-grid"><div><span className="section-index">06 / TRUST THE BOUNDARY</span><h2 id="trust-title">Know the scope.<br /><span>Trust the signal.</span></h2></div><div className="trust-content"><p>Drifti observes executions, learns Capability Profiles, proposes contracts and verifies later behavior for drift. It shows Evidence so you can review the change.</p><div className="trust-rule"><span>01</span><strong>Observation informs; a human accepts the contract.</strong></div><div className="trust-rule"><span>02</span><strong>Verification reports drift; it does not block execution.</strong></div><div className="trust-rule"><span>03</span><strong>Core policy decisions are deterministic.</strong></div></div></div></section>

        <section className="final-section" aria-labelledby="final-title"><div className="container final-inner"><span className="section-index">YOUR NEXT EXECUTION</span><h2 id="final-title">Agents change.<br /><span>Their contracts should tell you when.</span></h2><div className="final-actions"><a className="button button-primary" href={getStartedUrl} target="_blank" rel="noopener noreferrer">Get started <Arrow /></a><a className="button button-secondary" href={githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub <Arrow diagonal /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><Brand /><p>Capability contracts for AI agents.</p><div><a href="#product">Product</a><a href="#how-it-works">How it works</a><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div><small>© {new Date().getFullYear()} Drifti</small></div></footer>
    </>
  );
}
