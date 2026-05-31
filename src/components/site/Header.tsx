import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrderModal } from "./OrderModal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 relative",
            scrolled ? "glass shadow-elevated" : "glass-dark",
          )}
          style={scrolled ? { borderBottom: "1px solid color-mix(in oklab, var(--neon) 35%, transparent)", boxShadow: "0 10px 40px -10px var(--brand-glow), 0 0 24px -8px var(--neon)" } : undefined}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <span
              className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-glow transition-transform group-hover:rotate-6 overflow-hidden ring-1 ring-white/40"
              style={{ boxShadow: "0 0 24px -4px var(--neon), 0 0 12px -2px var(--brand-glow)" }}
            >
              <img src={logoImg} alt="EasyPrints logo" className="h-10 w-10 object-contain" loading="eager" decoding="async" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Easy<span className="text-gradient">Prints</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-white" }}
                className="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Button
              onClick={() => setOrderOpen(true)}
              className="ml-2 bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow"
            >
              Order Now
            </Button>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg glass text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div
            className="md:hidden mt-2 rounded-2xl p-4 animate-fade-up shadow-elevated"
            style={{
              background: "color-mix(in oklab, oklch(0.10 0.04 265) 92%, transparent)",
              backdropFilter: "blur(20px) saturate(160%)",
              WebkitBackdropFilter: "blur(20px) saturate(160%)",
              border: "1px solid color-mix(in oklab, var(--neon) 35%, transparent)",
              boxShadow: "0 20px 50px -10px var(--brand-glow), 0 0 30px -10px var(--neon)",
            }}
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setOpen(false);
                  setOrderOpen(true);
                }}
                className="w-full mt-2 bg-gradient-brand text-brand-foreground shadow-glow"
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </header>
  );
}
