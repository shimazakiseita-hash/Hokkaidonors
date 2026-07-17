import type { MetadataRoute } from "next";
import { site } from "@/app/lib/site";
import { getArticles } from "@/app/lib/microcms";

export const revalidate = 3600; // 1時間ごとに再生成

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

  // 静的ページ
  const staticRoutes: MetadataRoute.Sitemap = site.routes.map((route) => ({
    url: `${base}${route.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.href === "/" ? 1.0 : 0.8,
  }));

  // ブログ記事（MicroCMSから取得）
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const { contents: articles } = await getArticles();
    articleRoutes = articles.map((article) => ({
      url: `${base}/news/${article.id}`,
      lastModified: new Date(article.revisedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    // ビルド時にAPIが落ちていても静的ルートだけで継続
  }

  return [...staticRoutes, ...articleRoutes];
}
