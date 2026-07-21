import type { Metadata } from "next";
import { PublicationExplorer } from "@/components/PublicationExplorer";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Publications", description: "Journal, conference, domestic, and book publications from the VAI Lab." };

export default function PublicationsPage() {
  return <PageFrame><section className="page-hero section-shell compact-hero publications-hero"><p className="eyebrow">Publications</p><h1>Ideas, tested<br />and <em>shared.</em></h1><p>Explore work spanning autonomous systems, path planning, multi-task vision, image quality, and visual communications.</p></section><section className="section-shell publication-section"><PublicationExplorer /></section></PageFrame>;
}
