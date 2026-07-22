import type { Metadata } from "next";
import Link from "next/link";
import PremiumShell, { Equalizer } from "../components/PremiumShell";

export const metadata: Metadata = {
  title: "About — Vagus Records",
  description: "The philosophy, artists, and inner current behind Vagus Records.",
};

export default function AboutPage() {
  return (
    <PremiumShell>
      <main className="interior-page">
        <section className="page-hero about-page-hero">
          <div className="page-index"><span>ABOUT</span><b>001</b></div>
          <div className="page-hero-copy">
            <p className="premium-eyebrow"><i /> The nerve behind the signal</p>
            <h1>A label for the<br /><em>inner current.</em></h1>
            <p>Vagus Records explores the point where melody becomes physical—music that slows time, shifts perception, and remains after the room goes quiet.</p>
          </div>
          <div className="vagus-orbit" aria-hidden="true"><span /><span /><span /><Equalizer /></div>
          <div className="hero-stat-row">
            <div><b>2024</b><span>Independent since</span></div>
            <div><b>02</b><span>Connected artists</span></div>
            <div><b>∞</b><span>One frequency</span></div>
          </div>
        </section>

        <section className="editorial-story">
          <div className="story-marker"><span>01</span><i /></div>
          <div className="story-title"><p>Origin</p><h2>The body listens<br />before the mind <em>knows.</em></h2></div>
          <div className="story-copy">
            <p>The vagus nerve carries information between the brain and the body. It regulates breath, pulse, attention, and calm. That same invisible conversation is the foundation of the label.</p>
            <p>Our releases live between melodic house and techno: precise enough for the dance floor, spacious enough for private listening, and emotionally direct without becoming obvious.</p>
          </div>
        </section>

        <section className="values-section">
          <div className="section-intro"><p className="premium-eyebrow"><i /> Our principles</p><h2>What passes<br /><em>through us.</em></h2></div>
          <div className="value-grid">
            <article><span>01</span><div className="value-pulse" /><h3>Body before mind</h3><p>Rhythm should register physically before it asks to be understood.</p></article>
            <article><span>02</span><div className="value-pulse offset" /><h3>Tension and release</h3><p>Every arrangement needs breath: pressure, space, and a reason to return.</p></article>
            <article><span>03</span><div className="value-pulse slow" /><h3>Connection over noise</h3><p>We build slowly with artists whose work carries a distinct internal world.</p></article>
          </div>
        </section>

        <section className="page-cta">
          <Equalizer />
          <p>Have a signal that belongs here?</p>
          <h2>Let us hear what<br />moves <em>through you.</em></h2>
          <Link className="button primary" href="/submit">Submit music <span>↗</span></Link>
        </section>
      </main>
    </PremiumShell>
  );
}
