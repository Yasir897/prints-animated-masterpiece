import { MessageCircle, Mail, Phone } from "lucide-react";
import { CONTACT } from "./OrderModal";

export function ContactOptions() {
  const options = [
    {
      icon: MessageCircle,
      title: "Send Message on WhatsApp",
      desc: "Chat with us instantly",
      href: `https://wa.me/${CONTACT.whatsapp}?text=Hi%20EasyPrints%2C%20I%20want%20to%20place%20an%20order`,
      target: "_blank" as const,
      glow: "0 0 40px rgba(37, 211, 102, 0.55)",
      grad: "linear-gradient(135deg, #25D366, #128C7E)",
    },
    {
      icon: Mail,
      title: "Email Us",
      desc: CONTACT.email,
      href: `mailto:${CONTACT.email}?subject=EasyPrints%20Order%20Inquiry`,
      target: undefined,
      glow: "0 0 40px color-mix(in oklab, var(--neon) 65%, transparent)",
      grad: "linear-gradient(135deg, var(--neon), var(--neon-2))",
    },
    {
      icon: Phone,
      title: "Direct Call",
      desc: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      target: undefined,
      glow: "0 0 40px rgba(217, 70, 239, 0.55)",
      grad: "linear-gradient(135deg, #d946ef, #8b5cf6)",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {options.map(({ icon: Icon, title, desc, href, target, grad, glow }, i) => (
        <a
          key={title}
          href={href}
          target={target}
          rel={target ? "noopener noreferrer" : undefined}
          className="reveal neon-border group relative flex flex-col items-center text-center gap-4 rounded-2xl glass-dark p-7 transition-all hover:-translate-y-1"
          style={{ transitionDelay: `${i * 80}ms` }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = glow)}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
        >
          <span
            className="grid h-16 w-16 place-items-center rounded-2xl text-white shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-transform"
            style={{ background: grad }}
          >
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <div className="font-semibold text-white text-lg">{title}</div>
            <div className="mt-1 text-sm text-white/60 break-all">{desc}</div>
          </div>
          <span className="text-white/40 group-hover:text-white transition-all">Tap to open →</span>
        </a>
      ))}
    </div>
  );
}
