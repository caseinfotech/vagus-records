"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { href: "/#releases", label: "Releases" },
  { href: "/#artists", label: "Artists" },
  { href: "/about", label: "About" },
  { href: "/submit", label: "Submit" },
  { href: "/contact", label: "Contact" },
];

export function Equalizer({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "premium-equalizer compact" : "premium-equalizer"} aria-hidden="true">
      {Array.from({ length: compact ? 6 : 18 }, (_, index) => <i key={index} />)}
    </span>
  );
}

export default function PremiumShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="premium-shell">
      <header className="premium-header">
        <Link className="premium-brand" href="/" aria-label="Vagus Records home">
          <Image src="/images/vagus-geometric-logo.png" alt="" width={45} height={45} priority />
          <span>VAGUS RECORDS</span>
        </Link>
        <button className="premium-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Site navigation">
          {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
        </nav>
        <Link className="listen-chip" href="/listen"><Equalizer compact /> Listen</Link>
      </header>

      <div className="ambient-signal" aria-hidden="true">
        <span className="ambient-orb one" />
        <span className="ambient-orb two" />
        <span className="signal-thread" />
      </div>

      {children}

      <footer className="premium-footer">
        <div>
          <Link className="premium-brand" href="/"><Image src="/images/vagus-geometric-logo.png" alt="" width={45} height={45} /><span>VAGUS RECORDS</span></Link>
          <p>Music for the inner current.</p>
        </div>
        <div className="premium-footer-nav">
          <Link href="/listen">Listen</Link><Link href="/about">About</Link><Link href="/submit">Submit music</Link><Link href="/contact">Contact</Link>
        </div>
        <div className="premium-footer-social">
          <a href="https://www.instagram.com/vagusrecords" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.youtube.com/@VagusRecords" target="_blank" rel="noreferrer">YouTube ↗</a>
          <a href="https://soundcloud.com/vagusrecords" target="_blank" rel="noreferrer">SoundCloud ↗</a>
        </div>
        <small>© 2026 VAGUS RECORDS · INDEPENDENT SIGNAL</small>
      </footer>
    </div>
  );
}
