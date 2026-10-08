# Hokkaidonors 公式サイト

学生団体 Hokkaidonors の公式サイト（https://hokkaidonors.com ）のソースコードです。
Next.js（App Router）+ Tailwind CSS で作られており、Vercel でホスティングしています。

## ローカルで動かす

必要なもの: Node.js 20.9 以上

```bash
npm install
npm run dev   # http://localhost:3000 で確認
```

ブログ記事を microCMS から取得するため、プロジェクト直下に `.env.local` を作り、次の2つを設定してください（値は管理者に確認）。

```
MICROCMS_SERVICE_DOMAIN=...
MICROCMS_API_KEY=...
```

## フォルダ構成

```
src/
├── app/                  各ページ（フォルダ名がそのまま URL になる）
│   ├── page.tsx          トップ        /
│   ├── activities/       活動・実績    /activities
│   ├── news/             ブログ        /news, /news/[記事ID]
│   ├── partner/          企業・自治体の方へ /partner
│   ├── join/             学生の方へ    /join
│   ├── contact/          お問い合わせ  /contact（FormSubmit 経由で Gmail に届く）
│   ├── layout.tsx        全ページ共通のレイアウト・メタ情報
│   └── lib/
│       ├── site.ts       団体情報・メンバー数・局紹介・活動一覧・FAQ などのテキストデータ
│       └── microcms.ts   microCMS からブログ記事を取得する処理
└── components/           ヘッダー・フッター・カードなどの共通部品

public/
├── images/               サイトで使う画像（下記ルール参照）
├── og.png                SNS でシェアされたときのサムネイル
├── llms.txt              AI 向けの団体紹介テキスト
└── google*.html          Google Search Console の所有権確認用（削除しない）
```

## よくある更新作業

| やりたいこと | 編集する場所 |
| --- | --- |
| メンバー数・SNS リンク・局の紹介文・FAQ を変える | `src/app/lib/site.ts` |
| 活動・実績ページのイベントを追加する | `src/app/activities/page.tsx` の `featuredActivities` |
| トップページの「開催予定のイベント」を差し替える | `src/app/page.tsx` |
| トップページに「ご一緒した学生団体」を追加する | `src/app/page.tsx` の「ご一緒した学生団体」ブロック |
| ブログ記事を書く | microCMS の管理画面（コードの変更は不要、約1分で反映） |

## 画像の置き方

画像は `public/images/` 以下に用途別に置きます。ファイル名は**英小文字・数字・ハイフンのみ**にしてください（日本語や全角文字は使わない）。

```
public/images/
├── brand/       ロゴ、パンフレットなど団体そのものの素材
├── events/      イベントごとにフォルダを作る（例: events/sweets-selection/01.jpg）
│                当日写真は day-01.jpg、チラシは flyer.png
├── members/     メンバー・ミーティングの写真
└── partners/    連携先・ご一緒した団体のロゴ（例: partners/fuzion.png）
```

コードからは `public` を除いたパスで参照します。

```tsx
<Image src="/images/events/sweets-selection/01.jpg" alt="..." fill />
```

## 公開（デプロイ）

`main` ブランチに push すると Vercel が自動でビルド・公開します。
push する前に `npm run build` が通ることを確認してください。
