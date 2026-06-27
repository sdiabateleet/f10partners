import type { Strings } from "@/lib/content";
import { WHATSAPP_LINK } from "@/lib/content";
import { ArrowIcon, Stars, WhatsAppIcon } from "@/components/icons";

const AVATARS = [
  "assets/director-smile.jpeg",
  "assets/team.jpeg",
  "assets/director-portrait.jpeg",
  "assets/director-blue.jpeg",
];

export default function Hero({ c }: { c: Strings }) {
  return (
    <section
      id="accueil"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg,#f4f7fc 0%,#ffffff 72%)",
        borderBottom: "1px solid #eef2f8",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding:
            "clamp(44px,7vw,70px) clamp(20px,5vw,30px) clamp(64px,9vw,110px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
          gap: "clamp(36px,5vw,56px)",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#fff",
              border: "1px solid #dde7f5",
              borderRadius: 100,
              padding: "7px 15px",
              fontSize: 13,
              fontWeight: 600,
              color: "#1c357e",
              boxShadow: "0 6px 18px -12px rgba(28,53,126,.5)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 0 3px rgba(34,197,94,.2)",
              }}
            />
            {c.heroEyebrow} <span style={{ color: "#9aa7bf" }}>·</span>{" "}
            <span style={{ color: "#e11d22" }}>{c.heroSince}</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 800,
              fontSize: "clamp(34px,6.2vw,53px)",
              lineHeight: 1.07,
              letterSpacing: "-1.6px",
              margin: "22px 0 0",
              color: "#0f1c3f",
            }}
          >
            {c.heroTitle1} <span style={{ color: "#1c357e" }}>{c.heroTitle2}</span>{" "}
            {c.heroTitle3}
          </h1>
          <p
            style={{
              margin: "22px 0 0",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#55617d",
              maxWidth: 520,
            }}
          >
            {c.heroSub}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 32,
            }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "#25d366",
                color: "#073b1c",
                borderRadius: 12,
                padding: "15px 24px",
                fontWeight: 700,
                fontSize: 15.5,
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 14px 30px -12px rgba(37,211,102,.7)",
              }}
            >
              <WhatsAppIcon size={19} />
              {c.ctaPrimary}
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                background: "#fff",
                color: "#1c357e",
                border: "1.5px solid #d4deee",
                borderRadius: 12,
                padding: "15px 24px",
                fontWeight: 700,
                fontSize: 15.5,
                display: "flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              {c.ctaSecondary}
              <ArrowIcon size={17} />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 34,
            }}
          >
            <div style={{ display: "flex" }}>
              {AVATARS.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  alt=""
                  src={src}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2.5px solid #fff",
                    marginLeft: i === 0 ? 0 : -14,
                    boxShadow: "0 2px 6px rgba(0,0,0,.12)",
                  }}
                />
              ))}
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#55617d" }}>
              <span style={{ display: "inline-flex", marginBottom: 5 }}>
                <Stars size={14} />
              </span>
              <br />
              {c.trustText}
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "22px -16px -16px 24px",
              background: "#1c357e",
              borderRadius: 6,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Le directeur de F10 Consulting"
            src="assets/director-portrait.jpeg"
            style={{
              position: "relative",
              width: "100%",
              borderRadius: 6,
              display: "block",
              boxShadow: "0 22px 46px -28px rgba(15,28,63,.42)",
              objectFit: "cover",
              aspectRatio: "4 / 4.6",
              objectPosition: "top",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -22,
              bottom: 32,
              background: "#fff",
              border: "1px solid #eef2f8",
              borderRadius: 10,
              padding: "15px 19px",
              boxShadow: "0 14px 34px -22px rgba(15,28,63,.45)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: 23,
                color: "#1c357e",
                lineHeight: 1,
                letterSpacing: "-.5px",
              }}
            >
              10<span style={{ color: "#e11d22" }}>+</span>
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#7c889f",
                fontWeight: 600,
                marginTop: 6,
                letterSpacing: ".4px",
                textTransform: "uppercase",
              }}
            >
              {c.badgeDest}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
