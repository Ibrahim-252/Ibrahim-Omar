"use client";
import { useEffect, useRef, useState } from "react";
import { WAButtonPrimary } from "@/components/WAButton";
import { useLang } from "@/components/LanguageSwitcher";
import { t } from "@/lib/i18n";

const CHANNELS = [
  { label: "Email",    value: "ibo.haji50@gmail.com",       href: "mailto:ibo.haji50@gmail.com",            icon: "✉" },
  { label: "LinkedIn", value: "linkedin.com/in/ibrahimdev",  href: "https://www.linkedin.com/in/ibrahimdev/", icon: "in" },
  { label: "X",        value: "@Ibra_Omar101",               href: "https://x.com/Ibra_Omar101",             icon: "𝕏" },
];

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

export default function Contact() {
  const { ref, v } = useVisible();
  const { lang } = useLang();
  const tx = t[lang];
  const [h1, h2] = tx.contact_h2.split("\n");

  const steps = [
    { n: "01", t: tx.step1_t, d: tx.step1_d },
    { n: "02", t: tx.step2_t, d: tx.step2_d },
    { n: "03", t: tx.step3_t, d: tx.step3_d },
    { n: "04", t: tx.step4_t, d: tx.step4_d },
  ];

  return (
    <section id="contact" style={{ padding: "112px 32px", background: "var(--text)", borderTop: "1px solid #2a2824" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }} ref={ref}>
        <div style={{ opacity: v?1:0, transform: v?"translateY(0)":"translateY(16px)", transition: "all 0.65s ease" }}>

          {/* Header */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "14px" }}>
              {tx.contact_label}
            </div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#fff" }}>
              {h1}<br /><span style={{ color: "var(--accent-warm)" }}>{h2}</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="contact-grid">
            {/* LEFT */}
            <div>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "400px" }}>
                {tx.contact_sub}
              </p>

              {/* WhatsApp — primary */}
              <WAButtonPrimary label={tx.contact_wa} />
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", marginBottom: "40px", marginLeft: "4px" }}>
                Typically replies within a few hours
              </div>

              {/* Secondary */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {CHANNELS.map(c => (
                  <a key={c.label} href={c.href} target={c.href.startsWith("mailto")?undefined:"_blank"} rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    padding: "13px 16px",
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px", textDecoration: "none", maxWidth: "360px", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >
                    <div style={{
                      width: "30px", height: "30px", background: "rgba(255,255,255,0.08)",
                      borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: 700, flexShrink: 0,
                    }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginBottom: "1px" }}>{c.label}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{c.value}</div>
                    </div>
                    <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.25)", fontSize: "11px" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — Process */}
            <div style={{
              padding: "36px", background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px",
            }}>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px" }}>
                What happens next
              </div>
              {steps.map((step, i) => (
                <div key={step.n} style={{
                  display: "flex", gap: "18px",
                  paddingBottom: i < steps.length-1 ? "20px" : "0",
                  marginBottom: i < steps.length-1 ? "20px" : "0",
                  borderBottom: i < steps.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <div style={{ fontSize: "11px", color: "var(--accent-warm)", fontWeight: 600, flexShrink: 0, marginTop: "2px", minWidth: "20px" }}>
                    {step.n}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>{step.t}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: "72px", paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px",
          }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>{tx.footer}</span>
            <div style={{ display: "flex", gap: "24px" }}>
              {[
                { l: "GitHub",   h: "https://github.com/Ibrahim-252" },
                { l: "LinkedIn", h: "https://www.linkedin.com/in/ibrahimdev/" },
                { l: "X",        h: "https://x.com/Ibra_Omar101" },
              ].map(lk => (
                <a key={lk.l} href={lk.h} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "12px", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
                >{lk.l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
