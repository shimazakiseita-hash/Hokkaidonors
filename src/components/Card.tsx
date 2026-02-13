import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article className={`rounded-xl border border-slate-200 bg-white p-7 shadow-md ${className}`}>
      {children}
    </article>
  );
}
