import type { Metadata } from "next";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Research Code", description: "Reproducible research code and resources from the Vision & Autonomous Intelligence Lab." };

const projects = [
  { key: "TA-RRT*", area: "Path planning", title: "Terrain-aware adaptive sampling for UAV path planning", tags: ["Python", "Planning", "UAV"], status: "Release in preparation" },
  { key: "XGate-Net", area: "Multi-task perception", title: "Gated cross-task interaction for autonomous-driving perception", tags: ["PyTorch", "Vision", "Autonomy"], status: "Paper under review" },
  { key: "TriV-Net", area: "UAV perception", title: "Triple visual perception from UAV imagery", tags: ["PyTorch", "Multi-task", "UAV"], status: "Major revision" },
  { key: "IQA", area: "Image quality", title: "Reference implementations for sharpness and motion-blur assessment", tags: ["MATLAB", "Image quality", "Metrics"], status: "Archive curation" },
];

export default function CodePage() {
  return <PageFrame>
    <section className="page-hero section-shell code-hero"><div><p className="eyebrow">Research code</p><h1>Reproduce.<br /><em>Build onward.</em></h1><p>Code releases are organized as complete research packages: environment, data preparation, training or planning, evaluation, and citation.</p></div><a className="repo-panel" href="https://github.com/taegeun-oh/Vision-AI" target="_blank" rel="noreferrer"><span className="repo-top"><small>PUBLIC REPOSITORY</small><b>↗</b></span><strong>taegeun-oh/<br />Vision-AI</strong><span className="repo-bottom"><i /> GitHub · main</span></a></section>
    <section className="section-shell code-list-section"><div className="section-heading row-heading"><div><p className="eyebrow">Release catalog</p><h2>Research packages</h2></div><span className="mono-note">STATUS / 2026.07</span></div><div className="code-list">{projects.map((project, index) => <article key={project.key}><span className="code-index">{String(index + 1).padStart(2, "0")}</span><div className="code-title"><small>{project.area}</small><h3>{project.key}</h3><p>{project.title}</p></div><div className="code-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="code-status"><i /> {project.status}</span></article>)}</div></section>
    <section className="section-shell release-standard"><div><p className="eyebrow">Release standard</p><h2>What every package<br />will include.</h2></div><div className="standard-grid"><div><span>01</span><strong>Environment</strong><p>Versioned dependencies and verified setup instructions.</p></div><div><span>02</span><strong>Data</strong><p>Preparation steps, expected structure, and source links.</p></div><div><span>03</span><strong>Evaluation</strong><p>Reproducible commands, configurations, and reported metrics.</p></div><div><span>04</span><strong>Citation</strong><p>BibTeX, license, paper link, and model limitations.</p></div></div></section>
  </PageFrame>;
}
