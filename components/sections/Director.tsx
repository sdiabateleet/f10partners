import type { Strings } from "@/lib/content";
import { QuoteIcon } from "@/components/icons";

export default function Director({ c }: { c: Strings }) {
  return (
    <section
      style={{
        background: "#15306b",
        position: "relative",
        overflow: "hidden",
        borderTop: "3px solid #e11d22",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(56px,9vw,84px) clamp(20px,5vw,30px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(36px,5vw,56px)",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Le directeur de F10 Consulting à son bureau"
            src="assets/director-desk.jpeg"
            style={{
              width: "100%",
              borderRadius: 12,
              display: "block",
              objectFit: "cover",
              aspectRatio: "4 / 4.4",
              boxShadow: "0 22px 50px -26px rgba(0,0,0,.6)",
              objectPosition: "center",
            }}
          />
        </div>
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#7fb0ff",
            }}
          >
            {c.dirEyebrow}
          </div>
          <QuoteIcon size={46} style={{ margin: "18px 0 6px" }} />
          <p
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 1.45,
              color: "#fff",
              letterSpacing: "-.3px",
            }}
          >
            {c.dirQuote}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 26,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Portrait du directeur de F10 Consulting"
              src="assets/director-smile.jpeg"
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(255,255,255,.3)",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                {c.dirName}
              </div>
              <div style={{ fontSize: 13.5, color: "#9fb8e8", marginTop: 2 }}>
                {c.dirRole}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
