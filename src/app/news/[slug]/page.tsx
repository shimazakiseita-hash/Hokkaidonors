import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site, ArticleBlock } from "@/app/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return site.articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = site.articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/news/${article.slug}`,
      images: ["/og.png"],
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function renderBlock(block: ArticleBlock, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="text-base leading-8 text-slate-700">
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold text-slate-900 pt-4">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="rounded-xl border-l-4 border-violet-400 bg-violet-50 py-4 pl-6 pr-4"
        >
          <p className="text-base leading-8 text-slate-700 italic">{block.text}</p>
          {block.attribution && (
            <p className="mt-2 text-sm font-semibold text-violet-600">— {block.attribution}</p>
          )}
        </blockquote>
      );
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = site.articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      {/* Back */}
      <Link
        href="/news"
        className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-800"
      >
        ← ブログ一覧へ
      </Link>

      {/* Meta */}
      <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span>{formatDate(article.publishedAt)}</span>
        {article.updatedAt && (
          <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-600">
            {formatDate(article.updatedAt)} 更新
          </span>
        )}
        <span>読了時間: {article.readingTime}</span>
        <span>by {article.author}</span>
      </div>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {article.title}
      </h1>

      {/* Divider */}
      <div className="my-8 h-px bg-violet-100" />

      {/* Body */}
      <div className="space-y-6">
        {article.body.map((block, i) => renderBlock(block, i))}
      </div>

      {/* Footer nav */}
      <div className="mt-16 border-t border-violet-100 pt-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-800"
        >
          ← ブログ一覧へ戻る
        </Link>
      </div>
    </div>
  );
}
