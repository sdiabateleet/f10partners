import type { Destination, Strings } from "@/lib/content";

interface Props {
  c: Strings;
  destinations: Destination[];
}

export default function Destinations({ c, destinations }: Props) {
  return (
    <section
      id="destinations"
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
          {c.destEyebrow}
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
          {c.destTitle}
        </h2>
        <p
          style={{
            margin: "16px 0 0",
            fontSize: 16.5,
            lineHeight: 1.6,
            color: "#55617d",
          }}
        >
          {c.destSub}
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(162px,1fr))",
          gap: 18,
          marginTop: 50,
        }}
      >
        {destinations.map((d) => (
          <div
            key={d.code}
            className="f10-dest-card"
            style={{
              background: "#fff",
              border: "1px solid #ecf0f7",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 12px 30px -26px rgba(15,28,63,.4)",
            }}
          >
            <div
              role="img"
              aria-label={d.name}
              style={{
                width: 48,
                height: 34,
                borderRadius: 6,
                boxShadow: "0 3px 8px rgba(0,0,0,.18)",
                backgroundImage: `url('https://flagcdn.com/w160/${d.code}.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 700,
                fontSize: 16,
                color: "#0f1c3f",
                marginTop: 14,
              }}
            >
              {d.name}
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "#74809a",
                lineHeight: 1.4,
                marginTop: 5,
              }}
            >
              {d.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
