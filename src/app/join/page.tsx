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
  { step: "01", title: "説明会", detail: "オンライン説明会で活動を把握" },
  { step: "02", title: "面談", detail: "興味領域や関わり方を相談" },
  { step: "03", title: "体験参加", detail: "プロジェクトへ短期参加して相性確認" },
  { step: "04", title: "正式参加", detail: "局を決めて本格的に活動開始" },
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
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
            <img
              src="/images/BBQ.jpg"
              alt="Hokkaidonorsの学生コミュニティの活動風景"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800"
          >
            参加を相談する
          </Link>
        </div>
      </Section>

      <Section title="局紹介">
        <div className="space-y-4">
          {site.departments.map((department) => (
            <Card key={department.name}>
              <h3 className="text-2xl font-bold text-slate-900">{department.name}</h3>
              <p className="mt-3 text-base font-medium text-slate-700">{department.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-slate-600">
                {department.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="参加メリット">
        <div className="space-y-4">
          {benefits.map((benefit) => (
            <Card key={benefit}>
              <p className="text-base leading-8 text-slate-700">{benefit}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="参加の流れ">
        <div className="space-y-4">
          {joinFlow.map((step) => (
            <Card key={step.step}>
              <p className="text-sm font-bold text-amber-700">STEP {step.step}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="よくある質問">
        <div className="space-y-3">
          {site.faqs.join.map((item) => (
            <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
