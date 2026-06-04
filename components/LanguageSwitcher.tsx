"use client";
import { createContext, useContext, useState } from "react";

type Lang = "en" | "so";
const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} });
export const useLang = () => useContext(LangContext);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px", padding: "4px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "6px" }}>
      {(["en", "so"] as Lang[]).map((l) => (
        <button key={l} onClick={() => setLang(l)} style={{
          padding: "4px 10px", borderRadius: "4px", border: "none", cursor: "pointer",
          fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
          background: lang === l ? "var(--text)" : "transparent",
          color: lang === l ? "#fff" : "var(--text-muted)",
          transition: "all 0.15s",
        }}>{l}</button>
      ))}
    </div>
  );
}
