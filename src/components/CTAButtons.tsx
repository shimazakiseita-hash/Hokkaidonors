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
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700 hover:shadow-lg"
      >
        {primary.label}
      </Link>
      {secondary ? (
        <Link
          href={secondary.href}
          className="inline-flex items-center justify-center rounded-xl border-2 border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-50"
        >
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}
