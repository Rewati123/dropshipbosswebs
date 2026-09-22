import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917055146473?text=Namaste%20Dropship%20Boss%2C%20mujhe%20dropshipping%20business%20ke%20baare%20me%20jaankari%20chahiye.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp par Dropship Boss se baat karein"
      title="WhatsApp par baat karein"
    >
      <span className="whatsapp-pulse" aria-hidden="true" />
      <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
      <span className="hidden font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}