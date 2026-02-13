import Link from "next/link";

type CTAButtonsProps = {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function CTAButtons({ primary, secondary }: CTAButtonsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href={primary.href}
        className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        {primary.label}
      </Link>
      {secondary ? (
        <Link
          href={secondary.href}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}
