import type { Stat } from "@/lib/content";

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section
      style={{
        maxWidth: 1140,
        margin: "-58px auto 0",
        padding: "0 30px",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #e6ecf5",
          borderRadius: 14,
          boxShadow: "0 14px 36px -28px rgba(15,28,63,.3)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          overflow: "hidden",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              padding: "28px 24px",
              borderRight: "1px solid #eef2f8",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: 34,
                color: "#1c357e",
                letterSpacing: "-1px",
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: 13.5,
                color: "#67738f",
                fontWeight: 600,
                marginTop: 5,
                lineHeight: 1.35,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
