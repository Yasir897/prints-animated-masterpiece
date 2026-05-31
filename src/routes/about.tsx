import { createFileRoute, Link } from "@tanstack/react-router";
import { RouteSkeleton } from "@/components/site/RouteSkeleton";
import { Sparkles, Target, Heart, Rocket, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Particles } from "@/components/site/Particles";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-books.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EasyPrints" },
      { name: "description", content: "EasyPrints is a futuristic printing brand built for students, teachers, and businesses. Discover our story, mission, and team." },
      { property: "og:title", content: "About EasyPrints" },
      { property: "og:description", content: "Premium printing for the next generation of students and businesses." },
    ],
  }),
  pendingComponent: RouteSkeleton,
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", desc: "Make premium printing instantly accessible to every student, teacher and business — at student-friendly prices." },
  { icon: Sparkles, title: "Vision", desc: "Be the most loved printing brand for academic and creative work across the country." },
  { icon: Heart, title: "Values", desc: "Speed, honesty, craft and care. Every page we print represents someone's hard work." },
];

const milestones = [
  { year: "2019", title: "Started in a campus corner", desc: "Two engineers, one printer, midnight assignment runs." },
  { year: "2021", title: "First university partnership", desc: "Official thesis & journal printing partner across 12 universities." },
  { year: "2023", title: "50,000+ orders", desc: "Crossed half a lakh happy students and 200+ business clients." },
  { year: "2025", title: "Going global", desc: "Nationwide delivery across Pakistan, international shipping, and a futuristic upload portal." },
];

function AboutPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-ink isolate">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-background" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0 bg-gradient-radial opacity-70" />
        </div>
        <Particles count={28} />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-neon" /> Our Story
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl sm:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We print the work that <span className="text-gradient">shapes futures.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            EasyPrints started as a tiny campus print shop. Today we power assignments, theses, journals,
            books and brochures for thousands of students and businesses across Pakistan and beyond.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <span className="text-sm font-semibold text-neon uppercase tracking-[0.3em]">Why we exist</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Built for makers & learners</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="reveal neon-border group rounded-2xl glass p-7 hover-lift" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="text-sm font-semibold text-neon uppercase tracking-[0.3em]">The Journey</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold">From dorm room to nationwide</h2>
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[oklch(0.78_0.2_250/0.6)] to-transparent" />
            <div className="space-y-14">
              {milestones.map((m, i) => (
                <div key={m.year} className={`reveal grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`} style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="md:[direction:ltr]">
                    <div className="neon-border rounded-2xl glass p-6">
                      <div className="text-3xl font-bold text-gradient">{m.year}</div>
                      <h3 className="mt-1 text-xl font-semibold">{m.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center md:[direction:ltr]">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-brand-foreground shadow-glow ring-4 ring-background">
                      <Rocket className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "50K+", l: "Orders delivered", icon: Award },
            { v: "120+", l: "Schools & Unis", icon: Users },
            { v: "4.9★", l: "Average rating", icon: Sparkles },
            { v: "24h", l: "Avg turnaround", icon: Rocket },
          ].map((s, i) => (
            <div key={s.l} className="reveal neon-border rounded-2xl glass p-7 text-center hover-lift" style={{ transitionDelay: `${i * 80}ms` }}>
              <s.icon className="mx-auto h-6 w-6 text-neon" />
              <div className="mt-4 text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-hero p-10 sm:p-16 text-white shadow-elevated">
            <Particles count={20} />
            <div className="absolute inset-0 bg-gradient-radial opacity-60" />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Want to print with us? <br />
                <span className="text-gradient">Let's make it happen.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="h-12 px-8 bg-white text-ink hover:bg-white/90 shadow-glow">
                    Place an Order <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="h-12 px-8 bg-white/5 border-white/30 text-white hover:bg-white/10 hover:text-white">
                    See services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
