import { Link } from "@tanstack/react-router";
import { Printer, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-ink text-white">
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand">
                <Printer className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">EasyPrints</span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Premium printing for students, schools, universities & businesses.
              Fast. Affordable. Trusted.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Order Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@easyprints.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Knowledge Park, India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Follow</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 hover:bg-gradient-brand transition-all hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} EasyPrints. All rights reserved.</p>
          <p>Crafted with care for learners & creators.</p>
        </div>
      </div>
    </footer>
  );
}
