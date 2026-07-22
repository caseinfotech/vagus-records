import type { Metadata } from "next";
import Link from "next/link";
import PremiumShell, { Equalizer } from "../components/PremiumShell";

export const metadata: Metadata = {
  title: "Contact — Vagus Records",
  description: "Contact Vagus Records for general enquiries, partnerships, and demos.",
};

export default function ContactPage() {
  return (
    <PremiumShell>
      <main className="interior-page contact-page">
        <section className="page-hero contact-hero">
          <div className="page-index"><span>CONTACT</span><b>004</b></div>
          <div className="page-hero-copy">
            <p className="premium-eyebrow"><i /> Open channel</p>
            <h1>Start a<br /><em>connection.</em></h1>
            <p>For partnerships, press, licensing, events, and everything that does not fit neatly into a category.</p>
          </div>
          <div className="contact-radar" aria-hidden="true"><span /><span /><span /><i /></div>
        </section>

        <section className="contact-directory">
          <a href="mailto:signals@vagusrecords.com"><span>01 / GENERAL</span><h2>signals@vagusrecords.com</h2><p>Partnerships, press, licensing, and label enquiries.</p><b>↗</b></a>
          <Link href="/submit"><span>02 / DEMOS</span><h2>Submit your music</h2><p>Private streaming links through the focused demo portal.</p><b>↗</b></Link>
          <a href="https://www.instagram.com/vagusrecords" target="_blank" rel="noreferrer"><span>03 / SOCIAL</span><h2>@vagusrecords</h2><p>New releases, visual transmissions, and live moments.</p><b>↗</b></a>
        </section>

        <section className="contact-statement">
          <div className="contact-eq"><Equalizer /></div>
          <p>We answer slowly and intentionally.</p>
          <h2>If the connection is real,<br />the signal will <em>return.</em></h2>
          <div className="contact-links">
            <a href="https://www.youtube.com/@VagusRecords" target="_blank" rel="noreferrer">YouTube ↗</a>
            <a href="https://www.facebook.com/vagusrecords" target="_blank" rel="noreferrer">Facebook ↗</a>
            <a href="https://x.com/vagusrecords" target="_blank" rel="noreferrer">X / Twitter ↗</a>
            <a href="https://soundcloud.com/vagusrecords" target="_blank" rel="noreferrer">SoundCloud ↗</a>
          </div>
        </section>
      </main>
    </PremiumShell>
  );
}
