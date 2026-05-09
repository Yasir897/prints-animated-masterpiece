import { useState, type ReactNode } from "react";
import { OrderModal } from "./OrderModal";

interface Props {
  children: ReactNode;
  className?: string;
}

export function OrderNowButton({ children, className }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <OrderModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
