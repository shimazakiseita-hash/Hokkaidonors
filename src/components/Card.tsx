import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`card-hover rounded-2xl border border-violet-100 bg-white p-7 shadow-sm ${className}`}
    >
      {children}
    </article>
  );
}
