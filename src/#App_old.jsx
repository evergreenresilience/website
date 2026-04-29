// ============================================================
// EVERGREEN RESILIENCE INSTITUTE — SITE COMPONENT
// ============================================================
// This file controls the DESIGN. You should rarely edit it.
// All content comes from data.js — edit that file instead.
// ============================================================

import { useState, useEffect, useRef } from "react";
import {
  siteInfo,
  about,
  researchAreas,
  projects,
  team,
  publications,
  contact,
} from "./data.js";

const SECTIONS = [
  "home",
  "about",
  "research",
  "projects",
  "team",
  "publications",
  "contact",
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// --- NAV ---
function Nav({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(15,25,20,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.4s ease",
        borderBottom: scrolled
          ? "1px solid rgba(120,180,140,0.15)"
          : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 20,
            color: "#A8D5BA",
            cursor: "pointer",
          }}
          onClick={() => scrollTo("home")}
        >
          <span style={{ color: "#E8F5E9" }}>
            {siteInfo.name.split(" ")[0]}
          </span>{" "}
          <span style={{ fontWeight: 300, color: "#78B48A" }}>
            {siteInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </div>
        <div style={{ display: "flex", gap: 28 }} className="desktop-nav">
          {SECTIONS.filter((s) => s !== "home").map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              style={{
                background: "none",
                border: "none",
                color:
                  active === s ? "#A8D5BA" : "rgba(232,245,233,0.6)",
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                padding: "4px 0",
                borderBottom:
                  active === s
                    ? "1px solid #A8D5BA"
                    : "1px solid transparent",
                transition: "all 0.3s",
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#A8D5BA",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div
          style={{
            background: "rgba(15,25,20,0.98)",
            padding: "16px 32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {SECTIONS.filter((s) => s !== "home").map((s) => (
            <button
              key={s}
              onClick={() => {
                scrollTo(s);
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                color: "rgba(232,245,233,0.8)",
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                cursor: "pointer",
                textAlign: "left",
                padding: "8px 0",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

// --- SCROLL SECTION WRAPPER ---
function Section({ id, children, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      style={{
        padding: "120px 32px",
        maxWidth: 1100,
        margin: "0 auto",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

const SL = ({ text }) => (
  <p
    style={{
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontSize: 11,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      color: "#78B48A",
      marginBottom: 16,
    }}
  >
    {text}
  </p>
);
const ST = ({ children }) => (
  <h2
    style={{
      fontFamily: "'DM Serif Display', Georgia, serif",
      fontSize: "clamp(28px,4vw,44px)",
      fontWeight: 400,
      color: "#E8F5E9",
      lineHeight: 1.2,
      marginBottom: 32,
    }}
  >
    {children}
  </h2>
);

// --- HERO ---
function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    setTimeout(() => setVis(true), 200);
  }, []);
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(30,80,50,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(20,60,80,0.3) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(40,90,60,0.2) 0%, transparent 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2378B48A' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 32px",
          maxWidth: 900,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(30px)",
          transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, #78B48A, transparent)",
            margin: "0 auto 32px",
          }}
        />
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: 12,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#78B48A",
            marginBottom: 24,
          }}
        >
          {siteInfo.type} · {siteInfo.location}
        </p>
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(36px,6vw,72px)",
            fontWeight: 400,
            color: "#E8F5E9",
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          {siteInfo.name.split(" ")[0]}
          <br />
          <span style={{ color: "#78B48A" }}>
            {siteInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: 14,
            letterSpacing: "0.12em",
            color: "rgba(232,245,233,0.45)",
            marginBottom: 28,
            textTransform: "uppercase",
          }}
        >
          {siteInfo.tagline}
        </p>
        <p
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "clamp(16px,2vw,21px)",
            color: "rgba(232,245,233,0.7)",
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto 40px",
          }}
        >
          {siteInfo.description}
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollTo("research")}
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 32px",
              background: "rgba(120,180,138,0.15)",
              border: "1px solid rgba(120,180,138,0.4)",
              color: "#A8D5BA",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Our Research
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 32px",
              background: "none",
              border: "1px solid rgba(232,245,233,0.2)",
              color: "rgba(232,245,233,0.7)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Collaborate
          </button>
        </div>
        <div
          style={{
            marginTop: 64,
            display: "flex",
            gap: 32,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: 0.5,
          }}
        >
          {siteInfo.affiliations.map((a) => (
            <span
              key={a}
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(232,245,233,0.5)",
              }}
            >
              {a}
            </span>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(232,245,233,0.3)",
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 30,
            background:
              "linear-gradient(180deg, rgba(120,180,138,0.5), transparent)",
          }}
        />
      </div>
      <style>{`@keyframes float { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }`}</style>
    </section>
  );
}

// --- ABOUT ---
function About() {
  return (
    <Section id="about">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
        className="about-grid"
      >
        <div>
          <SL text="About Us" />
          <ST>
            Independent science for a{" "}
            <span style={{ color: "#78B48A" }}>resilient world</span>
          </ST>
        </div>
        <div>
          <p
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: 17,
              color: "rgba(232,245,233,0.75)",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            {about.paragraph1}
          </p>
          <p
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: 17,
              color: "rgba(232,245,233,0.75)",
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            {about.paragraph2}
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {about.values.map((v) => (
              <div key={v.label} style={{ flex: "1 1 140px" }}>
                <p
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#A8D5BA",
                    marginBottom: 4,
                  }}
                >
                  {v.label}
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: 12,
                    color: "rgba(232,245,233,0.5)",
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </Section>
  );
}

// --- RESEARCH ---
function Research() {
  return (
    <Section id="research">
      <SL text="Research Focus" />
      <ST>
        {siteInfo.tagline.split(" ").slice(0, 3).join(" ")}{" "}
        <span style={{ color: "#78B48A" }}>
          {siteInfo.tagline.split(" ").slice(3).join(" ")}
        </span>
      </ST>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 24,
          marginTop: 48,
        }}
        className="research-grid"
      >
        {researchAreas.map((a) => (
          <div
            key={a.num}
            style={{
              padding: 36,
              background: "rgba(120,180,138,0.04)",
              border: "1px solid rgba(120,180,138,0.1)",
              transition: "all 0.4s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(120,180,138,0.08)";
              e.currentTarget.style.borderColor = "rgba(120,180,138,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(120,180,138,0.04)";
              e.currentTarget.style.borderColor = "rgba(120,180,138,0.1)";
            }}
          >
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                color: "#78B48A",
                opacity: 0.6,
              }}
            >
              {a.num}
            </span>
            <h3
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 22,
                color: "#E8F5E9",
                fontWeight: 400,
                margin: "12px 0 16px",
              }}
            >
              {a.title}
            </h3>
            <p
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: 15,
                color: "rgba(232,245,233,0.6)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              {a.desc}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {a.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(168,213,186,0.6)",
                    padding: "4px 10px",
                    border: "1px solid rgba(120,180,138,0.15)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 768px) { .research-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

// --- PROJECTS ---
function Projects() {
  const statusColor = {
    Active: "#78B48A",
    Community: "#C4A265",
    Upcoming: "#5A9ECF",
  };
  return (
    <Section id="projects">
      <SL text="Projects" />
      <ST>
        Science in <span style={{ color: "#78B48A" }}>action</span>
      </ST>
      <div style={{ marginTop: 48 }}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 32,
              padding: "36px 0",
              borderTop: "1px solid rgba(120,180,138,0.1)",
              alignItems: "start",
            }}
            className="project-row"
          >
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: statusColor[p.status] || "#78B48A",
              }}
            >
              ● {p.status}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 24,
                  color: "#E8F5E9",
                  fontWeight: 400,
                  marginBottom: 12,
                }}
              >
                {p.title}
              </h3>
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    borderRadius: 4,
                    marginBottom: 16,
                    border: "1px solid rgba(120,180,138,0.1)",
                  }}
                />
              )}
              <p
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: 15,
                  color: "rgba(232,245,233,0.6)",
                  lineHeight: 1.7,
                  marginBottom: 16,
                  maxWidth: 700,
                }}
              >
                {p.desc}
              </p>
              <a
                href={p.link}
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 13,
                  color: "#A8D5BA",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(168,213,186,0.3)",
                  paddingBottom: 2,
                }}
              >
                {p.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 768px) { .project-row { grid-template-columns: 1fr !important; gap: 12px !important; } }`}</style>
    </Section>
  );
}

// --- TEAM ---
function TeamSection() {
  return (
    <Section id="team">
      <SL text="Our Team" />
      <ST>
        Researchers building{" "}
        <span style={{ color: "#78B48A" }}>resilience</span>
      </ST>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          marginTop: 48,
        }}
        className="team-grid"
      >
        {team.map((m) => (
          <div
            key={m.name}
            style={{
              padding: 36,
              background: "rgba(120,180,138,0.04)",
              border: "1px solid rgba(120,180,138,0.1)",
            }}
          >
            {m.photo ? (
              <img
                src={m.photo}
                alt={m.name}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 20,
                }}
              />
            ) : (
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(120,180,138,0.3), rgba(30,80,50,0.5))",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 28,
                  color: "#78B48A",
                }}
              >
                {m.initial}
              </div>
            )}
            <h3
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 22,
                color: "#E8F5E9",
                fontWeight: 400,
                marginBottom: 4,
              }}
            >
              {m.name}
            </h3>
            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#78B48A",
                marginBottom: 16,
              }}
            >
              {m.role}
            </p>
            <p
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: 14,
                color: "rgba(232,245,233,0.6)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              {m.bio}
            </p>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 16,
              }}
            >
              {m.expertise.map((e) => (
                <span
                  key={e}
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(168,213,186,0.6)",
                    padding: "4px 10px",
                    border: "1px solid rgba(120,180,138,0.15)",
                  }}
                >
                  {e}
                </span>
              ))}
            </div>
            {m.links && (
              <div style={{ display: "flex", gap: 16 }}>
                {Object.entries(m.links).map(([k, v]) => (
                  <a
                    key={k}
                    href={v}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(168,213,186,0.5)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(168,213,186,0.2)",
                      paddingBottom: 2,
                    }}
                  >
                    {k === "scholar"
                      ? "Scholar"
                      : k === "github"
                      ? "GitHub"
                      : k.toUpperCase()}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 768px) { .team-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

// --- PUBLICATIONS ---
function Pubs() {
  return (
    <Section id="publications">
      <SL text="Selected Publications" />
      <ST>
        Peer-reviewed <span style={{ color: "#78B48A" }}>research</span>
      </ST>
      <p
        style={{
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontSize: 16,
          color: "rgba(232,245,233,0.5)",
          marginBottom: 48,
          maxWidth: 700,
        }}
      >
        Selected from 40+ combined publications. Full lists on Google Scholar:{" "}
        <a
          href={team[0]?.links?.scholar}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#A8D5BA",
            borderBottom: "1px solid rgba(168,213,186,0.3)",
            textDecoration: "none",
          }}
        >
          Chandanpurkar
        </a>
        {" · "}
        <a
          href={team[1]?.links?.scholar}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#A8D5BA",
            borderBottom: "1px solid rgba(168,213,186,0.3)",
            textDecoration: "none",
          }}
        >
          Huda
        </a>
      </p>
      {publications.map((p, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "56px 1fr",
            gap: 24,
            padding: "20px 0",
            borderTop: "1px solid rgba(120,180,138,0.08)",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
              color: p.highlight
                ? "#78B48A"
                : "rgba(120,180,138,0.5)",
            }}
          >
            {p.year}
          </span>
          <div>
            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 12,
                color: "rgba(232,245,233,0.35)",
                marginBottom: 4,
              }}
            >
              {p.authors}
            </p>
            <h4
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
                marginBottom: 4,
                color: p.highlight
                  ? "#E8F5E9"
                  : "rgba(232,245,233,0.8)",
              }}
            >
              {p.doi ? (
                <a
                  href={p.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h4>
            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 13,
                color: p.highlight
                  ? "#78B48A"
                  : "rgba(232,245,233,0.4)",
                fontStyle: "italic",
              }}
            >
              {p.journal}
              {p.highlight && (
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: 10,
                    fontStyle: "normal",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "2px 8px",
                    border: "1px solid rgba(120,180,138,0.3)",
                    verticalAlign: "middle",
                  }}
                >
                  Featured
                </span>
              )}
            </p>
          </div>
        </div>
      ))}
    </Section>
  );
}

// --- CONTACT ---
function Contact() {
  return (
    <Section id="contact">
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
        <SL text="Get in Touch" />
        <ST>
          <span style={{ color: "#78B48A" }}>Collaborate</span> with us
        </ST>
        <p
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: 17,
            color: "rgba(232,245,233,0.6)",
            lineHeight: 1.8,
            marginBottom: 48,
          }}
        >
          We welcome collaborations with researchers, communities, funding
          agencies, and organizations working on climate resilience, water
          systems, and food security.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
          }}
        >
          {contact.emails.map((e) => (
            <div key={e.label}>
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#78B48A",
                  marginBottom: 8,
                }}
              >
                {e.label}
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: 18,
                  color: "#E8F5E9",
                }}
              >
                {e.address}
              </p>
            </div>
          ))}
          <div style={{ marginTop: 24, display: "flex", gap: 24 }}>
            {contact.socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(168,213,186,0.5)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(168,213,186,0.2)",
                  paddingBottom: 2,
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer
      style={{
        padding: "48px 32px",
        textAlign: "center",
        borderTop: "1px solid rgba(120,180,138,0.08)",
      }}
    >
      <p
        style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: 12,
          color: "rgba(232,245,233,0.3)",
        }}
      >
        © {new Date().getFullYear()} {siteInfo.name} · {siteInfo.location}
      </p>
      <p
        style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: 11,
          color: "rgba(232,245,233,0.2)",
          marginTop: 8,
        }}
      >
        {siteInfo.type} · Open Science for Climate Resilience
      </p>
    </footer>
  );
}

// --- APP ---
export default function App() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      style={{
        background: "#0A1A10",
        minHeight: "100vh",
        color: "#E8F5E9",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <Nav active={active} />
      <Hero />
      <About />
      <Research />
      <Projects />
      <TeamSection />
      <Pubs />
      <Contact />
      <Footer />
    </div>
  );
}
