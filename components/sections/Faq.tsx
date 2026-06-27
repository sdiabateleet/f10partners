import type { Faq as FaqItem, Strings } from "@/lib/content";

interface Props {
  c: Strings;
  faq: FaqItem[];
}

export default function Faq({ c, faq }: Props) {
  return (
    <section
      id="faq"
      style={{ background: "#f5f8fd", borderTop: "1px solid #eef2f8" }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "clamp(56px,9vw,96px) clamp(20px,5vw,30px)",
        }}
      >
        <div style={{ maxWidth: 600 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#7c889f",
            }}
          >
            {c.faqEyebrow}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 800,
              fontSize: "clamp(26px,4vw,36px)",
              lineHeight: 1.14,
              letterSpacing: "-1px",
              margin: "14px 0 0",
              color: "#0f1c3f",
            }}
          >
            {c.faqTitle}
          </h2>
          <p
            style={{
              margin: "14px 0 0",
              fontSize: 16,
              lineHeight: 1.6,
              color: "#55617d",
            }}
          >
            {c.faqSub}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: "6px 48px",
            marginTop: 46,
          }}
        >
          {faq.map((f) => (
            <div
              key={f.q}
              style={{ borderTop: "1px solid #dbe4f0", padding: "22px 0" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: 16.5,
                  color: "#0f1c3f",
                  lineHeight: 1.35,
                }}
              >
                {f.q}
              </h3>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 14.5,
                  lineHeight: 1.65,
                  color: "#55617d",
                }}
              >
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
