"use client";

import { FormEvent, useState } from "react";
import PremiumShell, { Equalizer } from "../components/PremiumShell";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <PremiumShell>
      <main className="interior-page submit-page">
        <section className="page-hero submit-hero">
          <div className="page-index"><span>SUBMIT</span><b>003</b></div>
          <div className="page-hero-copy">
            <p className="premium-eyebrow"><i /> Demo portal</p>
            <h1>Send us your<br /><em>inner signal.</em></h1>
            <p>We listen for emotional clarity, patient arrangement, and music with a physical point of view.</p>
          </div>
          <div className="submission-frequency" aria-hidden="true"><Equalizer /><span>PRIVATE LINKS ONLY</span></div>
        </section>

        <section className="submission-layout">
          <aside className="submission-brief">
            <p className="premium-eyebrow"><i /> Before you send</p>
            <h2>Make the first<br />listen <em>count.</em></h2>
            <ol>
              <li><span>01</span><div><b>Private streaming link</b><p>SoundCloud private links are preferred. Please enable downloads.</p></div></li>
              <li><span>02</span><div><b>Finished music only</b><p>Send one to three mastered or near-final tracks—not a full archive.</p></div></li>
              <li><span>03</span><div><b>Tell us why</b><p>A short, specific note means more than a long biography.</p></div></li>
            </ol>
            <small>Prototype mode · this mockup does not transmit or store your submission.</small>
          </aside>

          <div className="submission-panel">
            {submitted ? (
              <div className="submission-success" role="status" aria-live="polite">
                <div className="success-ring"><Equalizer compact /></div>
                <p>Signal prepared</p>
                <h2>Your demo is ready<br />for the next step.</h2>
                <span>This prototype keeps everything in your browser. Connect the production submission endpoint before launch.</span>
                <button className="button ghost" onClick={() => setSubmitted(false)}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-progress"><span>DEMO / 001</span><i /></div>
                <div className="field-row">
                  <label><span>Artist / project name</span><input name="artist" required placeholder="Your artist name" autoComplete="organization" /></label>
                  <label><span>Email</span><input name="email" required type="email" placeholder="you@example.com" autoComplete="email" /></label>
                </div>
                <label><span>Private streaming link</span><input name="link" required type="url" placeholder="https://soundcloud.com/…" /></label>
                <div className="field-row">
                  <label><span>Release title</span><input name="title" required placeholder="EP or track title" /></label>
                  <label><span>Primary sound</span><select name="genre" defaultValue=""><option value="" disabled>Select a direction</option><option>Melodic house</option><option>Melodic techno</option><option>Progressive house</option><option>Other / between worlds</option></select></label>
                </div>
                <label><span>Why Vagus?</span><textarea name="note" rows={5} required placeholder="Tell us what this music is trying to move…" /></label>
                <label className="consent"><input type="checkbox" required /><span>I own or control the rights to this music and agree to private review.</span></label>
                <button className="button primary submit-button" type="submit">Prepare submission <span>↗</span></button>
              </form>
            )}
          </div>
        </section>
      </main>
    </PremiumShell>
  );
}
