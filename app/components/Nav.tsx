"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E8EAEB]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold text-[#1B3139] tracking-tight">
            Abakka
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/bundles" className="text-sm font-medium text-[#1B3139] hover:text-[#EB1600] transition-colors">
            Bundles
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium text-[#1B3139] hover:text-[#EB1600] transition-colors">
            How It Works
          </Link>
          <Link href="/about" className="text-sm font-medium text-[#1B3139] hover:text-[#EB1600] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-[#1B3139] hover:text-[#EB1600] transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-[#EB1600] text-white text-sm font-semibold hover:bg-[#CC1300] transition-colors"
          >
            Book a Free Health Check
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1B3139]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E8EAEB] px-6 py-4 flex flex-col gap-4">
          <Link href="/bundles" onClick={() => setOpen(false)} className="text-sm font-medium text-[#1B3139]">Bundles</Link>
          <Link href="/how-it-works" onClick={() => setOpen(false)} className="text-sm font-medium text-[#1B3139]">How It Works</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-sm font-medium text-[#1B3139]">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-sm font-medium text-[#1B3139]">Contact</Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#EB1600] text-white text-sm font-semibold"
          >
            Book a Free Health Check
          </Link>
        </div>
      )}
    </header>
  );
}
