import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 shadow-[0_4px_24px_rgba(16,185,129,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 group border border-emerald-400/30 backdrop-blur-sm"
      aria-label="WhatsApp par Dropship Boss se baat karein"
      title={`WhatsApp par baat karein (${CONTACT_INFO.phone})`}
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="font-semibold text-sm hidden sm:inline">WhatsApp Chat</span>
    </a>
  );
}