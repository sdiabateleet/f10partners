"use client";

import { useEffect, useState, type CSSProperties } from "react";

export interface Slide {
  src: string;
  alt: string;
}

interface Props {
  slides: Slide[];
  /** Auto-advance interval in ms. */
  intervalMs?: number;
  radius?: number;
  aspectRatio?: string;
  boxShadow?: string;
}

export default function AutoCarousel({
  slides,
  intervalMs = 4000,
  radius = 14,
  aspectRatio = "5 / 4",
  boxShadow = "0 18px 44px -30px rgba(15,28,63,.4)",
}: Props) {
  const n = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduced || n <= 1) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % n), intervalMs);
    return () => clearInterval(id);
  }, [paused, reduced, n, intervalMs]);

  const dotBase: CSSProperties = {
    height: 7,
    borderRadius: 100,
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "width .4s ease, background .4s ease",
  };

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Photos de F10 Consulting"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      style={{
        position: "relative",
        borderRadius: radius,
        overflow: "hidden",
        aspectRatio,
        boxShadow,
        background: "#eef2fb",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: reduced
            ? "none"
            : "transform .8s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== index}
            style={{ minWidth: "100%", height: "100%", position: "relative" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {/* legibility gradient behind the dots */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 72,
          background: "linear-gradient(to top, rgba(7,18,45,.34), transparent)",
          pointerEvents: "none",
        }}
      />

      {n > 1 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 13,
            display: "flex",
            justifyContent: "center",
            gap: 7,
            zIndex: 2,
          }}
        >
          {slides.map((s, i) => {
            const active = i === index;
            return (
              <button
                key={s.src}
                aria-label={`Aller à l'image ${i + 1}`}
                aria-current={active}
                onClick={() => setIndex(i)}
                style={{
                  ...dotBase,
                  width: active ? 24 : 7,
                  background: active ? "#fff" : "rgba(255,255,255,.55)",
                  boxShadow: active ? "0 1px 5px rgba(0,0,0,.35)" : "none",
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
