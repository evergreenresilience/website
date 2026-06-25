// ============================================================
// EVERGREEN RESILIENCE INSTITUTE — SITE COMPONENT
// ============================================================
// Colors/fonts: Arctic Light (Playfair Display + Instrument Sans, white/green)
// Layout/organization: App_0 (centered sections, scroll animations, mobile menu)
// ALL text content lives in data.js — edit that file, never this one.
// ============================================================

import { useState, useEffect, useRef } from "react";
import { HashRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { siteInfo, ui, about, researchAreas, projects, team, publications, contact } from "./data.js";

const SECTIONS = ["home","about","research","projects","team","contact"];
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// Arctic Light color palette
const C = {
  bg: "#F7F8F6",
  surface: "#FFFFFF",
  border: "#E2E5E0",
  borderStrong: "#C8CEC4",
  ink: "#1A1F18",
  inkMid: "#4A5248",
  inkLight: "#7A8478",
  accent: "#2D6A4F",
  accentLight: "#52B788",
  accentPale: "#D8F3DC",
};

// Arctic Light markdown renderer
function MD({ children, size = "normal" }) {
  const s = size === "small" ? 14 : 16;
  return (
    <ReactMarkdown components={{
      p: ({ children }) => <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: s, color: C.inkMid, lineHeight: 1.8, margin: "0 0 12px" }}>{children}</p>,
      ol: ({ children }) => <ol style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: s, color: C.inkMid, lineHeight: 1.8, paddingLeft: "1.4em", margin: "8px 0 12px" }}>{children}</ol>,
      ul: ({ children }) => <ul style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: s, color: C.inkMid, lineHeight: 1.8, paddingLeft: "1.4em", margin: "8px 0 12px" }}>{children}</ul>,
      li: ({ children }) => <li style={{ marginBottom: 6 }}>{children}</li>,
      strong: ({ children }) => <strong style={{ color: C.accent, fontWeight: 600 }}>{children}</strong>,
      em: ({ children }) => <em style={{ color: C.inkMid, fontStyle: "italic" }}>{children}</em>,
    }}>{children}</ReactMarkdown>
  );
}

function Nav({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const navBg = scrolled ? C.bg : "transparent";
  const navBorder = scrolled ? `1px solid ${C.border}` : "none";
  const linkColor = (s) => scrolled ? (active === s ? C.accent : C.inkLight) : "rgba(255,255,255,0.82)";
  const linkBorder = (s) => scrolled && active === s ? `1px solid ${C.accent}` : "1px solid transparent";
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: navBg, backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease", borderBottom: navBorder }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }} onClick={() => scrollTo("home")}>
          <div style={{ width: 40, height: 40, borderRadius: "8px", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600 }}>ERI</span>
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, letterSpacing: "0.04em", color: scrolled ? C.ink : "white" }}>
            <span style={{ color: scrolled ? C.accent : C.accentLight }}>Evergreen</span> Resilience Institute
          </span>
        </div>
        <div style={{ display: "flex", gap: 32 }} className="desktop-nav">
          {SECTIONS.filter(s => s !== "home").map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{ background: "none", border: "none", fontFamily: "'Instrument Sans', sans-serif", fontSize: 20, color: linkColor(s), fontWeight: active === s ? 600 : 400, cursor: "pointer", textTransform: "capitalize", padding: "4px 0", borderBottom: linkBorder(s), transition: "all 0.2s" }}>{s}</button>
          ))}
        </div>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: scrolled ? C.accent : "white", fontSize: 24, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </div>
      {menuOpen && (
        <div style={{ background: C.surface, padding: "16px 48px 24px", display: "flex", flexDirection: "column", gap: 16, borderBottom: `1px solid ${C.border}` }}>
          {SECTIONS.filter(s => s !== "home").map(s => (
            <button key={s} onClick={() => { scrollTo(s); setMenuOpen(false); }} style={{ background: "none", border: "none", color: C.inkMid, fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, textTransform: "capitalize", cursor: "pointer", textAlign: "left", padding: "8px 0", borderBottom: `1px solid ${C.border}` }}>{s}</button>
          ))}
        </div>
      )}
      <style>{`@media(max-width:768px){.desktop-nav{display:none!important}.mobile-menu-btn{display:block!important}}`}</style>
    </nav>
  );
}

// Minimal nav for project pages
function ProjectNav() {
  const navigate = useNavigate();
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: C.bg, backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }} onClick={() => navigate("/")}>
          <div style={{ width: 40, height: 40, borderRadius: "8px", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600 }}>ERI</span>
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, letterSpacing: "0.04em", color: C.ink }}>
            <span style={{ color: C.accent }}>Evergreen</span> Resilience Institute
          </span>
        </div>
        <button onClick={() => navigate("/")} style={{ background: "none", border: `1px solid ${C.border}`, fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, color: C.inkMid, cursor: "pointer", padding: "8px 20px", letterSpacing: "0.05em" }}>
          ← All Projects
        </button>
      </div>
    </nav>
  );
}

function Sec({ id, children, bg = C.bg }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.08 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return (
    <section ref={ref} style={{ background: bg, borderTop: `1px solid ${C.border}` }}>
      <div id={id} style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(40px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}>
        {children}
      </div>
    </section>
  );
}

const SL = ({ text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
    <div style={{ height: 1, width: 32, background: C.accentLight }} />
    <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.accentLight }}>{text}</span>
  </div>
);

const ST = ({ accent, rest }) => (
  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: C.ink, lineHeight: 1.2, marginBottom: 40 }}>
    <span style={{ color: C.accent }}>{accent}</span> {rest}
  </h2>
);

function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 200); }, []);
  return (
    <section id="home" style={{ minHeight: "100vh", backgroundImage: "url('/images/conifers_in_the_mist.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,15,0.52)" }} />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 32px", maxWidth: 900, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)", transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)" }}>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>{ui.hero.badge}</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px,6vw,72px)", fontWeight: 400, color: "white", lineHeight: 1.1, marginBottom: 12 }}>
          <span style={{ color: C.accentLight }}>{ui.hero.h1AccentWord}</span> {ui.hero.h1Rest}
        </h1>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.82)", lineHeight: 1.7, margin: "0 auto 40px" }}>{ui.hero.descLine1}<br />{ui.hero.descLine2}</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("research")} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", background: C.accent, border: "none", color: "white", cursor: "pointer" }}>{ui.hero.btnPrimary}</button>
          <button onClick={() => scrollTo("contact")} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", background: "none", border: "1.5px solid rgba(255,255,255,0.45)", color: "white", cursor: "pointer" }}>{ui.hero.btnSecondary}</button>
        </div>
        {siteInfo.affiliations?.length > 0 && (
          <div style={{ marginTop: 56, display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
            {siteInfo.affiliations.map(a => <span key={a} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{a}</span>)}
          </div>
        )}
      </div>
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "float 2s ease-in-out infinite" }}>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: "'Instrument Sans', sans-serif" }}>Scroll</span>
        <div style={{ width: 1, height: 30, background: `linear-gradient(180deg, ${C.accentLight}, transparent)` }} />
      </div>
      <style>{`@keyframes float{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}`}</style>
    </section>
  );
}

function About() {
  return (
    <Sec id="about" bg={C.surface}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">
        <div>
          <SL text={ui.about.sectionLabel} />
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 0 }}>
            {about.values.map((v, i) => {
              const sizes = ["clamp(36px,4vw,54px)", "clamp(26px,3vw,38px)", "clamp(30px,3.5vw,46px)"];
              const colors = [C.accent, C.accentLight, C.accent];
              const weights = [700, 700, 700];
              const indents = [0, 28, 12];
              const parts = v.label.split("-");
              return (
                <div key={v.label} style={{ marginBottom: i < 2 ? 28 : 0, paddingLeft: indents[i] }}>
                  {parts.map((part, pi) => (
                    <p key={pi} style={{ fontFamily: "'Playfair Display', serif", fontSize: sizes[i], fontWeight: pi === 0 ? weights[i] : 400, color: pi === 0 ? colors[i] : C.ink, lineHeight: 1, margin: pi < parts.length - 1 ? "0 0 2px" : "0 0 10px" }}>{part}{pi < parts.length - 1 ? "-" : ""}</p>
                  ))}
                  <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, color: C.inkLight, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <MD>{about.paragraph1}</MD>
          <MD>{about.paragraph2}</MD>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
    </Sec>
  );
}

function Research() {
  return (
    <Sec id="research" bg={C.bg}>
      <SL text={ui.research.sectionLabel} />
      <ST accent={ui.research.headingAccent} rest={ui.research.headingRest} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="research-grid">
        {researchAreas.map((a, i) => (
          <div key={a.num} style={{ background: C.surface, padding: 36, borderTop: `3px solid ${i < 2 ? C.accent : C.accentLight}`, transition: "box-shadow 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 4px 24px rgba(45,106,79,0.08)`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.inkLight }}>{a.num}</span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: C.ink, margin: "12px 0 16px", lineHeight: 1.2 }}>{a.title}</h3>
            <MD size="small">{a.desc}</MD>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
              {a.tags.map(t => <span key={t} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, padding: "3px 10px", border: `1px solid ${C.accentLight}`, background: C.accentPale }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.research-grid{grid-template-columns:1fr!important}}`}</style>
    </Sec>
  );
}

const STATUS_COLORS = {
  "Active": { bg: C.accentPale, color: C.accent, border: C.accentLight },
  "In Development": { bg: "#FFF8E7", color: "#92580A", border: "#F0C060" },
};

function ProjectsSection() {
  return (
    <Sec id="projects" bg={C.surface}>
      <SL text="Our Projects" />
      <ST accent="Current" rest="research projects" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="projects-grid">
        {projects.map((p, i) => {
          const sc = STATUS_COLORS[p.status] || STATUS_COLORS["Active"];
          return (
            <Link key={p.slug} to={`/projects/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ background: C.bg, padding: 36, borderTop: `3px solid ${i < 2 ? C.accent : C.accentLight}`, height: "100%", boxSizing: "border-box", transition: "box-shadow 0.3s, transform 0.3s", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px rgba(45,106,79,0.12)`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.inkLight }}>{p.num}</span>
                  <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: sc.color, padding: "3px 10px", border: `1px solid ${sc.border}`, background: sc.bg }}>{p.status}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: C.ink, margin: "0 0 12px", lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: C.inkMid, lineHeight: 1.6, margin: "0 0 20px" }}>{p.tagline}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                  {p.tags.slice(0, 3).map(t => <span key={t} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, padding: "3px 10px", border: `1px solid ${C.accentLight}`, background: C.accentPale }}>{t}</span>)}
                </div>
                <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: C.accent, letterSpacing: "0.05em" }}>View Project →</span>
              </div>
            </Link>
          );
        })}
      </div>
      <style>{`@media(max-width:768px){.projects-grid{grid-template-columns:1fr!important}}`}</style>
    </Sec>
  );
}

function TeamSection() {
  return (
    <Sec id="team" bg={C.bg}>
      <SL text={ui.team.sectionLabel} />
      <ST accent={ui.team.headingAccent} rest={ui.team.headingRest} />
      <span onClick={() => scrollTo("publications")} style={{ display: "inline-block", fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "white", background: C.accent, cursor: "pointer", padding: "10px 20px", marginBottom: 40, letterSpacing: "0.05em" }}>{ui.team.pubsButton}</span>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="team-grid">
        {team.map(m => (
          <div key={m.name} style={{ background: C.surface, padding: 40, border: `1px solid ${C.border}` }}>
            {m.photo
              ? <img src={m.photo} alt={m.name} style={{ width: "100%", height: 320, borderRadius: 4, objectFit: m.name.includes("Juhi") ? "contain" : "cover", objectPosition: m.name.includes("Juhi") ? "center" : "center 20%", background: m.name.includes("Juhi") ? C.border : "transparent", marginBottom: 24 }} />
              : <div style={{ width: 64, height: 64, background: C.accentPale, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: C.accent }}>{m.initial}</div>
            }
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{m.name}</h3>
            <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentLight, marginBottom: 20 }}>{m.role}</p>
            <MD size="small">{m.bio}</MD>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "16px 0" }}>
              {m.expertise.map(e => <span key={e} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: C.inkLight, padding: "3px 10px", border: `1px solid ${C.border}` }}>{e}</span>)}
            </div>
            {m.links && (
              <div style={{ display: "flex", gap: 20 }}>
                {Object.entries(m.links).map(([k, v]) => (
                  <a key={k} href={v} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: C.accent, textDecoration: "none" }}>
                    {k === "scholar" ? "Scholar" : k === "github" ? "GitHub" : "ORCID"}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.team-grid{grid-template-columns:1fr!important}}`}</style>
      <div id="publications" style={{ marginTop: 80, paddingTop: 64, borderTop: `1px solid ${C.border}` }}>
        <SL text={ui.publications.sectionLabel} />
        <ST accent={ui.publications.headingAccent} rest={ui.publications.headingRest} />
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, color: C.inkLight, marginBottom: 48, maxWidth: 700 }}>
          {ui.publications.blurb}{" "}
          <a href={team[0]?.links?.scholar} target="_blank" rel="noopener noreferrer" style={{ color: C.accent, textDecoration: "none", borderBottom: `1px solid ${C.accentLight}` }}>Chandanpurkar</a>
          {" · "}
          <a href={team[1]?.links?.scholar} target="_blank" rel="noopener noreferrer" style={{ color: C.accent, textDecoration: "none", borderBottom: `1px solid ${C.accentLight}` }}>Huda</a>
        </p>
        {publications.map((p, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 24, padding: "20px 0", borderTop: `1px solid ${C.border}`, alignItems: "baseline" }}>
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, color: p.highlight ? C.accent : C.inkLight }}>{p.year}</span>
            <div>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, color: C.inkLight, marginBottom: 4 }}>{p.authors}</p>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: p.highlight ? 700 : 400, color: p.highlight ? C.ink : C.inkMid, lineHeight: 1.5, marginBottom: 4 }}>
                {p.doi ? <a href={p.doi} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>{p.title}</a> : p.title}
              </h4>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: p.highlight ? C.accent : C.inkLight, fontStyle: "italic", margin: 0 }}>
                {p.journal}
                {p.highlight && <span style={{ marginLeft: 8, fontSize: 10, fontStyle: "normal", letterSpacing: "0.1em", textTransform: "uppercase", background: C.accentPale, color: C.accent, padding: "2px 8px" }}>Featured</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ background: C.accent, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="contact-grid">
        <div>
          <SL text={ui.contact.sectionLabel} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: 24 }}>{ui.contact.heading}</h2>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>{ui.contact.blurb}</p>
        </div>
        <div>
          {contact.emails.map((e, i) => (
            <div key={e.label} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i < contact.emails.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>{e.label}</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "white", margin: 0 }}>{e.address}</p>
            </div>
          ))}
          <div style={{ display: "flex", gap: 24, marginTop: 8 }}>
            {contact.socialLinks.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2 }}>{s.label}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: C.ink, padding: "32px 48px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>© {new Date().getFullYear()} {siteInfo.name} · {siteInfo.location}</p>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", margin: 0 }}>{siteInfo.type} · {ui.footer.tagline}</p>
      </div>
      <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.2)", margin: 0, textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>An independent not-for-profit think tank registered under the Canada Not-for-profit Corporations Act · Established April 2026</p>
    </footer>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <div style={{ background: C.bg, minHeight: "100vh", paddingTop: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: C.ink }}>Project not found.</p>
        <button onClick={() => navigate("/")} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "white", background: C.accent, border: "none", cursor: "pointer", padding: "12px 28px" }}>← Back to ERI</button>
      </div>
    );
  }

  const sc = STATUS_COLORS[project.status] || STATUS_COLORS["Active"];
  const relatedPubs = (project.relatedPubs || []).map(i => publications[i]).filter(Boolean);

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.ink }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <ProjectNav />

      {/* Hero band */}
      <section style={{ background: C.ink, paddingTop: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 48px 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{project.num}</span>
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: sc.color, padding: "3px 10px", border: `1px solid ${sc.border}`, background: sc.bg }}>{project.status}</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,60px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: 20, maxWidth: 800 }}>{project.title}</h1>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: 680, marginBottom: 32 }}>{project.tagline}</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {project.tags.map(t => <span key={t} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentLight, padding: "3px 10px", border: `1px solid rgba(82,183,136,0.4)`, background: "rgba(82,183,136,0.08)" }}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 48px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 80, alignItems: "start" }} className="project-body-grid">

          {/* Description */}
          <div>
            <SL text="About This Project" />
            <div style={{ marginTop: 8 }}>
              <MD>{project.description}</MD>
            </div>

            {/* Related publications */}
            {relatedPubs.length > 0 && (
              <div style={{ marginTop: 56, paddingTop: 48, borderTop: `1px solid ${C.border}` }}>
                <SL text="Related Publications" />
                <div style={{ marginTop: 8 }}>
                  {relatedPubs.map((p, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20, padding: "16px 0", borderTop: `1px solid ${C.border}`, alignItems: "baseline" }}>
                      <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, color: C.accent }}>{p.year}</span>
                      <div>
                        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, color: C.inkLight, marginBottom: 4 }}>{p.authors}</p>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: C.ink, lineHeight: 1.5, marginBottom: 4 }}>
                          {p.doi ? <a href={p.doi} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>{p.title}</a> : p.title}
                        </h4>
                        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: C.accent, fontStyle: "italic", margin: 0 }}>{p.journal}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ background: C.surface, padding: 32, border: `1px solid ${C.border}`, marginBottom: 24 }}>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.inkLight, marginBottom: 16 }}>Project Leads</p>
              {project.leads.map(lead => (
                <p key={lead} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600, color: C.ink, margin: "0 0 8px" }}>{lead}</p>
              ))}
            </div>

            {project.outputs?.length > 0 && (
              <div style={{ background: C.surface, padding: 32, border: `1px solid ${C.border}`, marginBottom: 24 }}>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.inkLight, marginBottom: 16 }}>Outputs & Links</p>
                {project.outputs.map((o, i) => (
                  <a key={i} href={o.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, color: C.accent, textDecoration: "none", marginBottom: 10, borderBottom: `1px solid ${C.accentLight}`, paddingBottom: 2 }}>{o.label} →</a>
                ))}
              </div>
            )}

            <div style={{ background: C.accentPale, padding: 32, border: `1px solid ${C.accentLight}` }}>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.accent, marginBottom: 12 }}>Collaborate</p>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: C.inkMid, lineHeight: 1.6, marginBottom: 16 }}>Interested in contributing to this project? We welcome researchers, community partners, and funders.</p>
              <a href={`mailto:info@evergreenresilience.org`} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "white", background: C.accent, padding: "10px 20px", textDecoration: "none", display: "inline-block", letterSpacing: "0.05em" }}>Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <style>{`@media(max-width:768px){.project-body-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

function MainSite() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 }
    );
    SECTIONS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.ink }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav active={active} />
      <Hero /><About /><Research /><ProjectsSection /><TeamSection /><Contact /><Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}
