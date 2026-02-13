"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/app/lib/site";

const navItems = site.routes.filter((route) => route.href !== "/");

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-amber-100 bg-white/95">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-slate-900">
          {site.site.name}
        </Link>
        <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active ? "bg-amber-100 text-amber-900" : "text-slate-700 hover:bg-amber-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
