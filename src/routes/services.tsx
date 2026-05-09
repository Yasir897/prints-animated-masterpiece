import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";
import bookImg from "@/assets/service-book.jpg";
import thesisImg from "@/assets/service-thesis.jpg";
import bizImg from "@/assets/service-business.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — EasyPrints" },
      { name: "description", content: "Detailed printing services: books, journals, thesis, assignments, notes, business prints, flyers and bulk solutions." },
      { property: "og:title", content: "EasyPrints Services" },
      { property: "og:description", content: "Books, thesis, journals, business and bulk printing — explore everything we offer." },
    ],
  }),
  component: ServicesPage,
});

const detailed = [
  {
    title: "Book Printing",
    img: bookImg,
    desc: "Premium hardbound and paperback book printing for authors, publishers, and self-publishers. Custom covers, smooth paper, perfect binding.",
    features: ["Hardcover & paperback", "Color or B/W interior", "Perfect binding", "Custom dust jackets"],
    price: "from ₹120 / book",
  },
  {
    title: "University Journals",
    img: thesisImg,
    desc: "Research-grade journals printed with professional typesetting, archival-quality paper, and academic finishes ready for publication.",
    features: ["ISSN-ready layouts", "Color plates", "Glossy / matte finish", "Volume / issue numbering"],
    price: "from ₹3 / page",
  },
  {
    title: "Thesis Printing",
    img: thesisImg,
    desc: "University-spec thesis printing with hard binding, gold foil titles, and the formatting your committee expects.",
    features: ["Hard binding", "Gold/silver foil titles", "Acid-free paper", "Multiple copies discount"],
    price: "from ₹450 / copy",
  },
  {
    title: "Assignment Printing",
    img: bookImg,
    desc: "Same-day assignment printing with neat spiral binding or stapling. Drop a PDF — collect it before class.",
    features: ["Spiral / staple binding", "Single or double-sided", "Same-day pickup", "Student pricing"],
    price: "from ₹0.99 / page",
  },
  {
    title: "Notes Printing",
    img: bookImg,
    desc: "Class notes, study guides, and exam prep printed in bulk for student groups and coaching centers.",
    features: ["Bulk discounts", "Color highlights", "Index tabs", "Group orders"],
    price: "from ₹0.80 / page",
  },
  {
    title: "Business Printing",
    img: bizImg,
    desc: "Professional letterheads, business cards, presentations, reports and corporate stationery that look as sharp as your brand.",
    features: ["Premium card stock", "Foil & spot UV", "Pantone matching", "Corporate accounts"],
    price: "from ₹2 / sheet",
  },
  {
    title: "Forms & Flyers",
    img: bizImg,
    desc: "NCR forms, marketing flyers, brochures and event collateral printed at scale with vivid colour reproduction.",
    features: ["NCR / carbonless", "Tri-fold / bi-fold", "Event flyers", "Express turnaround"],
    price: "from ₹1.50 / piece",
  },
  {
    title: "Bulk Printing Solutions",
    img: bookImg,
    desc: "Wholesale printing for schools, universities, coaching institutes and enterprises with dedicated account managers.",
    features: ["Volume pricing", "Dedicated PM", "Scheduled deliveries", "Custom kitting"],
    price: "Custom quote",
  },
];

function ServicesPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <section className="relative pt-36 pb-16 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-block rounded-full glass-dark px-4 py-1.5 text-xs font-medium">Our Services</span>
          <h1 className="mt-5 text-5xl sm:text-7xl font-bold leading-[1.05] max-w-3xl">
            Every print you need, <span className="text-gradient">done beautifully.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            From a single assignment to ten thousand brochures — explore the full range of EasyPrints services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {detailed.map((s, i) => (
            <div
              key={s.title}
              className={`reveal grid gap-10 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-3xl group-hover:opacity-40 transition-opacity" />
                <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">0{i + 1}</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{s.title}</h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand text-brand-foreground">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <div className="rounded-xl glass px-4 py-2.5">
                    <div className="text-xs text-muted-foreground">Pricing</div>
                    <div className="font-semibold text-gradient">{s.price}</div>
                  </div>
                  <Link to="/contact">
                    <Button className="bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow h-11 px-6">
                      Order this <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
