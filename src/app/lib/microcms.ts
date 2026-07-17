import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
  throw new Error(
    "MicroCMSの環境変数が設定されていません。" +
      ".env.local に MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください。"
  );
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/** MicroCMSが自動付与するシステムフィールド */
type MicroCMSBase = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

/** ブログ記事 */
export type MicroCMSArticle = MicroCMSBase & {
  title: string;
  author: string;
  body: string; // MicroCMSリッチテキスト → HTML文字列
};

/** 記事一覧を取得（公開日降順） */
export async function getArticles() {
  return client.getList<MicroCMSArticle>({
    endpoint: "articles",
    queries: { orders: "-publishedAt", limit: 100 },
  });
}

/** 最新記事をN件取得（トップページ用） */
export async function getLatestArticles(limit = 3) {
  return client.getList<MicroCMSArticle>({
    endpoint: "articles",
    queries: { orders: "-publishedAt", limit },
  });
}

/** 記事1件を取得 */
export async function getArticle(id: string) {
  return client.get<MicroCMSArticle>({
    endpoint: "articles",
    contentId: id,
  });
}
