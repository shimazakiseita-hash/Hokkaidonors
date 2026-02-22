import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "ブログ",
  description: "Hokkaidonorsの活動レポートや記事を掲載しています。",
  openGraph: {
    title: "ブログ",
    description: "Hokkaidonorsの活動レポートや記事。",
    url: "/news",
    images: ["/og.png"],
  },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function NewsPage() {
  return (
    <Section title="ブログ" lead="活動レポートや取り組みの記録を発信しています。">
      <div className="space-y-6">
        {site.articles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group block rounded-2xl border border-violet-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span>{formatDate(article.publishedAt)}</span>
              {article.updatedAt && (
                <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-600">
                  {formatDate(article.updatedAt)} 更新
                </span>
              )}
              <span>読了時間: {article.readingTime}</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
              {article.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{article.excerpt}</p>
            <p className="mt-4 text-sm font-semibold text-violet-600">続きを読む →</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
