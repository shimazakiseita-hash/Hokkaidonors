import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "活動・実績",
  description: "Hokkaidonorsの活動実績。北海道企業・自治体との共同イベントや地域プロジェクトを写真とともに紹介します。",
  openGraph: {
    title: "活動・実績",
    description: "Hokkaidonorsの活動実績ページ。",
    url: "/activities",
    images: ["/og.png"],
  },
};

const featuredActivities = [
  {
    title: "3団体合同新歓",
    dateRange: "2026年5月16日",
    location: "EZOHUB TOKYO",
    category: "新歓 / 交流",
    desc: "学生団体YUZU・Fuzionとの3団体合同で新歓イベントを開催。学生・社会人20名以上が参加し、団体紹介のほか「自分が団体のメンバーになったら?」をテーマにした企画アイディア大会を実施。約5人のチームに分かれ、温泉街での星空ツアーや北海道の伝統工芸品体験ツアーなど各団体の方針に沿った企画を立案し、団体を超えた学生同士の交流を深めました。",
    images: [
      { src: "/images/events/joint-welcome-party/01.jpg", alt: "3団体合同新歓の様子" },
    ],
  },
  {
    title: "札幌スイーツセレクション",
    dateRange: "2025年2月15日〜17日",
    location: "錦糸町マルイ",
    category: "企画 / 出展",
    desc: "株式会社ブルーブロッサム・風牧場と共催し、北海道産野菜のパウンドケーキやドリンクヨーグルトを東京の消費者へ届けるポップアップを実施。企画・導線設計・当日運営まで学生が主導しました。",
    images: [
      { src: "/images/events/sweets-selection/01.jpg", alt: "スイーツセレクションの様子1" },
      { src: "/images/events/sweets-selection/02.jpg", alt: "スイーツセレクションの様子2" },
    ],
  },
  {
    title: "エシカル縁日",
    dateRange: "2025年12月13日",
    location: "都内会場",
    category: "企画 / 体験",
    desc: "スギを使ったコースター作りと木育の発信を実施。世代を超えた「木育」の対話が生まれ、初めて名刺交換に挑戦したメンバーも積極的に人脈を広げました。",
    images: [
      { src: "/images/events/ethical-ennichi/01.jpg", alt: "エシカル縁日の様子" },
      { src: "/images/events/ethical-ennichi/day-01.jpg", alt: "エシカル縁日当日" },
    ],
  },
  {
    title: "北海道スープカレー教室",
    dateRange: "2025年3月14日",
    location: "東京家政大学 調理室",
    category: "企画 / 教育",
    desc: "カレー食堂心と共催で、北海道スープカレーの料理教室を実施。参加者が実際に手を動かしながら北海道の食文化を体験できる場をつくりました。",
    images: [
      { src: "/images/events/soup-curry-class/01.jpg", alt: "スープカレー教室の様子" },
    ],
  },
  {
    title: "ものづくりワークショップ",
    dateRange: "2025年8月",
    location: "都内会場",
    category: "企画 / 体験",
    desc: "北海道産の木材を使ったものづくり体験。木の温もりと北海道の林業・森林資源への関心を東京の参加者に届けました。",
    images: [
      { src: "/images/events/monozukuri-workshop/01.jpg", alt: "ものづくりワークショップの様子" },
    ],
  },
];

const galleryPhotos = [
  { src: "/images/events/bbq/01.jpg", alt: "道産子BBQ", w: 1200, h: 800 },
  { src: "/images/events/rikken-presentation/01.jpg", alt: "りっけんプレゼンテーション大会", w: 845, h: 557 },
  { src: "/images/events/rikken-presentation/02.jpg", alt: "りっけんプレゼンテーション大会", w: 845, h: 557 },
  { src: "/images/events/sweets-selection/day-01.jpg", alt: "スイーツセレクション当日", w: 1145, h: 1429 },
  { src: "/images/events/sweets-selection/day-02.jpg", alt: "スイーツセレクション当日", w: 1145, h: 1429 },
  { src: "/images/members/meeting-in-person.jpg", alt: "対面ミーティング", w: 1477, h: 1108 },
];

export default function ActivitiesPage() {
  const metrics = [
    { value: `${site.site.metrics.members}名`, label: "在籍メンバー", note: "北海道出身の首都圏学生を中心に構成" },
    { value: `${site.site.metrics.eventsPerYear}件`, label: "年間イベント", note: "企画・教育・交流イベントを実施" },
    { value: site.site.metrics.partners[0], label: "連携先", note: "北海道庁との公式連携実績あり" },
  ];

  return (
    <>
      {/* Stats */}
      <Section title="実績" lead="2025年8月の設立から、北海道と東京をつなぐ活動を積み重ねています。">
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <Card key={m.label}>
              <p className="text-4xl font-extrabold tracking-tight text-violet-600">{m.value}</p>
              <p className="mt-2 text-base font-semibold text-slate-800">{m.label}</p>
              <p className="mt-1 text-sm text-slate-500">{m.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Activities */}
      <Section title="活動ピックアップ" lead="これまで実施してきたイベント・プロジェクトを紹介します。" bg="violet">
        <div className="space-y-6">
          {featuredActivities.map((activity) => (
            <div key={activity.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* Photo row */}
              <div className={`grid gap-0.5 ${activity.images.length >= 2 ? "grid-cols-2" : "grid-cols-1"}`}>
                {activity.images.map((img) => (
                  <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
              {/* Text */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                    {activity.category}
                  </span>
                  <span className="text-xs text-slate-400">{activity.dateRange} ・ {activity.location}</span>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{activity.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section title="フォトギャラリー">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryPhotos.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-xl ${img.w > img.h ? "col-span-2 aspect-video" : "aspect-[3/4]"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Pamphlet */}
      <Section title="団体紹介資料" bg="violet">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <Image
              src="/images/brand/pamphlet.jpg"
              alt="Hokkaidonors団体紹介パンフレット"
              width={1206}
              height={850}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <p className="text-sm leading-7 text-slate-500">団体の全体像・体制・活動内容をまとめた資料です。</p>
        </div>
      </Section>

      {/* CTA */}
      <Section title="一緒に動きませんか">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">For Students</p>
            <h3 className="mt-3 text-xl font-bold text-slate-900">学生として参加する</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">北海道出身の首都圏学生なら誰でも参加できます。企画・渉外・広報の3局でメンバー募集中。</p>
            <Link
              href="/join"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700 hover:shadow-lg"
            >
              参加について見る →
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">For Partners</p>
            <h3 className="mt-3 text-xl font-bold text-slate-900">企業・自治体として相談する</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">若者向けイベントや地域連携の共催を検討中の方。要件が固まっていない段階でも相談できます。</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-violet-600 px-6 py-3 text-sm font-semibold text-violet-600 transition hover:bg-violet-50"
            >
              お問い合わせする →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
