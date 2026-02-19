"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/app/lib/site";

const navItems = site.routes.filter((route) => route.href !== "/");

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-violet-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.jpg"
            alt="Hokkaidonors"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            {site.site.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-violet-100 text-violet-800"
                    : "text-slate-600 hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition hover:bg-violet-50 md:hidden"
          aria-label="メニューを開く"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="animate-fade-in border-t border-violet-100 bg-white px-5 pb-4 pt-2 md:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  active
                    ? "bg-violet-100 text-violet-800"
                    : "text-slate-600 hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
