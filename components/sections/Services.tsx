"use client";
import { useEffect, useRef, useState } from "react";
import { WAButtonOutline } from "@/components/WAButton";
import { useLang } from "@/components/LanguageSwitcher";
import { t } from "@/lib/i18n";

const SERVICES = [
  { n: "01", title: "Corporate Websites",                  desc: "Professional web presence that builds credibility and converts visitors into clients.",         for: "Companies · Trading firms · Consultancies" },
  { n: "02", title: "Business Platforms",                  desc: "Booking systems, client portals, and custom tools that automate operations and scale with you.", for: "Startups · Service businesses · SaaS products" },
  { n: "03", title: "Government & Institutional Portals",  desc: "Secure, bilingual platforms built for public trust, accessibility, and administrative clarity.", for: "Municipalities · Ministries · Universities · NGOs" },
  { n: "04", title: "Custom Digital Systems",              desc: "Bespoke software and infrastructure tailored to your exact operational requirements.",          for: "Organizations with unique workflows" },
];

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

export default function Services() {
  const { ref, v } = useVisible();
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="services" style={{ padding: "112px 32px", background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }} ref={ref}>
        <div style={{ marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "10px" }}>
            {tx.services_label}
          </div>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            {tx.services_h2}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="svc-grid">
          {SERVICES.map((s, i) => (
            <div key={s.n} style={{
              padding: "36px 32px",
              background: "var(--white)", border: "1px solid var(--border)", borderRadius: "12px",
              opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(16px)",
              transition: `all 0.55s ease ${i * 0.08}s`, cursor: "default",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(20,18,16,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, marginBottom: "14px", letterSpacing: "0.06em" }}>{s.n}</div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "12px", lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>{s.desc}</p>
              <div style={{ fontSize: "12px", color: "var(--text-muted)", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
                <span style={{ fontWeight: 600 }}>For: </span>{s.for}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: "32px", padding: "36px 40px",
          background: "var(--text)", borderRadius: "12px",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", flexWrap: "wrap",
        }}>
          <div>
            <div style={{ fontSize: "18px", fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>{tx.cta_h}</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>{tx.cta_sub}</div>
          </div>
          <WAButtonOutline label={tx.cta_btn} dark />
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .svc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
