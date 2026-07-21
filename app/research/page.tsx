import type { Metadata } from "next";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Research", description: "Research themes and programs of the Vision & Autonomous Intelligence Lab." };

const areas = [
  { id: "autonomous-systems", number: "01", title: "Autonomous systems & mission intelligence", summary: "Reliable autonomy for unmanned aircraft, from mission management and situational awareness to fault-tolerant flight-control software.", topics: ["UAV mission management", "Distributed task re-allocation", "Flight-control computers", "Situational awareness"], note: "Built on eight years of applied aerospace R&D at the Agency for Defense Development." },
  { id: "path-planning", number: "02", title: "Intelligent path planning", summary: "Sampling-based and learning-assisted planners that respond to terrain, time windows, fleet constraints, and real operating conditions.", topics: ["TA-RRT*", "Time-window-aware planning", "Demand-responsive transit", "Outdoor delivery robots"], note: "Current work links constrained optimization with practical mobility and UAV missions." },
  { id: "computer-vision", number: "03", title: "Computer vision & multi-task perception", summary: "Visual systems that share information across tasks to understand autonomous-driving scenes, UAV imagery, and complex biomedical images.", topics: ["Multi-task learning", "Autonomous-driving perception", "UAV imagery", "Histopathology classification"], note: "Recent models include XGate-Net and TriV-Net, currently under peer review." },
  { id: "image-quality", number: "04", title: "Image quality & visual signal processing", summary: "No-reference methods for sharpness, motion blur, visual quality, and robust content fingerprints—rooted in Taegeun Oh’s doctoral research.", topics: ["Blind sharpness prediction", "Motion-blur assessment", "Visual quality adaptation", "Content fingerprinting"], note: "Foundational work spans IEEE Transactions on Image Processing, Broadcasting, and CSVT." },
];

export default function ResearchPage() {
  return <PageFrame>
    <section className="page-hero section-shell"><p className="eyebrow">Research</p><h1>Systems that move<br />with <em>intelligence.</em></h1><p>We study the full autonomy loop—from sensing and representation to path selection, coordination, and dependable execution.</p></section>
    <section className="section-shell research-detail-list">{areas.map((area) => <article id={area.id} key={area.id} className="research-detail"><div className="detail-number">{area.number}</div><div className="detail-copy"><h2>{area.title}</h2><p>{area.summary}</p></div><ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><aside>{area.note}</aside></article>)}</section>
    <section className="section-shell process-section"><div><p className="eyebrow">How we work</p><h2>Research through<br />the full loop.</h2></div><ol>
      <li><span>01</span><div><strong>Frame</strong><p>Define a real operational constraint, not just a benchmark target.</p></div></li>
      <li><span>02</span><div><strong>Model</strong><p>Build interpretable perception and planning methods around that constraint.</p></div></li>
      <li><span>03</span><div><strong>Validate</strong><p>Evaluate failure modes, efficiency, and robustness across environments.</p></div></li>
      <li><span>04</span><div><strong>Release</strong><p>Package papers, code, configurations, and citation guidance together.</p></div></li>
    </ol></section>
  </PageFrame>;
}
