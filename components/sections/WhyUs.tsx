import type { Advantage, Strings } from "@/lib/content";

interface Props {
  c: Strings;
  advantages: Advantage[];
}

export default function WhyUs({ c, advantages }: Props) {
  return (
    <section
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "clamp(56px,9vw,96px) clamp(20px,5vw,30px)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#7c889f",
          }}
        >
          {c.whyEyebrow}
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
          {c.whyTitle}
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
          gap: 22,
          marginTop: 50,
        }}
      >
        {advantages.map((a) => (
          <div
            key={a.title}
            style={{
              padding: "30px 26px",
              borderRadius: 14,
              background: "#fff",
              border: "1px solid #e6ecf5",
              boxShadow: "0 10px 30px -26px rgba(15,28,63,.25)",
            }}
          >
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#f3f6fc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e6ecf5",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1c357e"
                strokeWidth={1.8}
                aria-hidden="true"
              >
                <path d={a.icon} />
              </svg>
            </span>
            <h3
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 700,
                fontSize: 17,
                margin: "18px 0 0",
                color: "#0f1c3f",
                lineHeight: 1.25,
              }}
            >
              {a.title}
            </h3>
            <p
              style={{
                margin: "9px 0 0",
                fontSize: 14,
                lineHeight: 1.55,
                color: "#5b6783",
              }}
            >
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
