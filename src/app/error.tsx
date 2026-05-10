"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground mb-6">
        We encountered an unexpected error while loading the portfolio sections.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Try again
      </button>
    </div>
  );
}
