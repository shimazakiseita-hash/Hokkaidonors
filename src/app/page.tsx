import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";
import CTAButtons from "@/components/CTAButtons";
import Section from "@/components/Section";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "トップ",
  description: "Hokkaidonorsの公式サイト。企業・自治体向け協業相談と学生参加導線を掲載。",
  openGraph: {
    title: "トップ",
    description: "北海道と東京をつなぐ道産子学生コミュニティ Hokkaidonors。",
    url: "/",
    images: ["/og.png"],
  },
};

export default function HomePage() {
  const metrics = [
    {
      label: "在籍メンバー",
      value: `${site.site.metrics.members}名`,
      note: "北海道出身の学生を中心に活動",
    },
    {
      label: "年間イベント数",
      value: `${site.site.metrics.eventsPerYear}件`,
      note: "企画・教育・交流イベントを実施",
    },
    {
      label: "主要連携先",
      value: `${site.site.metrics.partners.length}団体`,
      note: site.site.metrics.partners.join(" / "),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/BBQ.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-purple-800/70 to-fuchsia-700/60" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 py-28 sm:px-8 sm:py-36">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">
            {site.site.nameJa}
          </p>
          <h1 className="animate-fade-in-up delay-100 mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
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

      {/* Why */}
      <Section title="なぜ、この活動を続けるのか">
        <div className="space-y-5">
          <h3 className="text-2xl font-bold text-slate-900">東京にいるからこそ、北海道にできることがある</h3>
          <p className="text-base leading-8 text-slate-600">
            私たちは、北海道を離れた先でも地元との接点を持ち続けたいと考えています。
            <br />
            東京で得られるネットワークや経験を、北海道の地域活動へ還元する。
            <br />
            その循環を、学生のうちから実装していくことがHokkaidonorsの挑戦です。
          </p>
        </div>
      </Section>

      {/* Team */}
      <Section title="どんな人たちが動いているか" bg="violet">
        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg sm:aspect-[4/3]">
            <img
              src="/images/BBQ.jpg"
              alt="Hokkaidonorsの学生コミュニティの様子"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <p className="text-sm text-slate-500">交流の場で関係性を育みながら、日々のプロジェクトに取り組んでいます。</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "企画", desc: "地域課題をテーマに、イベントや施策の設計を行います。", color: "from-violet-500 to-purple-500" },
              { title: "渉外", desc: "自治体・企業・大学など、外部との連携をつくります。", color: "from-blue-500 to-cyan-500" },
              { title: "広報", desc: "活動の価値を言葉とビジュアルで伝え、参加を広げます。", color: "from-pink-500 to-rose-500" },
            ].map((item) => (
              <Card key={item.title}>
                <div className={`mb-3 h-1.5 w-8 rounded-full bg-gradient-to-r ${item.color}`} />
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* How we work */}
      <Section title="普段はどんなふうに進めているか">
        <div className="rounded-2xl border border-violet-100 bg-white p-8 shadow-sm sm:p-10">
          <ul className="list-disc space-y-3 pl-5 text-base leading-8 text-slate-600">
            <li>週1回の全体MTGで、進行中プロジェクトと次週の予定を共有</li>
            <li>日々の活動はプロジェクト単位で、小さなチームを組んで進行</li>
            <li>運営は「準備 → 当日実施 → 振り返り」の流れで必ず改善まで実施</li>
          </ul>
        </div>
      </Section>

      {/* Metrics */}
      <Section title="数字で見るHokkaidonors" lead="地域支援コミュニティとしての規模と実績です。" bg="violet">
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <Card key={metric.label}>
              <p className="text-4xl font-extrabold tracking-tight text-violet-600">{metric.value}</p>
              <p className="mt-2 text-base font-semibold text-slate-800">{metric.label}</p>
              <p className="mt-2 text-sm text-slate-500">{metric.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Partner CTA */}
      <Section title="企業・自治体向けのご相談" lead="若者向け施策や地域連携イベントの共催を検討中の方向けに、無料相談を受け付けています。">
        <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-sm sm:p-10">
          <p className="text-base leading-8 text-slate-600">要件が固まっていない段階でもご相談ください。企画設計から伴走します。</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3 text-base font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700 hover:shadow-lg"
            >
              企業・自治体として相談する
            </Link>
          </div>
        </div>
      </Section>

      {/* Events */}
      <Section title="直近イベント" bg="violet">
        <div className="space-y-4">
          {site.events.map((event) => (
            <Card key={event.title}>
              <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                {event.category}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">{event.title}</h3>
              <p className="mt-2 text-base text-slate-500">
                {event.dateRange} ・ {event.location}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section title="協業のご相談はこちら">
        <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-8 text-left shadow-sm sm:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-600">企画・共催・発信支援まで、目的に合わせた進め方をご提案します。</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700 hover:shadow-lg"
          >
            お問い合わせする
          </Link>
        </div>
      </Section>
    </>
  );
}
