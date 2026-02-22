import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "学生の方へ",
  description: "局紹介、参加メリット、参加の流れ、FAQを掲載しています。",
  openGraph: {
    title: "学生の方へ",
    description: "Hokkaidonorsの学生参加案内ページ。",
    url: "/join",
    images: ["/og.png"],
  },
};

const joinFlow = [
  { step: "01", title: "公式LINEに登録", detail: "まずは公式LINEを友だち追加して参加の意思を伝えてください" },
  { step: "02", title: "説明会", detail: "オンライン説明会で活動内容を把握" },
  { step: "03", title: "面談", detail: "興味領域や関わり方を相談" },
  { step: "04", title: "体験参加", detail: "プロジェクトへ短期参加して相性確認" },
  { step: "05", title: "正式参加", detail: "局を決めて本格的に活動開始" },
];

const benefits = [
  "東京にいながら北海道に貢献する実践経験が積める",
  "企画・渉外・広報の実務を通じて社会実装力が身につく",
  "多大学・多学年の仲間と長期的なネットワークを築ける",
];

export default function JoinPage() {
  return (
    <>
      <Section title="学生メンバー募集" lead="上京しても地元へ還元できるプロジェクトに参加しませんか。">
        <div className="space-y-5">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg sm:aspect-[4/3]">
            <img
              src="/images/BBQ.jpg"
              alt="Hokkaidonorsの学生コミュニティの活動風景"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <Link
            href={site.site.links.line}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#06C755] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#05b34d] hover:shadow-lg"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            公式LINEで参加を相談する
          </Link>
        </div>
      </Section>

      <Section title="局紹介" bg="violet">
        <div className="space-y-4">
          {site.departments.map((department, i) => {
            const colors = [
              "from-violet-500 to-purple-500",
              "from-blue-500 to-cyan-500",
              "from-pink-500 to-rose-500",
            ];
            return (
              <Card key={department.name}>
                <div className={`mb-3 h-1.5 w-8 rounded-full bg-gradient-to-r ${colors[i % colors.length]}`} />
                <h3 className="text-2xl font-bold text-slate-900">{department.name}</h3>
                <p className="mt-3 text-base font-medium text-slate-700">{department.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-slate-600">
                  {department.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section title="参加メリット">
        <div className="space-y-4">
          {benefits.map((benefit, i) => (
            <Card key={benefit}>
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                  {i + 1}
                </span>
                <p className="text-base leading-8 text-slate-700">{benefit}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="参加の流れ" bg="violet">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {joinFlow.map((step) => (
            <Card key={step.step}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${step.step === "01" ? "bg-[#06C755]" : "bg-gradient-to-br from-violet-500 to-purple-500"}`}>
                {step.step}
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="よくある質問">
        <div className="space-y-3">
          {site.faqs.join.map((item) => (
            <details key={item.q} className="rounded-2xl border border-violet-100 bg-white p-6 transition-shadow hover:shadow-md">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* LINE CTA banner */}
      <Section title="まずは公式LINEへ" bg="violet">
        <div className="rounded-2xl bg-[#06C755] p-8 text-white shadow-md sm:p-10">
          <p className="max-w-xl text-base leading-8 text-green-50">
            参加に関する質問や相談は、公式LINEからお気軽にどうぞ。
            <br />
            入会手続きもすべてLINEで完結します。
          </p>
          <Link
            href={site.site.links.line}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-base font-semibold text-[#06C755] shadow transition hover:bg-green-50"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            公式LINEを友だち追加する
          </Link>
        </div>
      </Section>
    </>
  );
}
