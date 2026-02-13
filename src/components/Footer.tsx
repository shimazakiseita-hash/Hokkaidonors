import Link from "next/link";
import { site } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-amber-50/50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-900">{site.site.nameJa}</p>
          <p className="mt-1 text-sm text-slate-600">{site.site.description}</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href={site.site.links.x}
            className="text-slate-600 hover:text-slate-900"
            target="_blank"
            rel="noreferrer"
          >
            X
          </Link>
          <Link
            href={site.site.links.instagram}
            className="text-slate-600 hover:text-slate-900"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </Link>
        </div>
      </div>
      <p className="border-t border-amber-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.site.name}. All rights reserved.
      </p>
    </footer>
  );
}
