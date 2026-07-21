import type { Metadata } from "next";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Courses taught by Taegeun Oh at Dong Seoul University.",
};

const courses = [
  "Undergraduate Research Project",
  "Robot Path Planning",
  "Software Engineering",
  "Introduction to Artificial Intelligence",
  "Introduction to Image Processing",
  "Capstone Design",
];

export default function TeachingPage() {
  return <PageFrame>
    <section className="page-hero section-shell compact-hero teaching-hero">
      <p className="eyebrow">Teaching</p>
      <h1>Learning by<br /><em>building.</em></h1>
      <p>Courses connect foundational ideas in software, artificial intelligence, and visual computing with practical autonomous-system design.</p>
    </section>
    <section className="section-shell teaching-page-section">
      <div className="teaching-section">
        <div><p className="eyebrow">Current courses</p><h2>From fundamentals<br />to field systems.</h2></div>
        <div className="course-grid">{courses.map((course, index) => <div key={course}><span>{String(index + 1).padStart(2, "0")}</span><strong>{course}</strong></div>)}</div>
      </div>
    </section>
  </PageFrame>;
}
