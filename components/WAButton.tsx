"use client";

// Official WhatsApp SVG icon
export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export const WA_HREF = "https://wa.me/905526684817?text=Hello%20Ibrahim%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20project.";

// Primary large WhatsApp CTA (used in Contact section)
export function WAButtonPrimary({ label = "WhatsApp Me" }: { label?: string }) {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "12px",
        padding: "16px 24px",
        background: "#25D366", color: "#fff",
        borderRadius: "10px", textDecoration: "none",
        maxWidth: "360px", width: "100%",
        transition: "all 0.2s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1ebe5d"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#25D366"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
    >
      <WhatsAppIcon size={22} />
      <div>
        <div style={{ fontSize: "15px", fontWeight: 600, lineHeight: 1.2 }}>{label}</div>
        <div style={{ fontSize: "11px", opacity: 0.8, marginTop: "2px" }}>Opens WhatsApp directly</div>
      </div>
      <span style={{ marginLeft: "auto", opacity: 0.7, fontSize: "16px" }}>→</span>
    </a>
  );
}

// Secondary outline WA button (navbar, hero, services)
export function WAButtonOutline({ label = "WhatsApp Me", dark = false }: { label?: string; dark?: boolean }) {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        padding: "11px 20px",
        background: "transparent",
        color: dark ? "#fff" : "var(--text)",
        border: `1.5px solid ${dark ? "rgba(255,255,255,0.2)" : "var(--border-dark)"}`,
        borderRadius: "7px", textDecoration: "none",
        fontSize: "14px", fontWeight: 500,
        transition: "all 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = "#25D366";
        (e.currentTarget as HTMLElement).style.color = "#fff";
        (e.currentTarget as HTMLElement).style.borderColor = "#25D366";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
        (e.currentTarget as HTMLElement).style.color = dark ? "#fff" : "var(--text)";
        (e.currentTarget as HTMLElement).style.borderColor = dark ? "rgba(255,255,255,0.2)" : "var(--border-dark)";
      }}
    >
      <WhatsAppIcon size={16} />
      {label}
    </a>
  );
}

// Small inline WA link (work cards, about)
export function WAInlineLink({ label = "WhatsApp Me" }: { label?: string }) {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "9px 16px",
        background: "transparent", color: "var(--text-muted)",
        border: "1px solid var(--border)",
        borderRadius: "6px", textDecoration: "none",
        fontSize: "13px", fontWeight: 500,
        transition: "all 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = "#25D366";
        (e.currentTarget as HTMLElement).style.color = "#fff";
        (e.currentTarget as HTMLElement).style.borderColor = "#25D366";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
        (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <WhatsAppIcon size={14} />
      {label}
    </a>
  );
}

// Navbar pill button
export function WANavButton({ label = "WhatsApp Me" }: { label?: string }) {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        padding: "9px 18px",
        background: "#25D366", color: "#fff",
        borderRadius: "6px", textDecoration: "none",
        fontSize: "13px", fontWeight: 600,
        transition: "all 0.2s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1ebe5d"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#25D366"; }}
    >
      <WhatsAppIcon size={15} />
      {label}
    </a>
  );
}
