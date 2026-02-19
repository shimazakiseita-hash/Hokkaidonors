import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  lead?: string;
  children: ReactNode;
  bg?: "white" | "violet";
};

export default function Section({ id, title, lead, children, bg = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${bg === "violet" ? "bg-violet-50/50" : "bg-white"}`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <div className="mb-2 h-1 w-10 rounded-full bg-violet-500" />
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          {lead ? <p className="mt-5 text-lg leading-8 text-slate-600">{lead}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
