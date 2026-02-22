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

const steps = [
  { step: "01", title: "ヒアリング", detail: "課題と対象者、目的、時期を確認" },
  { step: "02", title: "企画提案", detail: "実施案、体験設計、体制案をご提案" },
  { step: "03", title: "共催実行", detail: "運営、発信、当日オペレーションを実施" },
  { step: "04", title: "振り返り", detail: "成果整理と次アクションを提案" },
];

export default function PartnerPage() {
  return (
    <>
      <Section
        title="企業・自治体のみなさまへ"
        lead="若者向けイベント、地域連携企画、発信施策を、学生ならではの視点で丁寧に設計・実行します。"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3 text-base font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700 hover:shadow-lg"
        >
          まずは相談してみる
        </Link>
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
          <Card>
            {/* popup.jpg は縦長フライヤーのため全体を object-contain で表示 */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs overflow-hidden rounded-xl bg-stone-50 shadow-md sm:max-w-sm">
                <img
                  src="/images/popup.jpg"
                  alt="札幌スイーツセレクションの出展の様子"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-900">札幌スイーツセレクション</h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              錦糸町マルイでの実施事例。学生が企画・導線設計・当日運営までを担当しました。
            </p>
            <p className="mt-3 text-sm text-slate-500">学生と企業が同じ目線で動いた、共創型ポップアップの事例です。</p>
          </Card>
          {site.partnerProof.items.map((item) => (
            <Card key={item}>
              <p className="text-base font-semibold text-slate-800">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="まずは気軽にご相談ください">
        <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-sm sm:p-10">
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

      <Section title="よくある質問" bg="violet">
        <div className="space-y-3">
          {site.faqs.partner.map((item) => (
            <details key={item.q} className="rounded-2xl border border-violet-100 bg-white p-6 transition-shadow hover:shadow-md">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section title="ご相談窓口">
        <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-sm sm:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-600">
            施策の方向性が決まっていない段階でも相談可能です。まずは背景をお聞かせください。
          </p>
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
