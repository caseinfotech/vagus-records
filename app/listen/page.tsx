import type { Metadata } from "next";
import PremiumShell, { Equalizer } from "../components/PremiumShell";

export const metadata: Metadata = {
  title: "Listen — Vagus Records",
  description: "Enter the Vagus Records listening room and hear the connected artists.",
};

const altumatumEmbed = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/altumatum/sid-padrick-master-1&color=%23c3222c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true";
const driftKidEmbed = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jtechavl/orbit&color=%23c3222c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true";

export default function ListenPage() {
  return (
    <PremiumShell>
      <main className="interior-page listen-page">
        <section className="page-hero listen-hero">
          <div className="page-index"><span>LISTEN</span><b>002</b></div>
          <div className="page-hero-copy">
            <p className="premium-eyebrow"><i /> Listening room</p>
            <h1>Enter the<br /><em>frequency.</em></h1>
            <p>Headphones recommended. Lower the lights. Give the signal your full attention.</p>
          </div>
          <div className="hero-equalizer"><Equalizer /></div>
        </section>

        <section className="soundcloud-stage">
          <div className="player-heading"><div><p className="premium-eyebrow"><i /> Current transmission</p><h2>Altumatum — <em>The Case of Sid Padrick</em></h2></div><span>SC / 001</span></div>
          <div className="soundcloud-frame main-frame">
            <div className="frame-glow" aria-hidden="true" />
            <iframe title="Altumatum — The Case of Sid Padrick on SoundCloud" allow="autoplay" src={altumatumEmbed} />
          </div>
          <div className="secondary-player">
            <div><span>SC / 002</span><h3>DriftKid — Orbit</h3><p>Melodic techno · Progressive house · Melodic house</p></div>
            <div className="soundcloud-frame compact-frame"><iframe title="DriftKid — Orbit on SoundCloud" allow="autoplay" src={driftKidEmbed} /></div>
          </div>
          <a className="soundcloud-link" href="https://soundcloud.com/vagusrecords" target="_blank" rel="noreferrer">Follow Vagus Records on SoundCloud <span>↗</span></a>
        </section>

        <section className="ritual-grid">
          <article><span>01</span><h3>Arrive</h3><p>Let the first minute establish its own gravity.</p></article>
          <article><span>02</span><h3>Breathe</h3><p>Notice where the low end lands in the body.</p></article>
          <article><span>03</span><h3>Return</h3><p>Hear what changed when the loop comes back.</p></article>
        </section>
      </main>
    </PremiumShell>
  );
}
