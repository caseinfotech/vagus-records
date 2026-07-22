"use client";

import { useState } from "react";

const tracks = [
  { number: "01", title: "Autonomic", time: "06:48" },
  { number: "02", title: "Reciprocal", time: "07:12" },
  { number: "03", title: "Innersight", time: "06:35" },
  { number: "04", title: "Vagal Tone", time: "07:01" },
];

const artists = [
  {
    name: "Altumatum",
    location: "Asheville, NC",
    focus: "Melodic techno · The Case of Sid Padrick",
    image: "/images/altumatum.jpg",
    href: "https://soundcloud.com/altumatum",
  },
  {
    name: "DriftKid",
    location: "Melodic / Progressive",
    focus: "Techno · Progressive house · Melodic house",
    image: "/images/driftkid.jpg",
    href: "https://soundcloud.com/jtechavl",
  },
];

const events = [
  { month: "JUN", day: "14", name: "Vagus Night", place: "København, Denmark", lineup: "Mira Sol, Oscar Mulero, Fahlberg" },
  { month: "JUL", day: "19", name: "Inner Current", place: "Ritter Butzke, Berlin", lineup: "Oscar Mulero, Kettenkarussell" },
  { month: "AUG", day: "23", name: "Breath Mode", place: "Radion, Amsterdam", lineup: "Mira Sol, Fahlberg, Human Architect" },
];

function SignalMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "signal-mark compact" : "signal-mark"} aria-hidden="true">
      <i /><i /><i /><i /><i /><i /><i />
    </div>
  );
}

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const selectTrack = (index: number) => {
    setActiveTrack(index);
    setPlaying(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vagus Records home">
          <span className="monogram"><img src="/images/vagus-geometric-logo.png" alt="" /></span>
          <span>VAGUS RECORDS</span>
        </a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="#releases" onClick={() => setMenuOpen(false)}>Releases</a>
          <a href="#artists" onClick={() => setMenuOpen(false)}>Artists</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <button className="header-play" aria-label={playing ? "Pause music" : "Play music"} onClick={() => setPlaying(!playing)}>
          {playing ? <span className="pause-icon">Ⅱ</span> : <span className="play-icon">▶</span>}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent sound · Berlin</p>
          <h1>Music for the<br /><em>inner current</em></h1>
          <p className="lede">Melodic house and techno for body, mind, and everything between.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => setPlaying(true)}>Listen now <span>↗</span></button>
            <a className="button ghost" href="#releases">Explore releases</a>
          </div>
        </div>

        <div className="nerve-art" aria-hidden="true"><img src="/images/vagus-brainwave-hero.png" alt="" /></div>
        <div className="hero-wave"><SignalMark /></div>
        <div className="scroll-note">SCROLL TO CONNECT <span>↓</span></div>
      </section>

      <section className="release" id="releases">
        <div className="section-label"><SignalMark compact /> Latest signal <span>VG-012</span></div>
        <div className="release-grid">
          <div className="cover-wrap">
            <div className="cover">
              <img src="/images/autonomic-cover.png" alt="Autonomic by Mira Sol album artwork" />
              <span className="cover-label">VAGUS RECORDS</span>
              <span className="cover-code">012</span>
            </div>
          </div>
          <div className="release-info">
            <p className="meta">NEW ALBUM · 2026</p>
            <h2>Mira Sol<br /><em>Autonomic</em></h2>
            <div className="track-list">
              {tracks.map((track, index) => (
                <button className={activeTrack === index ? "track active" : "track"} onClick={() => selectTrack(index)} key={track.title}>
                  <span>{track.number}</span><b>{track.title}</b><i /><span>{track.time}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="player">
            <div className="player-status"><span className={playing ? "live" : ""} /> NOW {playing ? "PLAYING" : "PAUSED"}</div>
            <p>{tracks[activeTrack].number} &nbsp; {tracks[activeTrack].title}</p>
            <small>MIRA SOL</small>
            <div className="waveform"><SignalMark /></div>
            <div className="player-controls">
              <button aria-label="Previous track" onClick={() => setActiveTrack((activeTrack + tracks.length - 1) % tracks.length)}>◀</button>
              <button className="main-control" aria-label={playing ? "Pause track" : "Play track"} onClick={() => setPlaying(!playing)}>{playing ? "Ⅱ" : "▶"}</button>
              <button aria-label="Next track" onClick={() => setActiveTrack((activeTrack + 1) % tracks.length)}>▶</button>
            </div>
            <div className="progress"><i className={playing ? "moving" : ""} /></div>
            <div className="times"><span>02:31</span><span>{tracks[activeTrack].time}</span></div>
          </div>
        </div>
      </section>

      <section className="artists-section" id="artists">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Connected artists</p><h2>Distinct minds.<br /><em>One frequency.</em></h2></div>
          <p>Artists tuned to the deeper signals—building worlds from rhythm, tension and release.</p>
        </div>
        <div className="artist-grid">
          {artists.map((artist, index) => (
            <article className="artist-card" key={artist.name}>
              <a className="artist-portrait" href={artist.href} target="_blank" rel="noreferrer" aria-label={`Listen to ${artist.name} on SoundCloud`}>
                <img src={artist.image} alt={`${artist.name}, Vagus Records artist`} />
                <span className="artist-location">{artist.location}</span>
              </a>
              <div className="artist-meta">
                <span>0{index + 1}</span>
                <h3>{artist.name}</h3>
                <p>{artist.focus}</p>
                <a href={artist.href} target="_blank" rel="noreferrer" aria-label={`Listen to ${artist.name} on SoundCloud`}>↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="events" id="events">
        <div className="events-title"><p className="eyebrow"><span /> Transmissions</p><h2>Meet us in<br /><em>the current.</em></h2></div>
        <div className="event-list">
          {events.map((event) => (
            <article className={activeEvent === event.name ? "event active" : "event"} key={event.name}>
              <time><span>{event.month}</span>{event.day}</time>
              <div><h3>{event.name}</h3><p>{event.place}</p></div>
              <p className="lineup">{event.lineup}</p>
              <button aria-label={`More about ${event.name}`} aria-expanded={activeEvent === event.name} onClick={() => setActiveEvent(activeEvent === event.name ? null : event.name)}>{activeEvent === event.name ? "−" : "+"}</button>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="about">
        <p>THE BODY LISTENS BEFORE THE MIND KNOWS.</p>
        <h2>Sound travels through us.<br />We release what <em>stays.</em></h2>
        <a className="button primary" href="mailto:signals@vagusrecords.com">Send a signal <span>↗</span></a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="monogram"><img src="/images/vagus-geometric-logo.png" alt="" /></span><span>VAGUS RECORDS</span></a>
        <p>Melodic house & techno<br />Berlin · Since 2024</p>
        <div className="socials" aria-label="Vagus Records social links">
          <a href="https://www.instagram.com/vagusrecords" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@VagusRecords" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://www.soundcloud.com/vagusrecords" target="_blank" rel="noreferrer">SoundCloud</a>
          <a href="https://www.facebook.com/vagusrecords" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://x.com/vagusrecords" target="_blank" rel="noreferrer">X / Twitter</a>
          <a href="http://vagusrecords.com" target="_blank" rel="noreferrer">Official Site</a>
        </div>
        <small>© 2026 VAGUS RECORDS</small>
      </footer>
    </main>
  );
}
