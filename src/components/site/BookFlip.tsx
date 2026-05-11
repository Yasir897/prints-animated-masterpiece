/**
 * Elegant animated book with softly flipping pages. Pure CSS 3D.
 * Realistic, subtle, premium — not cartoonish.
 */
export function BookFlip({ className = "" }: { className?: string }) {
  return (
    <div className={`book-flip ${className}`} aria-hidden>
      <div className="book-flip__stage">
        {/* Book base */}
        <div className="book-flip__cover" />
        <div className="book-flip__pages">
          <span className="book-flip__page" style={{ animationDelay: "0s" }} />
          <span className="book-flip__page" style={{ animationDelay: "1.4s" }} />
          <span className="book-flip__page" style={{ animationDelay: "2.8s" }} />
          <span className="book-flip__page book-flip__page--static" />
        </div>
        <div className="book-flip__spine" />
        <div className="book-flip__shadow" />
      </div>
    </div>
  );
}
