export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923001234567?text=Hi%20EasyPrints%2C%20I%20want%20to%20place%20an%20order"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat With Us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="pointer-events-none hidden sm:inline-flex items-center rounded-full glass neon-border px-3 py-1.5 text-xs font-medium text-foreground opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Chat With Us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-glow animate-float"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400/30" />
        <span className="absolute -inset-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ boxShadow: "0 0 24px 4px #25D366, 0 0 60px 10px rgba(37,211,102,0.45)" }}
        />
        {/* Official WhatsApp icon */}
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110" fill="currentColor" aria-hidden>
          <path d="M19.11 17.31c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.97 4.72 4.16.66.28 1.18.45 1.58.58.66.21 1.27.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32zM16.04 5.33c-5.92 0-10.73 4.81-10.73 10.73 0 1.89.5 3.74 1.45 5.37l-1.54 5.61 5.74-1.51c1.57.86 3.34 1.31 5.07 1.31h.01c5.91 0 10.72-4.81 10.73-10.73 0-2.87-1.12-5.56-3.14-7.59a10.66 10.66 0 0 0-7.59-3.19zm0 19.61h-.01a8.92 8.92 0 0 1-4.54-1.24l-.33-.19-3.4.89.91-3.32-.21-.34a8.9 8.9 0 0 1-1.36-4.74c0-4.92 4.01-8.92 8.94-8.92 2.39 0 4.63.93 6.32 2.62a8.84 8.84 0 0 1 2.61 6.32c0 4.92-4.01 8.92-8.93 8.92z" />
        </svg>
      </span>
    </a>
  );
}
