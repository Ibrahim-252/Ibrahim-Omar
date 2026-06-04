"use client";
import { useState, useEffect } from "react";
import { LangSwitcher, useLang } from "./LanguageSwitcher";
import { WANavButton } from "./WAButton";
import { WA_HREF } from "./WAButton";
import { t } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const tx = t[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: tx.nav.work,     href: "#work" },
    { label: tx.nav.services, href: "#services" },
    { label: tx.nav.about,    href: "#about" },
    { label: tx.nav.contact,  href: "#contact" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1120px", margin: "0 auto", padding: "0 32px",
        height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>
            Ibrahim Omar
          </span>
        </a>

        {/* Desktop */}
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }} className="desk-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: "13px", fontWeight: 500, color: "var(--text-secondary)",
              textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >{l.label}</a>
          ))}
          <LangSwitcher />
          <WANavButton label={tx.nav_cta} />
        </nav>

        {/* Mobile */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }} className="mob-right">
          <LangSwitcher />
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "22px" }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  height: "1.5px", background: "var(--text)", display: "block", borderRadius: "2px", transition: "all 0.3s",
                  transform: menuOpen ? (i===0?"rotate(45deg) translateY(6.5px)":i===2?"rotate(-45deg) translateY(-6.5px)":"scaleX(0)"):"none",
                }} />
              ))}
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "16px 32px 24px" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "12px 0", fontSize: "15px",
              color: "var(--text-secondary)", textDecoration: "none", borderBottom: "1px solid var(--border)",
            }}>{l.label}</a>
          ))}
          <div style={{ marginTop: "16px" }}>
            <WANavButton label={tx.nav_cta} />
          </div>
        </div>
      )}

      <style>{`
        .desk-nav { display: flex !important; }
        .mob-right { display: none !important; }
        @media (max-width: 768px) { .desk-nav { display: none !important; } .mob-right { display: flex !important; } }
      `}</style>
    </header>
  );
}
