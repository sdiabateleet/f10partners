import { useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import type { Destination, Lang, Strings } from "@/lib/content";
import {
  EMAIL,
  PHONE,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "@/lib/content";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

interface Props {
  c: Strings;
  destinations: Destination[];
  lang: Lang;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  dest: string;
  msg: string;
}

const inputStyle: CSSProperties = {
  border: "1px solid #dce4f0",
  borderRadius: 11,
  padding: "12px 14px",
  outline: "none",
  background: "#fbfcfe",
};

const labelStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 7,
};

const labelTextStyle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#3a4664",
};

function ContactCard({
  href,
  iconBg,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  iconBg: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 15,
        background: "#fff",
        border: "1px solid #ebf0f8",
        borderRadius: 14,
        padding: "16px 18px",
        boxShadow: "0 12px 30px -26px rgba(15,28,63,.4)",
      }}
    >
      <span
        style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#8190ad",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 700,
            fontSize: 16,
            color: "#0f1c3f",
            marginTop: 2,
          }}
        >
          {value}
        </div>
      </div>
    </a>
  );
}

export default function Contact({ c, destinations, lang }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    dest: "",
    msg: "",
  });

  const upd = (field: keyof FormState, value: string) =>
    setForm((s) => ({ ...s, [field]: value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const isFr = lang === "fr";
    const L = isFr
      ? {
          h: "Bonjour F10 Consulting, je souhaite une consultation.",
          n: "Nom",
          e: "Email",
          p: "Téléphone",
          d: "Destination souhaitée",
          m: "Projet",
        }
      : {
          h: "Hello F10 Consulting, I would like a consultation.",
          n: "Name",
          e: "Email",
          p: "Phone",
          d: "Preferred destination",
          m: "Project",
        };
    const lines = [
      L.h,
      "",
      `${L.n}: ${form.name || "-"}`,
      `${L.e}: ${form.email || "-"}`,
      `${L.p}: ${form.phone || "-"}`,
      `${L.d}: ${form.dest || "-"}`,
      `${L.m}: ${form.msg || "-"}`,
    ];
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(lines.join("\n")),
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "clamp(56px,9vw,96px) clamp(20px,5vw,30px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: 54,
        alignItems: "start",
      }}
    >
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
          {c.contactEyebrow}
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
          {c.contactTitle}
        </h2>
        <p
          style={{
            margin: "16px 0 0",
            fontSize: 16.5,
            lineHeight: 1.6,
            color: "#55617d",
          }}
        >
          {c.contactSub}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginTop: 32,
          }}
        >
          <ContactCard
            href={WHATSAPP_LINK}
            external
            iconBg="#e8f9ee"
            icon={<WhatsAppIcon size={22} style={{ color: "#25d366" }} />}
            label={c.waLabel}
            value={c.waValue}
          />
          <ContactCard
            href={`mailto:${EMAIL}`}
            iconBg="#eaf1fe"
            icon={<MailIcon size={22} />}
            label={c.emailLabel}
            value={c.emailValue}
          />
          <ContactCard
            href={`tel:${PHONE}`}
            iconBg="#fdeaea"
            icon={<PhoneIcon size={22} />}
            label={c.phoneLabel}
            value={c.phoneValue}
          />
        </div>
      </div>

      <form
        onSubmit={submit}
        style={{
          background: "#fff",
          border: "1px solid #e6ecf5",
          borderRadius: 16,
          padding: 34,
          boxShadow: "0 18px 44px -34px rgba(15,28,63,.4)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 16,
          }}
        >
          <label style={labelStyle}>
            <span style={labelTextStyle}>{c.formName}</span>
            <input
              className="f10-input"
              value={form.name}
              onChange={(e) => upd("name", e.target.value)}
              placeholder={c.formName}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            <span style={labelTextStyle}>{c.formPhone}</span>
            <input
              className="f10-input"
              value={form.phone}
              onChange={(e) => upd("phone", e.target.value)}
              placeholder="+225 ..."
              style={inputStyle}
            />
          </label>
        </div>
        <label style={{ ...labelStyle, marginTop: 16 }}>
          <span style={labelTextStyle}>{c.formEmail}</span>
          <input
            className="f10-input"
            value={form.email}
            onChange={(e) => upd("email", e.target.value)}
            placeholder="vous@email.com"
            style={inputStyle}
          />
        </label>
        <label style={{ ...labelStyle, marginTop: 16 }}>
          <span style={labelTextStyle}>{c.formDest}</span>
          <select
            className="f10-input"
            value={form.dest}
            onChange={(e) => upd("dest", e.target.value)}
            style={inputStyle}
          >
            <option value="">{c.formChoose}</option>
            {destinations.map((d) => (
              <option key={d.code} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </label>
        <label style={{ ...labelStyle, marginTop: 16 }}>
          <span style={labelTextStyle}>{c.formMsg}</span>
          <textarea
            className="f10-input"
            value={form.msg}
            onChange={(e) => upd("msg", e.target.value)}
            rows={3}
            placeholder="..."
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </label>
        <button
          type="submit"
          style={{
            marginTop: 20,
            width: "100%",
            background: "#25d366",
            color: "#073b1c",
            border: "none",
            borderRadius: 12,
            padding: 15,
            fontWeight: 700,
            fontSize: 15.5,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            boxShadow: "0 14px 30px -14px rgba(37,211,102,.7)",
          }}
        >
          <WhatsAppIcon size={19} />
          {c.formSubmit}
        </button>
        <p
          style={{
            margin: "13px 0 0",
            fontSize: 12.5,
            color: "#8190ad",
            textAlign: "center",
            lineHeight: 1.45,
          }}
        >
          {c.formNote}
        </p>
      </form>
    </section>
  );
}
