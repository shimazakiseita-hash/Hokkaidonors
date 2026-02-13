import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Hokkaidonorsへのお問い合わせフォーム。送信機能は準備中です。",
  openGraph: {
    title: "お問い合わせ",
    description: "協業相談・参加相談はこちらから。",
    url: "/contact",
    images: ["/og.png"],
  },
};

export default function ContactPage() {
  return (
    <Section
      title="お問い合わせ"
      lead="協業相談、登壇依頼、学生参加の相談を受け付けています。現在はフォームUIのみ公開中です。"
    >
      <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            お名前
            <input
              type="text"
              name="name"
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-500 focus:ring-2"
              placeholder="山田 太郎"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            メールアドレス
            <input
              type="email"
              name="email"
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-500 focus:ring-2"
              placeholder="example@company.jp"
            />
          </label>
        </div>

        <div className="mt-5">
          <label className="text-sm font-medium text-slate-700">
            ご相談種別
            <select className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-500 focus:ring-2" name="type">
              <option>企業・自治体の協業相談</option>
              <option>学生参加について</option>
              <option>その他</option>
            </select>
          </label>
        </div>

        <div className="mt-5">
          <label className="text-sm font-medium text-slate-700">
            内容
            <textarea
              name="message"
              rows={6}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-500 focus:ring-2"
              placeholder="ご相談内容を入力してください"
            />
          </label>
        </div>

        <button
          type="button"
          className="mt-6 inline-flex rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
        >
          送信（準備中）
        </button>
      </form>
    </Section>
  );
}
