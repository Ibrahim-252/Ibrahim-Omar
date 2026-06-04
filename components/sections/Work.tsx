"use client";
import { useEffect, useRef, useState } from "react";
import { WAInlineLink } from "@/components/WAButton";
import { useLang } from "@/components/LanguageSwitcher";
import { t } from "@/lib/i18n";

const PROJECTS = [
  {
    id: "01",
    name: "IRID Institute",
    category: "Research & Policy Organization",
    sector: "Research",
    outcome: "A national research platform publishing policy reports and connecting Somalia's research community — production-ready and live.",
    highlights: ["Publication management with clean PDF delivery", "Institutional editorial design", "Deployed and maintained in production"],
    stack: ["Next.js", "Supabase", "TypeScript", "Vercel"],
    status: "live" as const,
    link: "https://www.iridinstitute.so/",
    github: null,
  },
  {
    id: "02",
    name: "Bosaso Municipality",
    category: "Government Digital Platform",
    sector: "Government",
    outcome: "An official city platform serving citizens, businesses, and visitors — bilingual, accessible, and built for public trust.",
    highlights: ["Bilingual portal (Somali + English)", "News & civic announcement system", "Admin panel for municipal staff"],
    stack: ["Next.js 15", "Supabase", "Tailwind CSS", "shadcn/ui"],
    status: "building" as const,
    link: null,
    github: null,
  },
  {
    id: "03",
    name: "University of Bosaso",
    category: "Higher Education Institution",
    sector: "Education",
    outcome: "A complete institutional web presence covering academics, admissions, research, and student services for one of Somalia's established universities.",
    highlights: ["7 faculty pages with full program listings", "Admissions & E-Campus portal", "Mobile-first, fast-loading"],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    status: "building" as const,
    link: "https://uob-peach.vercel.app/",
    note: "Frontend complete — content integration ongoing",
    github: null,
  },
  {
    id: "04",
    name: "Prime Form",
    category: "Executive Health Coaching Platform",
    sector: "Business",
    outcome: "A premium digital platform for a health coaching practice targeting corporate executives — with integrated booking and a client portal.",
    highlights: ["Premium design system for high-end positioning", "Calendly booking integration", "Client management portal"],
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    status: "building" as const,
    link: "https://prime-form-ruby.vercel.app/",
    github: null,
  },
];

const STATUS_MAP = {
  live:     { label: "Live",     color: "#2d6a4f", bg: "rgba(45,106,79,0.08)",  dot: "#2d6a4f" },
  building: { label: "Building", color: "#c8620a", bg: "rgba(200,98,10,0.08)",  dot: "#c8620a" },
  research: { label: "Research", color: "#1e3a5f", bg: "rgba(30,58,95,0.08)",   dot: "#1e3a5f" },
};

function useVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setV(true), { threshold: 0.05 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}

export default function Work() {
  const { ref, v } = useVisible();
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="work" style={{ padding: "112px 32px", background: "var(--white)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }} ref={ref}>
        <div style={{ marginBottom: "64px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "10px" }}>
              {tx.work_label}
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {tx.work_h2}
            </h2>
          </div>
          <a href="https://wa.me/905526684817?text=Hello%20Ibrahim%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" style={{
            fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none",
            borderBottom: "1px solid var(--border-dark)", paddingBottom: "2px", transition: "color 0.2s",
            display: "inline-flex", alignItems: "center", gap: "6px",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
          >{tx.work_cta}</a>
        </div>

        <div>
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} visible={v} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project: p, index, visible, defaultOpen }: {
  project: typeof PROJECTS[0]; index: number; visible: boolean; defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const st = STATUS_MAP[p.status];

  return (
    <div style={{
      borderTop: "1px solid var(--border)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: `all 0.5s ease ${index * 0.08}s`,
    }}>
      {/* Header row */}
      <div onClick={() => setOpen(!open)} style={{
        display: "grid", gridTemplateColumns: "40px 1fr auto 36px",
        gap: "20px", alignItems: "center",
        padding: "24px 0", cursor: "pointer", userSelect: "none",
      }} className="proj-row">
        <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600 }}>{p.id}</span>
        <div>
          <div style={{ fontSize: "19px", fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: "3px" }}>
            {p.name}
          </div>
          <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{p.category}</div>
        </div>
        <div style={{
          padding: "4px 12px", borderRadius: "100px", fontSize: "11px",
          fontWeight: 600, color: st.color, background: st.bg, whiteSpace: "nowrap",
          display: "flex", alignItems: "center", gap: "5px",
        }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: st.dot, display: "inline-block" }} />
          {st.label}
        </div>
        <div style={{
          width: "36px", height: "36px", border: "1px solid var(--border)",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--text-muted)", fontSize: "13px", transition: "all 0.25s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0,
        }}>↓</div>
      </div>

      {/* Expanded */}
      {open && (
        <div style={{ paddingBottom: "36px", paddingLeft: "60px", animation: "fadeIn 0.25s ease" }} className="proj-detail">
          {/* Outcome — prominent */}
          <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "24px", fontStyle: "italic" }}>
            &ldquo;{p.outcome}&rdquo;
          </p>

          {/* Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
            {p.highlights.map(h => (
              <div key={h} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent-warm)", fontSize: "6px", marginTop: "7px", flexShrink: 0 }}>◆</span>
                <span style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{h}</span>
              </div>
            ))}
          </div>

          {/* Note */}
          {"note" in p && p.note && (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "4px 12px", background: "rgba(200,98,10,0.06)",
              border: "1px solid rgba(200,98,10,0.15)", borderRadius: "4px",
              fontSize: "11px", color: "var(--orange)", marginBottom: "24px",
            }}>◐ {p.note}</div>
          )}

          {/* Stack */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "24px" }}>
            {p.stack.map(tag => (
              <span key={tag} style={{
                padding: "4px 11px", background: "var(--surface)",
                border: "1px solid var(--border)", borderRadius: "4px",
                fontSize: "11px", color: "var(--text-secondary)", fontWeight: 500,
              }}>{tag}</span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                padding: "9px 18px", background: "var(--text)", color: "#fff",
                borderRadius: "6px", textDecoration: "none", fontSize: "13px",
                fontWeight: 500, transition: "opacity 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >View Live ↗</a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                padding: "9px 18px", background: "transparent", color: "var(--text)",
                border: "1px solid var(--border-dark)", borderRadius: "6px",
                textDecoration: "none", fontSize: "13px", fontWeight: 500, transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--text)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-dark)"; }}
              >View on GitHub</a>
            )}
            <a href="https://wa.me/905526684817?text=Hello%20Ibrahim%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" style={{
              padding: "9px 18px", background: "transparent", color: "var(--text-muted)",
              border: "1px solid var(--border)", borderRadius: "6px",
              textDecoration: "none", fontSize: "13px", fontWeight: 500, transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-dark)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
            >Discuss Similar Project</a>
          </div>
        </div>
      )}

      <style>{`
        .proj-row:hover > div:last-child { border-color: var(--text); color: var(--text); }
        @media (max-width: 640px) {
          .proj-row { grid-template-columns: 1fr auto !important; gap: 12px !important; }
          .proj-row > span:first-child { display: none; }
          .proj-detail { padding-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}
