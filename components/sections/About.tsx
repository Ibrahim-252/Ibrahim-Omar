"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WAInlineLink } from "@/components/WAButton";
import { useLang } from "@/components/LanguageSwitcher";
import { t } from "@/lib/i18n";

function useVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setV(true), { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}

export default function About() {
  const { ref, v } = useVisible();
  const { lang } = useLang();
  const tx = t[lang];
  const [h1, h2] = tx.about_h2.split("\n");

  return (
    <section id="about" style={{ padding: "112px 32px", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }} ref={ref}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 320px", gap: "80px", alignItems: "start",
          opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(16px)", transition: "all 0.65s ease",
        }} className="about-grid">

          {/* LEFT */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "10px" }}>
              {tx.about_label}
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "28px" }}>
              {h1}<br /><span style={{ color: "var(--accent-blue)" }}>{h2}</span>
            </h2>

            <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "16px", maxWidth: "560px" }}>
              {tx.about_p1}
            </p>
            <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "32px", maxWidth: "560px" }}>
              {tx.about_p2}
            </p>

            {/* Industries — compact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "36px" }}>
              {tx.about_industries.map((item: string) => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: "var(--accent-warm)", fontSize: "6px", flexShrink: 0 }}>◆</span>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>

            <WAInlineLink label={tx.about_cta} />
          </div>

          {/* RIGHT — Photo + info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "3/4", position: "relative", background: "var(--surface)", boxShadow: "0 12px 40px rgba(20,18,16,0.09)" }}>
              <Image src="/ibrahim.png" alt="Ibrahim Omar" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            {[
              { label: "Based in", value: "Istanbul, Türkiye" },
              { label: "Stack",    value: "Next.js · TypeScript · Supabase · MongoDB · AI Systems" },
              { label: "Status",   value: "● Open to projects", green: true },
            ].map(c => (
              <div key={c.label} style={{
                padding: "12px 16px", background: "var(--off-white)",
                border: "1px solid var(--border)", borderRadius: "8px",
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px",
              }}>
                <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500, flexShrink: 0 }}>{c.label}</span>
                <span style={{ fontSize: "12px", color: c.green ? "var(--green)" : "var(--text)", fontWeight: 500, textAlign: "right" }}>{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
