import { WHATSAPP_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export default function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 90,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#25d366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 12px 30px -8px rgba(37,211,102,.6)",
        animation: "f10pulse 2.4s infinite",
      }}
    >
      <WhatsAppIcon size={30} style={{ color: "#fff" }} />
    </a>
  );
}
