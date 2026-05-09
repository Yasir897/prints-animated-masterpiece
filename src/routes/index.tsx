import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  FileText, BookOpen, GraduationCap, Newspaper, ClipboardList,
  FileSpreadsheet, Megaphone, Briefcase, Boxes, Upload, Printer, Truck,
  Zap, ShieldCheck, BadgeIndianRupee, Users, Building2, ArrowRight, Star, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-books.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EasyPrints — Printing for Students & Businesses" },
      { name: "description", content: "Premium printing services: books, PDFs, thesis, journals, assignments, flyers and bulk business printing. Fast delivery, student-friendly prices." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: FileText, title: "PDF Printing", desc: "Upload any PDF, get crisp prints in minutes." },
  { icon: BookOpen, title: "Book Printing", desc: "Hardbound & paperback with premium finishes." },
  { icon: GraduationCap, title: "Thesis Printing", desc: "University-grade binding for your final thesis." },
  { icon: Newspaper, title: "Journal Printing", desc: "Research journals with professional layout." },
  { icon: ClipboardList, title: "Assignment Printing", desc: "Same-day printing for college assignments." },
  { icon: FileSpreadsheet, title: "Forms Printing", desc: "Carbon copies, NCR forms and stationery." },
  { icon: Megaphone, title: "Flyers & Brochures", desc: "Eye-catching marketing print collateral." },
  { icon: Briefcase, title: "Business Printing", desc: "Cards, letterheads, reports, presentations." },
  { icon: Boxes, title: "Bulk Printing", desc: "Wholesale rates for schools & enterprises." },
];

const steps = [
  { icon: Upload, title: "Upload your file", desc: "Send us your PDF, DOCX, or images via the order form or WhatsApp." },
  { icon: Printer, title: "We print premium", desc: "High-DPI machines, smooth paper and pro binding." },
  { icon: Truck, title: "Fast delivery", desc: "Doorstep delivery or campus pick-up in record time." },
];

const stats = [
  { value: "24h", label: "Fast delivery", icon: Zap },
  { value: "99%", label: "Quality satisfaction", icon: ShieldCheck },
  { value: "₹0.99", label: "Per page from", icon: BadgeIndianRupee },
  { value: "50K+", label: "Happy students", icon: Users },
  { value: "300+", label: "Bulk clients", icon: Boxes },
  { value: "120+", label: "Schools & Unis", icon: Building2 },
];

const testimonials = [
  { name: "Aarav Mehta", role: "PhD Scholar, IIT", text: "Got my 280-page thesis printed and bound overnight. The quality blew my supervisor away." },
  { name: "Sara Khan", role: "MBA Student", text: "Affordable, fast, and the team genuinely cares. My go-to for every assignment." },
  { name: "Rohit Verma", role: "Marketing Lead, Nova Co.", text: "We order brochures in bulk every quarter — colours pop, paper feels premium." },
  { name: "Diya Patel", role: "BCom, Delhi University", text: "Uploaded a PDF at midnight, picked it up before class. Lifesaver!" },
];

function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-ink isolate">
      <div ref={ref} className="absolute inset-0 z-0">
        <img src={heroImg} alt="Library with stacked books" className="h-full w-full object-cover scale-110" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-radial opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      <Particles count={30} />
      <div className="absolute inset-0 spotlight pointer-events-none z-0" />

      <div className="absolute top-1/4 left-10 h-32 w-32 rounded-full bg-gradient-brand opacity-30 blur-3xl animate-float z-0" />
      <div className="absolute bottom-1/4 right-10 h-40 w-40 rounded-full bg-fuchsia-500/40 blur-3xl animate-float z-0" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-white drop-shadow-lg">
        <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Trusted by 120+ schools & universities
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Professional Printing<br />
          <span className="text-gradient">for Students & Businesses</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          EasyPrints delivers fast, affordable, premium-quality printing — books, PDFs,
          assignments, journals, thesis, forms and bulk business orders. From first page to final delivery.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow h-12 px-8 text-base">
              Order Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/5 border-white/30 text-white hover:bg-white/10 hover:text-white">
              Explore Services
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { v: "50K+", l: "Orders" },
            { v: "24h", l: "Delivery" },
            { v: "4.9★", l: "Rating" },
            { v: "100%", l: "Quality" },
          ].map((s) => (
            <div key={s.l} className="glass-dark rounded-xl p-4">
              <div className="text-2xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What we print</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Services for every page you need</h2>
          <p className="mt-4 text-muted-foreground">From a single assignment to bulk business orders — we handle it all with care and precision.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal group relative overflow-hidden rounded-2xl border bg-card p-7 hover-lift"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-24 bg-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How it works</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Three simple steps</h2>
          <p className="mt-4 text-muted-foreground">From upload to delivery, faster than your coffee break.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="reveal relative text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow">
                <Icon className="h-9 w-9" />
                <span className="absolute -top-2 -right-2 grid h-8 w-8 place-items-center rounded-full bg-background border-2 border-primary text-primary text-sm font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why EasyPrints</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Numbers that build trust</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <div key={label} className="reveal group rounded-2xl border bg-card p-7 hover-lift relative overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary group-hover:bg-gradient-brand group-hover:text-brand-foreground transition-all">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-5xl font-bold text-gradient">{value}</div>
              <div className="mt-2 text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [...testimonials, ...testimonials];
  return (
    <section className="py-24 bg-secondary/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Loved by students & businesses</h2>
        </div>
      </div>
      <div className="mt-14 relative">
        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {items.map((t, i) => (
            <div key={i} className="w-[360px] shrink-0 rounded-2xl border bg-card p-7 shadow-elevated">
              <Quote className="h-7 w-7 text-primary/30" />
              <p className="mt-3 text-foreground/90">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-brand-foreground font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-hero p-10 sm:p-16 text-white shadow-elevated">
          <div className="absolute inset-0 bg-gradient-radial opacity-60" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl animate-float" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Ready to print? <br />
              <span className="text-gradient">Let's get started.</span>
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Upload your file in seconds. We'll handle the rest — perfectly printed,
              beautifully bound, delivered fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="h-12 px-8 bg-white text-ink hover:bg-white/90 shadow-glow">
                  Place an Order <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="h-12 px-8 bg-white/5 border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
