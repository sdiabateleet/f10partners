import type { NavLink, Strings } from "@/lib/content";
import { WHATSAPP_LINK } from "@/lib/content";
import { GlobeIcon, WhatsAppIcon } from "@/components/icons";

interface Props {
  nav: NavLink[];
  c: Strings;
  langBtn: string;
  onToggleLang: () => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export default function Header({
  nav,
  c,
  langBtn,
  onToggleLang,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: Props) {
  const burgerPath = menuOpen
    ? "M6 6l12 12M18 6L6 18"
    : "M3 6h18M3 12h18M3 18h18";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(255,255,255,.86)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid #e8eef7",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "13px 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#accueil"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 40,
              height: 40,
              borderRadius: 11,
              background: "linear-gradient(150deg,#1c357e,#2f6fd0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <GlobeIcon size={22} />
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: 19,
                letterSpacing: "-.4px",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#1c357e" }}>F10</span>{" "}
              <span style={{ color: "#e11d22" }}>Consulting</span>
            </span>
            <span
              style={{
                fontSize: 9.5,
                letterSpacing: "2.5px",
                color: "#8190ad",
                fontWeight: 600,
                marginTop: 3,
              }}
            >
              BY F-DIS PARTNERS
            </span>
          </span>
        </a>

        <nav
          className="f10-nav"
          style={{ display: "flex", alignItems: "center", gap: 30 }}
        >
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#43506e",
                fontWeight: 600,
                fontSize: 14.5,
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 13, flexShrink: 0 }}>
          <button
            onClick={onToggleLang}
            style={{
              border: "1px solid #d4deee",
              background: "#fff",
              borderRadius: 9,
              padding: "8px 12px",
              fontWeight: 700,
              fontSize: 13,
              color: "#1c357e",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <GlobeIcon size={15} stroke="currentColor" strokeWidth={1.8} />
            {langBtn}
          </button>
          <a
            className="f10-wa-cta"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              background: "#1c357e",
              color: "#fff",
              borderRadius: 9,
              padding: "10px 17px",
              fontWeight: 700,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 8px 22px -10px rgba(28,53,126,.7)",
            }}
          >
            <WhatsAppIcon size={16} />
            {c.navCta}
          </a>
          <button
            className="f10-burger"
            aria-label="Menu"
            onClick={onToggleMenu}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              border: "1px solid #d4deee",
              background: "#fff",
              borderRadius: 10,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1c357e"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path d={burgerPath} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="f10-mobile-menu"
          style={{
            borderTop: "1px solid #eef2f8",
            background: "#fff",
            padding: "10px clamp(20px,5vw,30px) 18px",
          }}
        >
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onCloseMenu}
              style={{
                display: "block",
                textDecoration: "none",
                color: "#2b3654",
                fontWeight: 600,
                fontSize: 16,
                padding: "13px 4px",
                borderBottom: "1px solid #f1f4fa",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCloseMenu}
            style={{
              marginTop: 14,
              textDecoration: "none",
              background: "#25d366",
              color: "#073b1c",
              borderRadius: 11,
              padding: 14,
              fontWeight: 700,
              fontSize: 15.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
            }}
          >
            <WhatsAppIcon size={18} />
            {c.ctaPrimary}
          </a>
        </div>
      )}
    </header>
  );
}
