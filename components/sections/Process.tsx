import type { Step, Strings } from "@/lib/content";

interface Props {
  c: Strings;
  steps: Step[];
}

export default function Process({ c, steps }: Props) {
  return (
    <section style={{ background: "#f5f8fd" }}>
      <div
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
            {c.stepsEyebrow}
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
            {c.stepsTitle}
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
            gap: 22,
            marginTop: 54,
          }}
        >
          {steps.map((st) => (
            <div
              key={st.n}
              style={{
                background: "#fff",
                border: "1px solid #ebf0f8",
                borderRadius: 18,
                padding: "30px 26px",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: 40,
                  color: "#e8eef9",
                  lineHeight: 1,
                }}
              >
                {st.n}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: 18,
                  margin: "10px 0 0",
                  color: "#0f1c3f",
                }}
              >
                {st.title}
              </h3>
              <p
                style={{
                  margin: "9px 0 0",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "#5b6783",
                }}
              >
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
