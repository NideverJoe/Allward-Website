"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg p-1" aria-label="ALLWARD Labs home">
            <Image
              src="/logos/lockup-color.svg"
              alt="ALLWARD Labs"
              width={200}
              height={67}
              priority
              className="h-9 sm:h-10 w-auto"
            />
          </Link>

          <nav className="hidden sm:flex items-center gap-8" aria-label="Main navigation">
            <Link href="/about" className="text-slate hover:text-navy font-medium transition-colors text-sm">
              About
            </Link>
            <Link href="/what-we-build" className="text-slate hover:text-navy font-medium transition-colors text-sm">
              What We Build
            </Link>
          </nav>

          <button
            className="sm:hidden p-2 rounded-lg text-navy hover:bg-cream transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="sm:hidden pb-5 border-t border-cream/80 pt-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-slate hover:text-navy font-medium px-3 py-2 rounded-lg hover:bg-cream transition-colors"
            >
              About
            </Link>
            <Link
              href="/what-we-build"
              onClick={() => setMenuOpen(false)}
              className="text-slate hover:text-navy font-medium px-3 py-2 rounded-lg hover:bg-cream transition-colors"
            >
              What We Build
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
