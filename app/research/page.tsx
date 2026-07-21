import type { Metadata } from "next";
import Image from "next/image";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Research", description: "Research themes and programs of the Vision & Autonomous Intelligence Lab." };

const areas = [
  { id: "autonomous-systems", number: "01", title: "Autonomous systems & mission intelligence", summary: "Reliable autonomy for unmanned aircraft, from mission management and situational awareness to fault-tolerant flight-control software.", topics: ["UAV mission management", "Distributed task re-allocation", "Flight-control computers", "Situational awareness"], image: "/research-autonomy.webp", alt: "Diagram of an autonomous aircraft linking terrain sensing, onboard computing, and mission intelligence" },
  { id: "path-planning", number: "02", title: "Intelligent path planning", summary: "Sampling-based and learning-assisted planners that respond to terrain, time windows, fleet constraints, and real operating conditions.", topics: ["TA-RRT*", "Time-window-aware planning", "Demand-responsive transit", "Outdoor delivery robots"], image: "/research-path-planning.webp", alt: "Topographic planning diagram with obstacles, sampled alternatives, and an optimized route" },
  { id: "computer-vision", number: "03", title: "Computer vision & multi-task perception", summary: "Visual systems that share information across tasks to understand autonomous-driving scenes, UAV imagery, and complex biomedical images.", topics: ["Multi-task learning", "Autonomous-driving perception", "UAV imagery", "Histopathology classification"], image: "/research-perception.webp", alt: "Multi-task perception diagram connecting aerial imagery to detection, depth, and segmentation outputs" },
  { id: "image-quality", number: "04", title: "Image quality & visual signal processing", summary: "No-reference methods for sharpness, motion blur, visual quality, and robust content fingerprints—rooted in Taegeun Oh’s doctoral research.", topics: ["Blind sharpness prediction", "Motion-blur assessment", "Visual quality adaptation", "Content fingerprinting"], image: "/research-image-quality.webp", alt: "Visual signal processing diagram showing an aerial image progressing from blur to sharp detail" },
];

export default function ResearchPage() {
  return <PageFrame>
    <section className="section-shell research-detail-list research-first">{areas.map((area) => <article id={area.id} key={area.id} className="research-detail"><div className="detail-number">{area.number}</div><div className="detail-copy"><h2>{area.title}</h2><p>{area.summary}</p></div><ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><figure className="research-visual"><Image src={area.image} alt={area.alt} width={1448} height={1086} sizes="(max-width: 700px) calc(100vw - 78px), (max-width: 980px) calc(100vw - 146px), 390px" unoptimized /></figure></article>)}</section>
    <section className="section-shell process-section"><div><p className="eyebrow">How we work</p><h2>Research through<br />the full loop.</h2></div><ol>
      <li><span>01</span><div><strong>Frame</strong><p>Define a real operational constraint, not just a benchmark target.</p></div></li>
      <li><span>02</span><div><strong>Model</strong><p>Build interpretable perception and planning methods around that constraint.</p></div></li>
      <li><span>03</span><div><strong>Validate</strong><p>Evaluate failure modes, efficiency, and robustness across environments.</p></div></li>
      <li><span>04</span><div><strong>Release</strong><p>Package papers, code, configurations, and citation guidance together.</p></div></li>
    </ol></section>
  </PageFrame>;
}
