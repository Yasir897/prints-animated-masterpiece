import { useEffect, useState } from "react";
import { Printer } from "lucide-react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="page-loader">
      <div className="flex flex-col items-center gap-5">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow animate-pulse-slow">
          <Printer className="h-8 w-8" />
        </div>
        <div className="text-sm tracking-[0.4em] text-neon font-semibold">EASYPRINTS</div>
        <div className="loader-track" />
      </div>
    </div>
  );
}
