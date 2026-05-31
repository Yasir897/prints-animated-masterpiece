import { createFileRoute } from "@tanstack/react-router";
import { RouteSkeleton } from "@/components/site/RouteSkeleton";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ContactOptions } from "@/components/site/ContactOptions";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Order — EasyPrints" },
      { name: "description", content: "Place a printing order, upload files, ask questions, or chat with us on WhatsApp." },
      { property: "og:title", content: "Order with EasyPrints" },
      { property: "og:description", content: "Upload your file, get a quick quote, fast delivery guaranteed." },
    ],
  }),
  pendingComponent: RouteSkeleton,
  component: ContactPage,
});

const faqs = [
  { q: "How fast can you deliver?", a: "Most orders are ready within 24–48 hours. Same-day delivery is available for assignments and small orders within city limits." },
  { q: "What file formats do you accept?", a: "We accept PDF, DOCX, JPG, PNG and most standard formats. PDF is preferred for the most accurate output." },
  { q: "Do you deliver across Pakistan?", a: "Yes — we deliver to every major city in Pakistan and offer international shipping for thesis, books and bulk orders." },
  { q: "Can I order from another country?", a: "Absolutely. International delivery is available for thesis, books and bulk orders. Timelines vary by destination." },
  { q: "Do you do colour printing?", a: "Yes — we offer both B/W and full-colour printing on a variety of paper stocks and finishes." },
];

function ContactPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Toaster />

      <section className="relative pt-36 pb-16 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-block rounded-full glass-dark px-4 py-1.5 text-xs font-medium">Order & Contact</span>
          <h1 className="mt-5 text-5xl sm:text-7xl font-bold leading-[1.05]">
            Let's get your <span className="text-gradient">project printed.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            Reach us instantly on WhatsApp, email or a direct call — we respond within minutes during business hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Order Now</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
              Pick your <span className="text-gradient">channel</span>
            </h2>
            <p className="mt-4 text-white/70">
              Choose how you'd like to place your order — every option is fast, friendly and goes straight to our team.
            </p>
          </div>
          <div className="mt-14">
            <ContactOptions />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 reveal rounded-3xl overflow-hidden border shadow-elevated">
            <iframe
              title="EasyPrints location"
              src="https://www.google.com/maps?q=Lahore%2C%20Pakistan&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <div className="reveal rounded-3xl bg-gradient-hero p-8 text-white shadow-elevated relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial opacity-50" />
              <div className="relative">
                <h3 className="text-xl font-bold">Get in touch</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="text-white/60 text-xs">Phone</div>
                      <a href="tel:+923296972908" className="story-link hover:text-white transition-colors">+92 329 6972908</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="text-white/60 text-xs">Email</div>
                      <a href="mailto:owner@easyprints.co" className="story-link hover:text-white transition-colors">owner@easyprints.co</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5" /><div><div className="text-white/60 text-xs">Address</div>Lahore, Pakistan</div></li>
                </ul>
              </div>
            </div>

            <div className="reveal rounded-3xl border bg-card p-8">
              <h3 className="text-xl font-bold">FAQs</h3>
              <Accordion type="single" collapsible className="mt-4">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`f-${i}`}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
