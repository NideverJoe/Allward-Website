"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy text-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg"
              aria-label="ALLWARD Labs home"
            >
              <Image
                src="/logos/lockup-reversed.svg"
                alt="ALLWARD Labs"
                width={200}
                height={67}
                className="h-9 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-cream/60 max-w-xs leading-relaxed">
              Accommodations for the real world. Available to everyone.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col sm:flex-row gap-3 sm:gap-8">
            <Link href="/about" className="text-cream/70 hover:text-cream transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/what-we-build" className="text-cream/70 hover:text-cream transition-colors text-sm font-medium">
              What We Build
            </Link>
            <Link href="/#contact" className="text-cream/70 hover:text-cream transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-cream/10">
          <p className="text-xs text-cream/40">
            &copy; {year ?? ""} ALLWARD Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
