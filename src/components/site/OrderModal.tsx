import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle, Mail, Phone, X } from "lucide-react";

export const CONTACT = {
  whatsapp: "923001234567", // international format, no +
  phone: "+923001234567",
  email: "hello@easyprints.pk",
};

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
}

export function OrderModal({ open, onClose }: OrderModalProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const options = [
    {
      icon: MessageCircle,
      title: "Send Message on WhatsApp",
      desc: "Chat with us instantly",
      href: `https://wa.me/${CONTACT.whatsapp}?text=Hi%20EasyPrints%2C%20I%20want%20to%20place%20an%20order`,
      target: "_blank",
      glow: "0 0 30px rgba(37, 211, 102, 0.5)",
      grad: "linear-gradient(135deg, #25D366, #128C7E)",
    },
    {
      icon: Mail,
      title: "Email Us",
      desc: CONTACT.email,
      href: `mailto:${CONTACT.email}?subject=EasyPrints%20Order%20Inquiry`,
      target: undefined,
      glow: "0 0 30px color-mix(in oklab, var(--neon) 60%, transparent)",
      grad: "linear-gradient(135deg, var(--neon), var(--neon-2))",
    },
    {
      icon: Phone,
      title: "Direct Call",
      desc: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      target: undefined,
      glow: "0 0 30px rgba(217, 70, 239, 0.5)",
      grad: "linear-gradient(135deg, #d946ef, #8b5cf6)",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center p-4"
      style={{ animation: "fade-up 0.3s ease-out" }}
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "color-mix(in oklab, black 60%, transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl glass-dark neon-border p-6 sm:p-8 shadow-elevated"
        style={{ animation: "fade-up 0.5s cubic-bezier(.2,.8,.2,1)" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full glass text-white/80 hover:text-white hover:scale-110 transition"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <span className="inline-block rounded-full glass px-3 py-1 text-[11px] font-medium tracking-wider uppercase text-white/80">
            Get in touch
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            How would you like to <span className="text-gradient">order?</span>
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Pick the channel that works best for you — we reply in minutes.
          </p>
        </div>

        <div className="mt-7 space-y-3">
          {options.map(({ icon: Icon, title, desc, href, target, grad, glow }, i) => (
            <a
              key={title}
              href={href}
              target={target}
              rel={target ? "noopener noreferrer" : undefined}
              onClick={onClose}
              className="group relative flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:-translate-y-0.5"
              style={{ animationDelay: `${0.1 + i * 0.08}s`, animation: "fade-up 0.5s ease-out both" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = glow)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-glow shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: grad }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white">{title}</div>
                <div className="text-xs text-white/60 truncate">{desc}</div>
              </div>
              <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
