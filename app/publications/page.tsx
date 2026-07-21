import type { Metadata } from "next";
import { PublicationExplorer } from "@/components/PublicationExplorer";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Publications", description: "Journal, conference, domestic, and book publications from the VAI Lab." };

export default function PublicationsPage() {
  return <PageFrame><section className="section-shell publication-section publication-first"><PublicationExplorer /></section></PageFrame>;
}
