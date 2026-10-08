import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "企業・自治体の方へ",
  description: "若者向けイベント企画、地域プロジェクト設計、発信支援の相談窓口です。",
  openGraph: {
    title: "企業・自治体の方へ",
    description: "Hokkaidonorsの提供価値・実績・FAQを掲載。",
    url: "/partner",
    images: ["/og.png"],
  },
};

const steps = [
  { step: "01", title: "ヒアリング", detail: "課題と対象者、目的、時期を確認" },
  { step: "02", title: "企画提案", detail: "実施案、体験設計、体制案をご提案" },
  { step: "03", title: "共催実行", detail: "運営、発信、当日オペレーションを実施" },
  { step: "04", title: "振り返り", detail: "成果整理と次アクションを提案" },
];

const otherProof = ["北海道庁との連携実績あり", "ニセコ関連プロジェクト", "子ども食堂事業"];

export default function PartnerPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.partner.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <Section
        title="企業・自治体のみなさまへ"
        lead="若者向けイベント、地域連携企画、発信施策を、学生ならではの視点で丁寧に設計・実行します。"
      >
        <div className="space-y-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3 text-base font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700 hover:shadow-lg"
          >
            まずは相談してみる
          </Link>
        </div>
      </Section>

      <Section title="私たちにできること" bg="violet">
        <div className="space-y-4">
          {site.partnerValueProps.map((item) => (
            <Card key={item.title}>
              <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="ご一緒する時の進め方">
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <Card key={s.step}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-sm font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">{s.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="これまでの活動" bg="violet">
        <div className="space-y-4">
          {/* スイーツセレクション */}
          <Card>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image src="/images/events/sweets-selection/day-01.jpg" alt="スイーツセレクション当日" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image src="/images/events/sweets-selection/day-02.jpg" alt="スイーツセレクション当日" fill className="object-cover" />
              </div>
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-900">札幌スイーツセレクション</h3>
            <p className="mt-3 text-base leading-8 text-slate-600">錦糸町マルイでの実施事例。学生が企画・導線設計・当日運営までを担当しました。</p>
            <p className="mt-3 text-sm text-slate-500">学生と企業が同じ目線で動いた、共創型ポップアップの事例です。</p>
          </Card>

          {/* りっけんプレゼンテーション */}
          <Card>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/events/rikken-presentation/01.jpg" alt="りっけんプレゼンテーション大会" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/events/rikken-presentation/02.jpg" alt="りっけんプレゼンテーション大会" fill className="object-cover" />
              </div>
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-900">りっけんプレゼンテーション大会</h3>
            <p className="mt-3 text-base leading-8 text-slate-600">学生が自らの考えや活動を発表するプレゼンテーション大会に参加・関与しました。</p>
          </Card>

          {/* その他の実績まとめ */}
          <Card>
            <h3 className="text-lg font-bold text-slate-900">その他の連携実績</h3>
            <ul className="mt-4 space-y-2">
              {otherProof.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-slate-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="よくある質問">
        <div className="space-y-3">
          {site.faqs.partner.map((item) => (
            <details key={item.q} className="rounded-2xl border border-violet-100 bg-white p-6 transition-shadow hover:shadow-md">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section title="まずは気軽にご相談ください" bg="violet">
        <div className="rounded-2xl border border-violet-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-600">
            要件が固まっていない場合でも、課題共有から伴走します。企画共催の最短ルートを一緒に設計します。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700 hover:shadow-lg"
          >
            企業・自治体として問い合わせる
          </Link>
        </div>
      </Section>
    </>
  );
}
