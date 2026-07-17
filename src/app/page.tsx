import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import CTAButtons from "@/components/CTAButtons";
import Section from "@/components/Section";
import CountUp from "@/components/CountUp";
import { site } from "@/app/lib/site";
import { getLatestArticles } from "@/app/lib/microcms";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "学生団体 Hokkaidonors" },
  description: "北海道出身の学生が、東京から地元に恩返しするコミュニティ。現在45名が活動中。北海道企業・自治体との共同イベントや地域プロジェクトを学生主導で実現しています。",
  openGraph: {
    title: "学生団体 Hokkaidonors",
    description: "北海道と東京をつなぐ道産子学生コミュニティ Hokkaidonors。",
    url: "/",
    images: ["/og.png"],
  },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function toExcerpt(html: string, len = 80) {
  const text = html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  return text.length > len ? text.slice(0, len) + "…" : text;
}

export default async function HomePage() {
  const { contents: latestArticles } = await getLatestArticles(3);

  const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hokkaidonors",
    url: base,
    logo: `${base}/images/logo.jpg`,
    description: site.site.description,
    sameAs: [
      site.site.links.instagram,
      site.site.links.x,
    ],
  };

  const metrics = [
    { end: site.site.metrics.members, suffix: "名", label: "在籍メンバー" },
    { end: site.site.metrics.eventsPerYear, suffix: "件", label: "年間イベント" },
    { end: 2, suffix: "拠点", label: "東京・北海道" },
  ];

  const deptColors = [
    "from-violet-500 to-purple-500",
    "from-blue-500 to-cyan-500",
    "from-pink-500 to-rose-500",
  ];

  const eventPhotos: Record<string, string> = {
    "札幌スイーツセレクション": "/images/スイーツセレクション1.jpg",
    "北海道スープカレー教室": "/images/スープカレー教室.jpg",
    "3団体合同新歓": "/images/合同新歓.jpg",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/BBQ.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="hero-gradient hero-overlay absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 py-28 sm:px-8 sm:py-36">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">
            {site.site.nameJa}
          </p>
          <h1 className="animate-fade-in-up delay-100 gradient-text mt-5 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            {site.site.tagline}
          </h1>
          <p className="animate-fade-in-up delay-200 mt-8 max-w-3xl text-lg leading-8 text-violet-100">
            {site.site.subtagline}
          </p>
          <div className="animate-fade-in-up delay-300 mt-10">
            <CTAButtons
              primary={{ label: "企業・自治体の方へ", href: "/partner" }}
              secondary={{ label: "学生の方へ", href: "/join" }}
            />
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      <Section title="開催予定のイベント" lead="現在募集中のイベントをご紹介します。" bg="violet">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm sm:flex">
          <div className="relative aspect-[63/89] w-full shrink-0 sm:w-72">
            <Image
              src="/images/富良野起業家ゼミ.png"
              alt="FURANO起業家ゼミ 富良野に向き合う、本気の2日間"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 288px"
            />
          </div>
          <div className="p-6 sm:p-8">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
              主催：Hokkaidonors　共催：株式会社ふらのDMC
            </span>
            <h3 className="mt-3 text-2xl font-bold text-slate-900">FURANO起業家ゼミ</h3>
            <p className="mt-1 text-sm text-slate-500">
              2026年8月1日(土)・8月2日(日) ・ フラノデザイン（北海道富良野市） ・ 参加費無料
            </p>
            <p className="mt-3 text-base leading-8 text-slate-600">
              富良野近郊の高校生と北海道の大学生が、提示された課題をもとに富良野の未来を創るアイデアを考えます。アントレプレナーシップやリーダーシップの考え方を実践的に学び、多様な学生達が新たな一歩を踏み出す2日間です。
            </p>
            <a
              href="https://furanozemi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700 hover:shadow-lg"
            >
              詳細・お申し込みはこちら →
            </a>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section title="Hokkaidonorsとは">
        <div className="space-y-8">
          <p className="text-base leading-8 text-slate-600">
            北海道を出て、東京で学ぶ学生たちが集まったコミュニティ。
            企業・自治体と連携しながら、東京にいながら地元北海道に貢献する活動を続けています。
            上京した後も、地元への恩返しができる場所がここにあります。
          </p>
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-violet-100 bg-white p-5 text-center shadow-sm">
                <p className="text-3xl font-extrabold tracking-tight text-violet-600 sm:text-4xl"><CountUp end={m.end} suffix={m.suffix} /></p>
                <p className="mt-1 text-sm font-medium text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Members */}
      <Section title="メンバー" bg="violet">
        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg sm:aspect-[4/3]">
            <Image
              src="/images/内部イベント.jpg"
              alt="Hokkaidonorsのメンバーの様子"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {site.departments.map((dept, i) => (
              <Card key={dept.name}>
                <div className={`mb-3 h-1.5 w-8 rounded-full bg-gradient-to-r ${deptColors[i % deptColors.length]}`} />
                <h3 className="text-xl font-bold text-slate-900">{dept.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{dept.summary}</p>
              </Card>
            ))}
          </div>
          <div className="text-right">
            <Link href="/join" className="text-sm font-semibold text-violet-600 hover:text-violet-800">
              参加について詳しく見る →
            </Link>
          </div>
        </div>
      </Section>

      {/* Activities */}
      <Section title="活動実績">
        <div className="space-y-4">
          {site.events.map((event) => (
            <Card key={event.title}>
              <div className="flex items-start gap-4">
                {eventPhotos[event.title] && (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                    <Image src={eventPhotos[event.title]} alt={event.title} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                    {event.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{event.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {event.dateRange} ・ {event.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
          <div className="text-right">
            <Link href="/activities" className="text-sm font-semibold text-violet-600 hover:text-violet-800">
              すべての活動を見る →
            </Link>
          </div>
        </div>
      </Section>

      {/* Blog */}
      {latestArticles.length > 0 && (
        <Section title="最新情報" lead="活動レポートや取り組みの記録を発信しています。" bg="violet">
          <div className="space-y-4">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">{formatDate(article.publishedAt)}</p>
                  <h3 className="mt-1 text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors line-clamp-1">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500 line-clamp-2">
                    {toExcerpt(article.body)}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-violet-500">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link href="/news" className="text-sm font-semibold text-violet-600 hover:text-violet-800">
              すべての記事を見る →
            </Link>
          </div>
        </Section>
      )}

      {/* Final Dual CTA */}
      <Section title="Hokkaidonorsに関わる">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">For Students</p>
            <h3 className="mt-3 text-xl font-bold text-slate-900">学生として参加する</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              北海道出身の首都圏学生なら誰でも参加できます。企画・渉外・広報の3局でメンバー募集中。
            </p>
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
            <p className="mt-3 text-sm leading-7 text-slate-600">
              若者向けイベントや地域連携の共催を検討中の方。要件が固まっていない段階でも相談できます。
            </p>
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
