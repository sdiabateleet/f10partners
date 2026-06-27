import type { CSSProperties } from "react";

type IconProps = { size?: number; style?: CSSProperties; className?: string };

export function WhatsAppIcon({ size = 19, style, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      className={className}
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207z" />
    </svg>
  );
}

export function GlobeIcon({
  size = 22,
  stroke = "#fff",
  strokeWidth = 1.7,
  style,
}: IconProps & { stroke?: string; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={style}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  );
}

export function ArrowIcon({ size = 17, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      style={style}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ size = 14, fill = "#f5a623" }: IconProps & { fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
      <path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17.3 5.8 20.6l1.6-6.7L2.2 8.9l6.9-.6z" />
    </svg>
  );
}

export function Stars({ size = 14, count = 5 }: { size?: number; count?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </span>
  );
}

export function CheckSquare({
  size = 16,
  stroke = "#e11d22",
  strokeWidth = 2.6,
}: IconProps & { stroke?: string; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <path d="M5 12.5l4 4L19 7" />
    </svg>
  );
}

export function CheckCircle({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1c357e"
      strokeWidth={2.3}
      style={{ flexShrink: 0, marginTop: "1px" }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="#eaf1fe" stroke="none" />
      <path d="M8 12.5l2.5 2.5L16 9" />
    </svg>
  );
}

export function MailIcon({ size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1c357e"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e11d22"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
    </svg>
  );
}

export function BuildingIcon({ size = 23 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1c357e"
      strokeWidth={1.55}
      aria-hidden="true"
    >
      <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5h6v5" />
    </svg>
  );
}

/** Modern, filled mark used as the logo fallback for partners without a logo. */
export function ModernMarkIcon({
  size = 24,
  fill = "#e11d22",
}: IconProps & { fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 1.6c.45 5.2 3.2 7.95 8.4 8.4-5.2.45-7.95 3.2-8.4 8.4-.45-5.2-3.2-7.95-8.4-8.4 5.2-.45 7.95-3.2 8.4-8.4z"
        fill={fill}
      />
      <circle cx="19" cy="18.5" r="2.6" fill={fill} opacity="0.5" />
    </svg>
  );
}

export function QuoteIcon({ size = 46, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="rgba(255,255,255,.16)"
      style={style}
      aria-hidden="true"
    >
      <path d="M9.5 4C6 4 3.5 7 3.5 10.5V20h7v-7H7c0-2.5 1.5-4 3.5-4V4zm10 0c-3.5 0-6 3-6 6.5V20h7v-7H17c0-2.5 1.5-4 3.5-4V4z" />
    </svg>
  );
}
