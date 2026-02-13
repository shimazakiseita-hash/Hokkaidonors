import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

export default function Section({ id, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-amber-100 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          {lead ? <p className="mt-5 text-lg leading-8 text-slate-600">{lead}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
