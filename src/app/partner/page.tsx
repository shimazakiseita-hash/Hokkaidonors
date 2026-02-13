import type { Metadata } from "next";
import Link from "next/link";
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

const process = [
  { step: "01", title: "ヒアリング", detail: "課題と対象者、目的、時期を確認" },
  { step: "02", title: "企画提案", detail: "実施案、体験設計、体制案をご提案" },
  { step: "03", title: "共催実行", detail: "運営、発信、当日オペレーションを実施" },
  { step: "04", title: "振り返り", detail: "成果整理と次アクションを提案" },
];

export default function PartnerPage() {
  return (
    <>
      <Section
        title="企業・自治体向けの協業"
        lead="若者向けイベント、地域連携企画、発信施策を学生視点で設計・実行します。"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-7 py-3 text-base font-bold text-white shadow-sm transition hover:bg-sky-700"
        >
          協業相談をする
        </Link>
      </Section>

      <Section title="提供価値">
        <div className="space-y-4">
          {site.partnerValueProps.map((item) => (
            <Card key={item.title}>
              <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="相談しやすい進め方">
        <div className="space-y-4">
          {process.map((step) => (
            <Card key={step.step}>
              <p className="text-sm font-bold text-sky-700">STEP {step.step}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={site.partnerProof.headline}>
        <div className="space-y-4">
          <Card>
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
              <img
                src="/images/popup.jpg"
                alt="札幌スイーツセレクションの出展の様子"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-900">札幌スイーツセレクション</h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              錦糸町マルイでの実施事例。学生が企画・導線設計・当日運営までを担当しました。
            </p>
          </Card>
          {site.partnerProof.items.map((item) => (
            <Card key={item}>
              <p className="text-base font-semibold text-slate-800">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="まずは無料相談をご活用ください">
        <div className="rounded-xl border border-sky-200 bg-white p-8 shadow-md sm:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-600">
            要件が固まっていない場合でも、課題共有から伴走します。企画共催の最短ルートを一緒に設計します。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-600 px-8 py-3 text-base font-bold text-white shadow-sm transition hover:bg-sky-700"
          >
            企業・自治体として問い合わせる
          </Link>
        </div>
      </Section>

      <Section title="よくある質問">
        <div className="space-y-3">
          {site.faqs.partner.map((item) => (
            <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section title="最終相談窓口">
        <div className="rounded-xl border border-sky-200 bg-white p-8 shadow-md sm:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-600">
            施策の方向性が決まっていない段階でも相談可能です。まずは背景をお聞かせください。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-600 px-8 py-3 text-base font-bold text-white shadow-sm transition hover:bg-sky-700"
          >
            相談する
          </Link>
        </div>
      </Section>
    </>
  );
}
