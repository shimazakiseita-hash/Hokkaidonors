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
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{site.site.nameJa}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">{site.site.tagline}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">{site.site.subtagline}</p>
          <div className="mt-10">
            <CTAButtons
              primary={{ label: "企業・自治体の方へ", href: "/partner" }}
              secondary={{ label: "学生の方へ", href: "/join" }}
            />
          </div>
        </div>
      </section>

      <Section title="コミュニティの雰囲気">
        <div className="space-y-5">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
            <img
              src="/images/BBQ.jpg"
              alt="Hokkaidonorsの学生コミュニティの様子"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
          <p className="text-base leading-8 text-slate-600">学生同士の関係性を土台に、地域支援プロジェクトを継続的に実行しています。</p>
        </div>
      </Section>

      <Section title="数字で見るHokkaidonors" lead="地域支援コミュニティとしての規模と実績です。">
        <div className="space-y-4">
          {metrics.map((metric) => (
            <Card key={metric.label}>
              <p className="text-3xl font-extrabold tracking-tight text-slate-900">{metric.value}</p>
              <p className="mt-2 text-base font-semibold text-slate-800">{metric.label}</p>
              <p className="mt-2 text-base text-slate-600">{metric.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="企業・自治体向けのご相談" lead="若者向け施策や地域連携イベントの共催を検討中の方向けに、無料相談を受け付けています。">
        <div className="rounded-xl border border-sky-200 bg-white p-8 shadow-md sm:p-10">
          <p className="text-base leading-8 text-slate-600">要件が固まっていない段階でもご相談ください。企画設計から伴走します。</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-7 py-3 text-base font-bold text-white shadow-sm transition hover:bg-sky-700"
            >
              企業・自治体として相談する
            </Link>
          </div>
        </div>
      </Section>

      <Section title="直近イベント">
        <div className="space-y-4">
          {site.events.map((event) => (
            <Card key={event.title}>
              <p className="text-sm font-semibold text-sky-700">{event.category}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{event.title}</h3>
              <p className="mt-2 text-base text-slate-500">
                {event.dateRange} ・ {event.location}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="協業のご相談はこちら">
        <div className="rounded-xl border border-sky-200 bg-white p-8 text-left shadow-md sm:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-600">企画・共催・発信支援まで、目的に合わせた進め方をご提案します。</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-600 px-8 py-3 text-base font-bold text-white shadow-sm transition hover:bg-sky-700"
          >
            お問い合わせする
          </Link>
        </div>
      </Section>
    </>
  );
}
