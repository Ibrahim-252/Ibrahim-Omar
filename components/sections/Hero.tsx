"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/components/LanguageSwitcher";
import { WAButtonOutline } from "@/components/WAButton";
import { t } from "@/lib/i18n";

const SECTORS = [
  { label: "Government", icon: "🏛️" },
  { label: "Education",  icon: "🎓" },
  { label: "Research",   icon: "🔬" },
  { label: "Business",   icon: "💼" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const tx = t[lang];
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  return (
    <section style={{
      minHeight: "100vh", background: "var(--off-white)",
      display: "flex", alignItems: "center", paddingTop: "64px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 75% 25%, rgba(200,169,110,0.07) 0%, transparent 55%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "80px 32px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "80px", alignItems: "center" }} className="hero-grid">

          {/* LEFT */}
          <div style={{ opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(20px)", transition: "all 0.7s ease" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "5px 14px", background: "rgba(45,106,79,0.08)",
              border: "1px solid rgba(45,106,79,0.18)", borderRadius: "100px", marginBottom: "36px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 6px rgba(45,106,79,0.4)" }} />
              <span style={{ fontSize: "12px", color: "var(--green)", fontWeight: 500 }}>{tx.hero_available}</span>
            </div>

            <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>
              {tx.hero_label}
            </div>

            <h1 style={{ fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 600, lineHeight: 1.06, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "24px" }}>
              {tx.hero_h1_1}<br />
              <span style={{ color: "var(--accent-blue)" }}>{tx.hero_h1_2}</span><br />
              {tx.hero_h1_3}
            </h1>

            <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "480px", marginBottom: "40px" }}>
              {tx.hero_sub}
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "56px" }}>
              <a href="#work" style={{
                padding: "13px 26px", background: "var(--text)", color: "#fff",
                borderRadius: "7px", textDecoration: "none", fontSize: "14px", fontWeight: 500,
                display: "inline-flex", alignItems: "center", gap: "8px", transition: "opacity 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity="0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity="1")}
              >{tx.hero_cta1} <span>↓</span></a>
              <WAButtonOutline label={tx.hero_cta2} />
            </div>

            <div style={{ display: "flex", gap: "36px", paddingTop: "32px", borderTop: "1px solid var(--border)" }} className="stats-row">
              {[
                { n: tx.stat1_n, l: tx.stat1_l },
                { n: tx.stat2_n, l: tx.stat2_l },
                { n: tx.stat3_n, l: tx.stat3_l },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontSize: "26px", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>{s.n}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "3px", fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(20px)", transition: "all 0.7s ease 0.2s", position: "relative" }} className="hero-photo">
            <div style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4/5", background: "var(--surface)", position: "relative", boxShadow: "0 24px 64px rgba(20,18,16,0.12)" }}>
              <Image src="/ibrahim.png" alt="Ibrahim Omar" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(transparent, rgba(20,18,16,0.3))" }} />
              <div style={{
                position: "absolute", bottom: "18px", left: "18px", right: "18px",
                background: "rgba(255,255,255,0.93)", backdropFilter: "blur(12px)",
                borderRadius: "10px", padding: "13px 16px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)" }}>Ibrahim M. Omar</div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>Software Engineer · Istanbul, TR</div>
                </div>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px rgba(45,106,79,0.5)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* SECTORS */}
        <div style={{ marginTop: "64px", paddingTop: "40px", borderTop: "1px solid var(--border)", opacity: visible?1:0, transition: "all 0.7s ease 0.4s" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>
            {tx.sectors_label}
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {SECTORS.map(s => (
              <div key={s.label} style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "10px 20px", background: "var(--white)",
                border: "1px solid var(--border)", borderRadius: "8px",
                fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)",
              }}>
                <span>{s.icon}</span> {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-photo { display: none !important; }
          .stats-row { gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
