import type { CSSProperties, ReactNode } from "react";
import type { Strings } from "@/lib/content";
import { CheckSquare } from "@/components/icons";

interface Props {
  c: Strings;
  serv1: string[];
  serv2: string[];
  serv3: string[];
}

const cardStyle: CSSProperties = {
  background: "#fff",
  border: "1px solid #ebf0f8",
  borderRadius: 14,
  padding: "34px 30px",
  boxShadow: "0 10px 30px -26px rgba(15,28,63,.25)",
};

function ServiceCard({
  iconBg,
  iconBorder,
  icon,
  title,
  desc,
  bullets,
}: {
  iconBg: string;
  iconBorder: string;
  icon: ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div style={cardStyle}>
      <span
        style={{
          width: 54,
          height: 54,
          borderRadius: 13,
          background: iconBg,
          border: `1px solid ${iconBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-sora)",
          fontWeight: 700,
          fontSize: 20,
          margin: "20px 0 0",
          color: "#0f1c3f",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: "11px 0 0",
          fontSize: 14.5,
          lineHeight: 1.6,
          color: "#5b6783",
        }}
      >
        {desc}
      </p>
      <div
        style={{
          marginTop: 18,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {bullets.map((b) => (
          <div
            key={b}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              fontSize: 13.5,
              fontWeight: 600,
              color: "#34405e",
            }}
          >
            <CheckSquare size={16} />
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services({ c, serv1, serv2, serv3 }: Props) {
  return (
    <section id="services" style={{ background: "#f5f8fd" }}>
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
            {c.servEyebrow}
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
            {c.servTitle}
          </h2>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "#55617d",
            }}
          >
            {c.servSub}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
            gap: 24,
            marginTop: 52,
          }}
        >
          <ServiceCard
            iconBg="#eef2fb"
            iconBorder="#e1e8f5"
            icon={
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1c357e"
                strokeWidth={1.7}
                aria-hidden="true"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            }
            title={c.serv1Title}
            desc={c.serv1Desc}
            bullets={serv1}
          />
          <ServiceCard
            iconBg="#fdecec"
            iconBorder="#f6dada"
            icon={
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e11d22"
                strokeWidth={1.7}
                aria-hidden="true"
              >
                <path d="M9 2h6l2 3h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2z" />
                <path d="M9 12h6M9 16h4" />
              </svg>
            }
            title={c.serv2Title}
            desc={c.serv2Desc}
            bullets={serv2}
          />
          <ServiceCard
            iconBg="#e9f4fb"
            iconBorder="#d8ebf7"
            icon={
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1690c9"
                strokeWidth={1.7}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M16 8l-2.5 5.5L8 16l2.5-5.5z" />
              </svg>
            }
            title={c.serv3Title}
            desc={c.serv3Desc}
            bullets={serv3}
          />
        </div>
      </div>
    </section>
  );
}
