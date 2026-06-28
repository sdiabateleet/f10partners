import type { Strings } from "@/lib/content";
import { CheckCircle } from "@/components/icons";
import AutoCarousel, { type Slide } from "@/components/AutoCarousel";

interface Props {
  c: Strings;
  aboutBullets: string[];
}

const ABOUT_SLIDES: Slide[] = [
  { src: "assets/team.jpeg", alt: "L'équipe de F10 Consulting" },
  { src: "assets/team2.jpeg", alt: "L'équipe de F10 Consulting" },
  { src: "assets/event.jpeg", alt: "F10 Consulting lors d'un événement" },
  { src: "assets/director-desk.jpeg", alt: "Le directeur de F10 Consulting à son bureau" },
];

export default function About({ c, aboutBullets }: Props) {
  return (
    <section
      id="apropos"
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "clamp(56px,9vw,96px) clamp(20px,5vw,30px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "clamp(36px,5vw,64px)",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative" }}>
        <AutoCarousel slides={ABOUT_SLIDES} intervalMs={4000} aspectRatio="5 / 4" />
        <div
          style={{
            position: "absolute",
            right: -18,
            bottom: -22,
            background: "#e11d22",
            color: "#fff",
            borderRadius: 18,
            padding: "20px 22px",
            boxShadow: "0 20px 40px -16px rgba(225,29,34,.5)",
            maxWidth: 210,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 800,
              fontSize: 15,
              lineHeight: 1.2,
            }}
          >
            {c.aboutBadge}
          </div>
          <div
            style={{
              fontSize: 12.5,
              opacity: 0.92,
              marginTop: 6,
              lineHeight: 1.4,
            }}
          >
            {c.aboutExp}
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#7c889f",
          }}
        >
          {c.aboutEyebrow}
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
          {c.aboutTitle}
        </h2>
        <p
          style={{
            margin: "20px 0 0",
            fontSize: 16,
            lineHeight: 1.7,
            color: "#55617d",
          }}
        >
          {c.aboutP1}
        </p>
        <p
          style={{
            margin: "14px 0 0",
            fontSize: 16,
            lineHeight: 1.7,
            color: "#55617d",
          }}
        >
          {c.aboutP2}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 13,
            marginTop: 26,
          }}
        >
          {aboutBullets.map((b) => (
            <div
              key={b}
              style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
            >
              <CheckCircle size={20} />
              <span
                style={{
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: "#2b3654",
                  lineHeight: 1.4,
                }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
