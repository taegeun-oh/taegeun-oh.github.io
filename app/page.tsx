import Link from "next/link";
import { PageFrame } from "@/components/SiteShell";
import { publicationTypeLabels, publications } from "@/data/publications";

const featured = publications.filter((item) => item.featured);

export default function Home() {
  return (
    <PageFrame>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" /> Dong Seoul University · Seongnam</p>
          <h1>Intelligence<br />in <em>motion.</em></h1>
          <p className="hero-lead">We develop vision and autonomy for systems that must understand complex scenes, choose reliable paths, and act safely in the real world.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/research">Explore our research <span>↗</span></Link>
            <Link className="text-link" href="/publications">View publications <span>→</span></Link>
          </div>
        </div>
        <div className="hero-system" aria-label="Perception to planning research diagram">
          <div className="system-grid" aria-hidden="true" /><span className="corner corner-tl" aria-hidden="true" /><span className="corner corner-br" aria-hidden="true" />
          <div className="system-label system-label-a"><small>01</small><strong>Perceive</strong><span>visual understanding</span></div>
          <div className="system-label system-label-b"><small>02</small><strong>Plan</strong><span>adaptive path search</span></div>
          <div className="system-label system-label-c"><small>03</small><strong>Act</strong><span>mission intelligence</span></div>
          <div className="route-line route-one" aria-hidden="true" /><div className="route-line route-two" aria-hidden="true" />
          <span className="node node-a" aria-hidden="true" /><span className="node node-b" aria-hidden="true" /><span className="node node-c" aria-hidden="true" />
          <div className="system-caption"><span>VAI / 2026</span><span>37.410° N · 127.129° E</span></div>
        </div>
      </section>

      <section className="metrics-band"><div className="section-shell metrics-grid">
        <div><strong>19</strong><span>International journal works</span></div><div><strong>7</strong><span>International conferences</span></div><div><strong>5</strong><span>Registered patents</span></div><div><strong>3</strong><span>Core research programs</span></div>
      </div></section>

      <section className="section-shell content-section">
        <div className="section-heading split-heading"><div><p className="eyebrow">Research areas</p><h2>From pixels to<br />decisions.</h2></div><p>Our work connects perception, planning, and dependable autonomy across UAVs, intelligent mobility, and biomedical imagery.</p></div>
        <div className="research-grid">
          <Link className="research-card card-dark" href="/research#autonomous-systems"><span className="card-number">01</span><div className="mini-route" aria-hidden="true"><i /><i /><i /></div><div><p>Autonomous systems</p><h3>Mission intelligence<br />for UAVs</h3></div><span className="card-arrow">↗</span></Link>
          <Link className="research-card card-lime" href="/research#path-planning"><span className="card-number">02</span><div className="contours" aria-hidden="true" /><div><p>Intelligent planning</p><h3>Adaptive paths<br />under constraints</h3></div><span className="card-arrow">↗</span></Link>
          <Link className="research-card card-light" href="/research#computer-vision"><span className="card-number">03</span><div className="vision-frame" aria-hidden="true"><span /></div><div><p>Computer vision</p><h3>Perception across<br />complex domains</h3></div><span className="card-arrow">↗</span></Link>
        </div>
      </section>

      <section className="section-shell content-section publication-preview">
        <div className="section-heading row-heading"><div><p className="eyebrow">Selected publications</p><h2>Recent work</h2></div><Link className="text-link" href="/publications">All publications <span>→</span></Link></div>
        <div className="featured-publications">{featured.map((item) => <article key={item.id}><div className="featured-meta"><span>{item.year}</span><span>{publicationTypeLabels[item.type]}</span></div><h3>{item.title}</h3><p>{item.venue}</p></article>)}</div>
      </section>

      <section className="section-shell code-callout"><div><p className="eyebrow">Open research</p><h2>Code that turns papers<br />into reproducible work.</h2></div><div><p>Our code hub is organized for clear installation, data preparation, evaluation, and citation.</p><Link className="button button-light" href="/code">Browse research code <span>↗</span></Link></div></section>
    </PageFrame>
  );
}
