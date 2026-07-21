import type { Metadata } from "next";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = { title: "People", description: "People and academic leadership of the Vision & Autonomous Intelligence Lab." };

export default function PeoplePage() {
  const courses = ["Undergraduate Research Project", "Robot Path Planning", "Software Engineering", "Introduction to Artificial Intelligence", "Introduction to Image Processing", "Capstone Design"];
  return <PageFrame>
    <section className="page-hero section-shell compact-hero"><p className="eyebrow">People</p><h1>Curious minds.<br /><em>Grounded systems.</em></h1><p>We bring together computer vision, software engineering, and autonomous-system design around problems that matter outside the lab.</p></section>
    <section className="section-shell pi-profile">
      <div className="portrait-placeholder" aria-label="Taegeun Oh monogram portrait"><span>TO</span><small>Principal Investigator</small></div>
      <div className="profile-copy"><p className="eyebrow">Principal investigator</p><h2>Taegeun Oh, Ph.D.</h2><p className="profile-role">Assistant Professor · Department of Electronic Engineering<br />Department Chair since 2025 · Dong Seoul University</p><p>Taegeun Oh works across autonomous mission software, intelligent path planning, computer vision, and visual signal processing. Before joining Dong Seoul University in 2022, he spent eight years as a senior researcher at the Agency for Defense Development, developing avionics and autonomy for unmanned aerial systems.</p><div className="profile-links"><a href="mailto:tgoh@du.ac.kr">Email ↗</a><a href="https://github.com/taegeun-oh/Vision-AI" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
      <dl className="profile-facts"><div><dt>2022–present</dt><dd>Assistant Professor, Dong Seoul University<br />Department Chair, Department of Electronic Engineering (since 2025)</dd></div><div><dt>2014–2022</dt><dd>Senior Researcher, Agency for Defense Development</dd></div><div><dt>2014</dt><dd>Ph.D., Electrical & Electronic Engineering, Yonsei University</dd></div></dl>
    </section>
    <section className="section-shell member-section"><div className="section-heading split-heading"><div><p className="eyebrow">Lab members</p><h2>Student researchers</h2></div><p>Member profiles are ready to be added as the lab roster is confirmed. The page supports undergraduate researchers, graduate collaborators, and alumni.</p></div><div className="member-empty"><span className="member-orbit" aria-hidden="true"><i /><i /><i /></span><div><strong>Profiles coming soon</strong><p>Interested students can contact Prof. Oh with a short introduction and research interests.</p></div><a className="button button-primary" href="mailto:tgoh@du.ac.kr">Contact the lab <span>↗</span></a></div></section>
    <section className="section-shell teaching-section"><div><p className="eyebrow">Teaching</p><h2>Learning by<br />building.</h2></div><div className="course-grid">{courses.map((course, index) => <div key={course}><span>{String(index + 1).padStart(2, "0")}</span><strong>{course}</strong></div>)}</div></section>
  </PageFrame>;
}
