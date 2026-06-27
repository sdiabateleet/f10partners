import type { NavLink, Strings } from "@/lib/content";
import { EMAIL, PHONE, WHATSAPP_LINK } from "@/lib/content";
import { GlobeIcon } from "@/components/icons";

interface Props {
  c: Strings;
  nav: NavLink[];
}

export default function Footer({ c, nav }: Props) {
  return (
    <footer style={{ background: "#0e2150", color: "#c5d2ec" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(48px,8vw,64px) clamp(20px,5vw,30px) 36px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: "linear-gradient(150deg,#2f6fd0,#3aa0e0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GlobeIcon size={22} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: 19,
                color: "#fff",
              }}
            >
              F10 <span style={{ color: "#ff6b6f" }}>Consulting</span>
            </span>
          </div>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 14,
              lineHeight: 1.6,
              color: "#9fb0d2",
              maxWidth: 300,
            }}
          >
            {c.footerTagline}
          </p>
        </div>

        <div>
          <div
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 700,
              fontSize: 14,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            {c.footerCol1}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ textDecoration: "none", color: "#9fb0d2", fontSize: 14 }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 700,
              fontSize: 14,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            {c.footerCol2}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14,
              color: "#9fb0d2",
            }}
          >
            <a href="#services" style={{ textDecoration: "none", color: "inherit" }}>
              {c.serv1Title}
            </a>
            <a href="#services" style={{ textDecoration: "none", color: "inherit" }}>
              {c.serv2Title}
            </a>
            <a href="#services" style={{ textDecoration: "none", color: "inherit" }}>
              {c.serv3Title}
            </a>
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 700,
              fontSize: 14,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            {c.footerCol3}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14,
              color: "#9fb0d2",
            }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WhatsApp · +225 07 02 02 81 89
            </a>
            <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none", color: "inherit" }}>
              {EMAIL}
            </a>
            <a href={`tel:${PHONE}`} style={{ textDecoration: "none", color: "inherit" }}>
              +225 27 22 28 36 43
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "20px 30px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            fontSize: 12.5,
            color: "#7d8fb5",
          }}
        >
          <span>© 2026 F10 Consulting. {c.footerRights}</span>
          <span>{c.aboutBadge}</span>
        </div>
      </div>
    </footer>
  );
}
