import type { Metadata } from "next";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = { title: "People", description: "People and academic leadership of the Vision & Autonomous Intelligence Lab." };

export default function PeoplePage() {
  const undergraduateResearchers = [
    { name: "Minkwon Jeon", initials: "MJ", topic: "UAV Situation Perception" },
    { name: "Geunhyung Lee", initials: "GL", topic: "UAV Collision Avoidance" },
    { name: "Daein Lee", initials: "DL", topic: "Research focus to be confirmed" },
  ];

  return <PageFrame>
    <section className="section-shell pi-profile people-profile-first">
      <div className="portrait-placeholder" aria-label="Taegeun Oh monogram portrait"><span>TO</span><small>Principal Investigator</small></div>
      <div className="profile-copy"><p className="eyebrow">Principal investigator</p><h2>Taegeun Oh, Ph.D.</h2><p className="profile-role">Assistant Professor · Department of Electronic Engineering<br />Dong Seoul University</p><p>Taegeun Oh works across autonomous mission software, intelligent path planning, computer vision, and visual signal processing. Before joining Dong Seoul University in 2022, he spent eight years as a senior researcher at the Agency for Defense Development, developing avionics and autonomy for unmanned aerial systems.</p><div className="profile-links"><a href="mailto:tgoh@du.ac.kr">Email ↗</a><a href="https://github.com/taegeun-oh/Vision-AI" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
      <dl className="profile-facts"><div><dt>2022–present</dt><dd>Assistant Professor, Dong Seoul University<ul className="career-subitems"><li>Department Chair, Department of Electronic Engineering (since 2025)</li></ul></dd></div><div><dt>2014–2022</dt><dd>Senior Researcher, Agency for Defense Development</dd></div><div><dt>2014</dt><dd>Ph.D., Electrical & Electronic Engineering, Yonsei University</dd></div></dl>
    </section>
    <section className="section-shell member-section">
      <div className="section-heading split-heading"><div><p className="eyebrow">Current lab members</p><h2>Undergraduate<br />Researchers</h2></div><p>Our undergraduate researchers work on perception and planning problems for dependable autonomous UAV systems.</p></div>
      <div className="member-grid">{undergraduateResearchers.map((member, index) => <article className="member-card" key={member.name}><div className="member-card-top"><span>{String(index + 1).padStart(2, "0")}</span><span className="member-monogram" aria-hidden="true">{member.initials}</span></div><div><p>Undergraduate Researcher</p><h3>{member.name}</h3><dl><dt>Research focus</dt><dd>{member.topic}</dd></dl></div></article>)}</div>
    </section>
  </PageFrame>;
}
