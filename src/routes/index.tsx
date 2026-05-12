import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  FileText, BookOpen, GraduationCap, Newspaper, ClipboardList,
  FileSpreadsheet, Megaphone, Briefcase, Boxes, Upload, Printer, Truck,
  ArrowRight, Clock, Globe2, Plane, MapPin, Users, Zap, Package, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Particles } from "@/components/site/Particles";
import { OrderNowButton } from "@/components/site/OrderNowButton";
import { WriteReview } from "@/components/site/WriteReview";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";
import heroImg from "@/assets/hero-books.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EasyPrints — Printing for Students & Businesses" },
      { name: "description", content: "Premium printing services: books, PDFs, thesis, journals, assignments, flyers and bulk business printing. Fast 24–48 hour delivery across Pakistan and worldwide." },
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
  { icon: Boxes, title: "Bulk Printing", desc: "Wholesale orders for schools & enterprises." },
];

const steps = [
  { icon: Upload, title: "Upload your file", desc: "Send us your PDF, DOCX, or images via the order form or WhatsApp." },
  { icon: Printer, title: "We print premium", desc: "High-DPI machines, smooth paper and pro binding." },
  { icon: Truck, title: "Fast delivery", desc: "Doorstep delivery or campus pick-up in record time." },
];

function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Toaster />
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <DeliverySection />
      <WriteReview />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Hero() {
  const bgRef = useParallax<HTMLDivElement>(120);
  const orbA = useParallax<HTMLDivElement>(60);
  const orbB = useParallax<HTMLDivElement>(-80);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-ink isolate">
      <div ref={bgRef} className="parallax absolute inset-0 z-0">
        <img src={heroImg} alt="Library with stacked books" className="h-full w-full object-cover scale-110" width={1920} height={1280} loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-radial opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      <Particles count={30} />
      <div className="absolute inset-0 spotlight pointer-events-none z-0" />

      <div ref={orbA} className="parallax absolute top-1/4 left-10 h-32 w-32 rounded-full bg-gradient-brand opacity-30 blur-3xl float-slow z-0" />
      <div ref={orbB} className="parallax absolute bottom-1/4 right-10 h-40 w-40 rounded-full bg-fuchsia-500/40 blur-3xl float-slower z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-white drop-shadow-lg">
        <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Premium printing for students & businesses
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Professional Printing<br />
          <span className="text-gradient">for Students & Businesses</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          EasyPrints delivers fast, high-quality printing — books, PDFs,
          assignments, journals, thesis, forms and bulk business orders. From first page to final delivery.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <OrderNowButton className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow h-12 px-8 text-base font-medium transition">
            Order Now <ArrowRight className="h-4 w-4" />
          </OrderNowButton>
          <Link to="/services">
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/5 border-white/30 text-white hover:bg-white/10 hover:text-white">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What we print</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Services for every page you need</h2>
          <p className="mt-4 text-muted-foreground">From a single assignment to bulk business orders — we handle it all with care and precision.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal-scale neon-border group relative overflow-hidden rounded-2xl glass p-7 hover-lift"
              data-reveal-delay={i * 70}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl" />
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

function WhyChooseUs() {
  const bgRef = useParallax<HTMLDivElement>(60);
  const items = [
    { icon: Users, title: "Built for Students & Businesses", desc: "Tailored printing for assignments, thesis, marketing collateral & enterprise needs." },
    { icon: Zap, title: "Fast & Reliable Printing", desc: "High-DPI machines and a streamlined workflow keep deadlines stress-free." },
    { icon: GraduationCap, title: "University & Thesis Printing", desc: "Premium binding and university-grade finishing — exactly to spec." },
    { icon: Package, title: "Bulk Printing Solutions", desc: "Wholesale-friendly pricing and capacity for schools, institutes & enterprises." },
    { icon: MapPin, title: "Delivery Across Pakistan", desc: "Doorstep delivery to every major city — Karachi, Lahore, Islamabad and beyond." },
    { icon: Plane, title: "International Delivery Available", desc: "Global shipping for thesis, books and bulk orders — wherever you are." },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div ref={bgRef} className="parallax absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[40rem] rounded-full bg-gradient-brand opacity-10 blur-3xl float-slower pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Why EasyPrints
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Premium printing, <span className="text-gradient">trusted by all.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for students, universities and businesses — every order handled with care and precision.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal-up neon-border group relative overflow-hidden rounded-2xl glass p-7 hover-lift"
              data-reveal-delay={i * 90}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl" />
              <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-fuchsia-500/30 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl" />
              <div
                className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all float-slow"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">{title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const bgRef = useParallax<HTMLDivElement>(50);
  return (
    <section className="py-24 bg-secondary/40 relative overflow-hidden">
      <div ref={bgRef} className="parallax absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How it works</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Three simple steps</h2>
          <p className="mt-4 text-muted-foreground">From upload to delivery, faster than your coffee break.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="reveal-up relative text-center" data-reveal-delay={i * 160}>
              <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow float-slow" style={{ animationDelay: `${i * 0.6}s` }}>
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

function DeliverySection() {
  const orbRef = useParallax<HTMLDivElement>(80);
  const features = [
    {
      icon: Clock,
      title: "Delivery within 24–48 Hours",
      desc: "Lightning-fast turnaround on every order — most prints ready and dispatched the same or next day.",
    },
    {
      icon: MapPin,
      title: "Available All Over Pakistan",
      desc: "Doorstep delivery to every city — Karachi, Lahore, Islamabad, Peshawar, Quetta and beyond.",
    },
    {
      icon: Plane,
      title: "International Delivery Available",
      desc: "Shipping worldwide for thesis, books and bulk orders — wherever you study or do business.",
    },
    {
      icon: Truck,
      title: "Real-Time Order Tracking",
      desc: "Stay updated from print floor to doorstep with status updates at every step.",
    },
  ];

  const variants = ["reveal-up", "reveal-left", "reveal-right", "reveal-up"];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-25 pointer-events-none" />
      <div ref={orbRef} className="parallax absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-gradient-brand opacity-20 blur-3xl float-slower" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            <Globe2 className="h-3.5 w-3.5" /> Delivery & Reach
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Fast, reliable, <span className="text-gradient">worldwide.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your campus dorm to global business hubs — EasyPrints reaches you wherever you are.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`${variants[i] ?? "reveal-up"} neon-border group rounded-2xl glass p-7 hover-lift relative overflow-hidden`}
              data-reveal-delay={i * 110}
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500" />
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
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
        <div className="reveal-scale relative overflow-hidden rounded-3xl bg-gradient-hero p-10 sm:p-16 text-white shadow-elevated">
          <Particles count={24} />
          <div className="absolute inset-0 bg-gradient-radial opacity-60" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-500/40 blur-3xl float-slower" />
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
              <OrderNowButton className="inline-flex items-center justify-center gap-2 rounded-md h-12 px-8 bg-white text-ink hover:bg-white/90 shadow-glow font-medium transition">
                Place an Order <ArrowRight className="h-4 w-4" />
              </OrderNowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
