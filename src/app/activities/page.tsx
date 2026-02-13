import type { Metadata } from "next";
import Card from "@/components/Card";
import EventCard from "@/components/EventCard";
import Section from "@/components/Section";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "活動・実績",
  description: "イベント一覧と実績情報を掲載しています。",
  openGraph: {
    title: "活動・実績",
    description: "Hokkaidonorsの活動実績ページ。",
    url: "/activities",
    images: ["/og.png"],
  },
};

export default function ActivitiesPage() {
  const proofCards = [
    { label: "連携先", value: site.site.metrics.partners.join(" / ") },
    { label: "年間イベント", value: `${site.site.metrics.eventsPerYear}件` },
    { label: "在籍メンバー", value: `${site.site.metrics.members}名` },
  ];

  return (
    <>
      <Section title="活動ハイライト" lead="企画・体験活動の現場から、地域支援の具体的な取り組みを発信しています。">
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
          <img
            src="/images/event.jpg"
            alt="Hokkaidonorsの活動イベントの様子"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      </Section>

      <Section title="イベント一覧" lead="企画・教育・交流を軸に、北海道へ還元する活動を実施しています。">
        <div className="space-y-4">
          {site.events.map((event) => (
            <EventCard key={`${event.title}-${event.dateRange}`} event={event} />
          ))}
        </div>
      </Section>

      <Section title="実績カード">
        <div className="space-y-4">
          {proofCards.map((metric) => (
            <Card key={metric.label}>
              <p className="text-3xl font-extrabold tracking-tight text-slate-900">{metric.value}</p>
              <p className="mt-2 text-base font-semibold text-slate-700">{metric.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="団体紹介資料">
        <div className="space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
            <img
              src="/images/syoukai.jpg"
              alt="Hokkaidonorsの団体紹介資料"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-base leading-8 text-slate-600">団体の全体像や体制感を伝える補助資料として掲載しています。</p>
        </div>
      </Section>
    </>
  );
}
