import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
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
  component: ContactPage,
});

const orderSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().min(1, "Select a service"),
  quantity: z.string().min(1, "Enter quantity"),
  message: z.string().trim().max(1000).optional(),
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
  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = orderSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Order received! We'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
    setFile(null);
  }

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
            Fill out the form, upload your file, or message us on WhatsApp. We respond within minutes during business hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 reveal">
            <div className="rounded-3xl border bg-card p-6 sm:p-10 shadow-elevated">
              <h2 className="text-2xl font-bold">Place an order</h2>
              <p className="mt-1 text-sm text-muted-foreground">All fields marked with * are required.</p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" name="name" placeholder="Aarav Mehta" maxLength={80} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={160} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+92 300 1234567" maxLength={20} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="service">Service *</Label>
                  <Select name="service" required>
                    <SelectTrigger id="service"><SelectValue placeholder="Choose a service" /></SelectTrigger>
                    <SelectContent>
                      {["PDF Printing","Book Printing","Thesis Printing","Journal Printing","Assignment Printing","Forms Printing","Flyers & Brochures","Business Printing","Bulk Printing"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input id="quantity" name="quantity" type="number" min={1} placeholder="100" required />
                </div>
                <div className="grid gap-2">
                  <Label>Upload file</Label>
                  <label className="flex items-center gap-3 cursor-pointer rounded-md border border-dashed border-input bg-background px-3 py-2 text-sm hover:bg-accent transition-colors">
                    <Upload className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate text-muted-foreground">{file ? file.name : "PDF, DOCX or image"}</span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,image/*"
                      onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} maxLength={1000} placeholder="Tell us about binding, color, deadline…" />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" disabled={submitting} className="bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow h-12 px-8">
                    {submitting ? "Sending…" : <>Submit Order <Send className="ml-1 h-4 w-4" /></>}
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-10 reveal rounded-3xl overflow-hidden border shadow-elevated">
              <iframe
                title="EasyPrints location"
                src="https://www.google.com/maps?q=Lahore%2C%20Pakistan&output=embed"
                className="w-full h-[360px] border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="reveal rounded-3xl bg-gradient-hero p-8 text-white shadow-elevated relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial opacity-50" />
              <div className="relative">
                <h3 className="text-xl font-bold">Get in touch</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3"><Phone className="h-5 w-5 mt-0.5" /><div><div className="text-white/60 text-xs">Phone</div>+92 300 1234567</div></li>
                  <li className="flex items-start gap-3"><Mail className="h-5 w-5 mt-0.5" /><div><div className="text-white/60 text-xs">Email</div>hello@easyprints.pk</div></li>
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
