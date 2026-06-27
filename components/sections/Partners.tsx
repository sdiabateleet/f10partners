import { useState } from "react";
import type { Partner, Strings, Testimonial } from "@/lib/content";
import { BuildingIcon, GlobeIcon, Stars } from "@/components/icons";

interface Props {
  c: Strings;
  partnersInt: Partner[];
  partnersExt: Partner[];
  testimonials: Testimonial[];
}

function PartnerCard({
  partner,
  accent,
}: {
  partner: Partner;
  accent: "blue" | "red";
}) {
  const [logoFailed, setLogoFailed] = useState(false);
  const tint = accent === "blue" ? "#eef2fb" : "#fdecec";
  const showLogo = partner.logo && !logoFailed;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e6ecf5",
        borderRadius: 12,
        padding: "19px 22px",
        display: "flex",
        alignItems: "center",
        gap: 15,
      }}
    >
      <span
        style={{
          width: showLogo ? 64 : 46,
          height: 46,
          borderRadius: 11,
          background: showLogo ? "#fff" : tint,
          border: showLogo ? "1px solid #eef2f8" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {showLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={partner.logo}
            alt={partner.name}
            onError={() => setLogoFailed(true)}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              padding: 4,
            }}
          />
        ) : accent === "blue" ? (
          <BuildingIcon size={23} />
        ) : (
          <GlobeIcon size={23} stroke="#e11d22" strokeWidth={1.5} />
        )}
      </span>
      <div>
        <div
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 700,
            fontSize: 16.5,
            color: "#0f1c3f",
            lineHeight: 1.2,
          }}
        >
          {partner.name}
        </div>
        <div style={{ fontSize: 12.5, color: "#8190ad", marginTop: 3 }}>
          {partner.tag}
        </div>
      </div>
    </div>
  );
}

function ColumnLabel({ label, accent }: { label: string; accent: "blue" | "red" }) {
  const color = accent === "blue" ? "#1c357e" : "#e11d22";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 18,
      }}
    >
      <span style={{ width: 26, height: 2, background: color }} />
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Partners({
  c,
  partnersInt,
  partnersExt,
  testimonials,
}: Props) {
  return (
    <section id="partenaires" style={{ background: "#f5f8fd" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(56px,9vw,96px) clamp(20px,5vw,30px)",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#7c889f",
            }}
          >
            {c.partnersEyebrow}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 800,
              fontSize: "clamp(27px,4.4vw,38px)",
              lineHeight: 1.12,
              letterSpacing: "-1px",
              margin: "14px 0 0",
              color: "#0f1c3f",
            }}
          >
            {c.partnersTitle}
          </h2>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "#55617d",
            }}
          >
            {c.partnersSub}
          </p>
        </div>

        <div
          style={{
            marginTop: 46,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 40,
          }}
        >
          <div>
            <ColumnLabel label={c.partnersIntLabel} accent="blue" />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {partnersInt.map((p) => (
                <PartnerCard key={p.name} partner={p} accent="blue" />
              ))}
            </div>
          </div>
          <div>
            <ColumnLabel label={c.partnersExtLabel} accent="red" />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {partnersExt.map((p) => (
                <PartnerCard key={p.name} partner={p} accent="red" />
              ))}
            </div>
          </div>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 700,
            fontSize: 24,
            textAlign: "center",
            margin: "64px 0 0",
            color: "#0f1c3f",
          }}
        >
          {c.testiTitle}
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 24,
            marginTop: 34,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                border: "1px solid #e6ecf5",
                borderRadius: 14,
                padding: "30px 28px",
                boxShadow: "0 10px 30px -26px rgba(15,28,63,.22)",
              }}
            >
              <Stars size={15} />
              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#34405e",
                  fontWeight: 500,
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 22,
                  paddingTop: 20,
                  borderTop: "1px solid #eef2f8",
                }}
              >
                <span
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: "linear-gradient(150deg,#1c357e,#2f6fd0)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sora)",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {t.initials}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sora)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#0f1c3f",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12.5, color: "#74809a", marginTop: 2 }}>
                    {t.place}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
