import { Skeleton } from "@/components/ui/skeleton";

export function RouteSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <Skeleton className="h-6 w-40 rounded-full" />
        <Skeleton className="mt-6 h-12 w-3/4" />
        <Skeleton className="mt-3 h-12 w-1/2" />
        <Skeleton className="mt-6 h-5 w-2/3" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
