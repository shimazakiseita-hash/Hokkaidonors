import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticles, getArticle } from "@/app/lib/microcms";

export const revalidate = 60; // ISR: 60秒ごとに自動更新

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { contents } = await getArticles();
  return contents.map((a) => ({ slug: a.id }));
}

function toExcerpt(html: string, len = 100) {
  const text = html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  return text.length > len ? text.slice(0, len) + "…" : text;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticle(slug);
    const description = toExcerpt(article.body);
    return {
      title: article.title,
      description,
      openGraph: {
        title: article.title,
        description,
        url: `/news/${article.id}`,
        images: ["/og.png"],
      },
    };
  } catch {
    return {};
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticle(slug);
  } catch {
    notFound();
  }

  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hokkaidonors.jp";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: toExcerpt(article.body),
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "Hokkaidonors",
      url: base,
    },
    datePublished: article.publishedAt,
    dateModified: article.revisedAt,
    url: `${base}/news/${article.id}`,
    inLanguage: "ja",
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        {article.revisedAt !== article.publishedAt && (
          <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-600">
            {formatDate(article.revisedAt)} 更新
          </span>
        )}
        <span>by {article.author}</span>
      </div>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {article.title}
      </h1>

      {/* Divider */}
      <div className="my-8 h-px bg-violet-100" />

      {/* Body (MicroCMS rich text → HTML) */}
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

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
