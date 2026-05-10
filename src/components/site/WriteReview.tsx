import { useEffect, useRef, useState } from "react";
import { Star, Send, Quote, ImagePlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  image?: string;
}

const STORAGE_KEY = "easyprints_reviews";

export function WriteReview() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setReviews(JSON.parse(raw));
    } catch {}
  }, []);

  function onPickImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      toast.error("Image too large (max 4MB)");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(file);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !text.trim() || rating === 0) {
      toast.error("Please fill all fields and choose a rating");
      return;
    }
    const newReview: Review = {
      id: crypto.randomUUID(),
      name: name.trim().slice(0, 60),
      text: text.trim().slice(0, 500),
      rating,
      date: new Date().toISOString(),
      image: image ?? undefined,
    };
    const updated = [newReview, ...reviews].slice(0, 50);
    setReviews(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    setName("");
    setText("");
    setRating(0);
    setImage(null);
    if (fileRef.current) fileRef.current.value = "";
    setSubmitted(true);
    toast.success("Thank you for your review!");
    setTimeout(() => setSubmitted(false), 2200);
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Reviews</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Write a Review</h2>
          <p className="mt-4 text-muted-foreground">
            Share your experience with EasyPrints — your feedback helps us improve.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={submit}
            className="reveal relative rounded-3xl glass neon-border p-7 sm:p-9 shadow-elevated"
          >
            <h3 className="text-xl font-bold">Your review</h3>
            <div className="mt-6 grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="rname">Your name</Label>
                <Input
                  id="rname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ali Raza"
                  maxLength={60}
                />
              </div>
              <div className="grid gap-2">
                <Label>Rating</Label>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => {
                    const active = (hover || rating) >= n;
                    return (
                      <button
                        key={n}
                        type="button"
                        onMouseEnter={() => setHover(n)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(n)}
                        aria-label={`${n} star${n > 1 ? "s" : ""}`}
                        className="transition-transform hover:scale-125"
                      >
                        <Star
                          className={`h-7 w-7 transition-all ${active ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                          style={active ? { filter: "drop-shadow(0 0 8px rgb(251 191 36 / 0.7))" } : undefined}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rtext">Your review</Label>
                <Textarea
                  id="rtext"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us about your experience…"
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow h-12 px-8 relative overflow-hidden"
              >
                {submitted ? (
                  <span className="inline-flex items-center gap-2 animate-fade-up">
                    ✓ Submitted
                  </span>
                ) : (
                  <>
                    Submit Review <Send className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Reviews list */}
          <div className="reveal space-y-4">
            {reviews.length === 0 ? (
              <div className="rounded-3xl glass neon-border p-10 text-center">
                <Quote className="h-10 w-10 text-primary/40 mx-auto" />
                <h4 className="mt-4 text-lg font-semibold">No reviews yet</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Be the first to share your experience with EasyPrints.
                </p>
              </div>
            ) : (
              reviews.map((r) => (
                <div
                  key={r.id}
                  className="rounded-2xl glass neon-border p-6 hover-lift"
                  style={{ animation: "fade-up 0.5s ease-out both" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-brand-foreground font-semibold">
                      {r.name[0]?.toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(r.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${i < r.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground/90">{r.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
