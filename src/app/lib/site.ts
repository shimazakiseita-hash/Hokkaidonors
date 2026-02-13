export type RouteItem = {
  href: string;
  label: string;
};

export type Department = {
  name: string;
  summary: string;
  details: string[];
};

export type EventItem = {
  title: string;
  dateRange: string;
  location: string;
  note: string;
  category: string;
};

export type PartnerValueProp = {
  title: string;
  desc: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export const site = {
  url: "https://hokkaidonors.jp",
  site: {
    name: "Hokkaidonors",
    nameJa: "ホッカイドナーズ",
    tagline: "北海道と東京をつなぐ、道産子学生の地域支援コミュニティ",
    subtagline: "上京しても、地元に貢献できる文化をつくる。",
    description:
      "北海道出身の学生が東京を拠点に、地域支援・企画・発信を通じて北海道に還元するコミュニティです。",
    links: {
      instagram: "https://www.instagram.com/hokkaidonors/",
      x: "https://x.com/Hokkaidonors",
    },
    metrics: {
      members: 36,
      eventsPerYear: 12,
      partners: ["北海道庁"],
    },
  },
  routes: [
    { href: "/", label: "トップ" },
    { href: "/activities", label: "活動・実績" },
    { href: "/partner", label: "企業・自治体の方へ" },
    { href: "/join", label: "学生の方へ" },
    { href: "/contact", label: "お問い合わせ" },
  ] satisfies RouteItem[],
  departments: [
    {
      name: "企画局",
      summary: "「こんなことやりたい！」を形にするチーム。",
      details: [
        "観光ツアーや教育連携、特産品PRなどの企画立案を担当",
        "メンバーでアイデアを出すワークショップの運営も行う",
      ],
    },
    {
      name: "渉外局",
      summary: "団体の外とつながりを作るチーム。",
      details: [
        "ニセコや子ども食堂事案、コンサドーレとのイベントなどを担当",
        "道庁・北大との連携、協賛企業へのアプローチを担当",
      ],
    },
    {
      name: "広報局",
      summary: "活動をたくさんの人に知ってもらうチーム。",
      details: [
        "SNSでの発信、Webサイト/記事作成、イベント告知、新メンバー募集を担当",
        "今後、北海道新聞やHBC等と連携する場合は中心となって進める",
      ],
    },
  ] satisfies Department[],
  events: [
    {
      title: "札幌スイーツセレクション",
      dateRange: "2/15–2/17",
      location: "錦糸町マルイ",
      note:
        "株式会社ブルーブロッサム・風牧場と共催（北海道産野菜のパウンドケーキ、ドリンクヨーグルト等）",
      category: "企画/出展",
    },
    {
      title: "北海道スープカレー教室",
      dateRange: "3/14",
      location: "東京家政大学 調理室",
      note: "",
      category: "企画/教育",
    },
    {
      title: "3団体合同新歓",
      dateRange: "5/16",
      location: "EZOHUB TOKYO",
      note: "",
      category: "新歓/交流",
    },
  ] satisfies EventItem[],
  partnerValueProps: [
    {
      title: "若者向けイベントの企画・共催",
      desc: "集客・体験設計・運営まで、学生視点で企画を形にします。",
    },
    {
      title: "学生コミュニティを活かした発信協力",
      desc: "SNS/記事/イベント告知など、若年層に届く形で発信を支援します。",
    },
    {
      title: "地域プロジェクトの設計・運営",
      desc: "地域支援の企画設計から現場実行、振り返りまで伴走します。",
    },
  ] satisfies PartnerValueProp[],
  partnerProof: {
    headline: "支援・連携実績",
    items: [
      "北海道庁との連携実績あり",
      "ニセコ関連プロジェクト",
      "子ども食堂事業",
      "コンサドーレ関連イベント",
    ],
  },
  faqs: {
    partner: [
      {
        q: "費用はかかりますか？",
        a: "案件内容により異なります。まずは目的と規模を伺い、最適な形をご提案します。",
      },
      {
        q: "相談から実施までの期間は？",
        a: "小規模なら数週間〜、共催イベントは1〜2ヶ月程度が目安です。",
      },
      {
        q: "どこまで対応できますか？",
        a: "企画設計・運営・発信協力まで対応可能です。役割分担は柔軟に調整します。",
      },
    ] satisfies FaqItem[],
    join: [
      {
        q: "忙しくても参加できますか？",
        a: "プロジェクト単位で関わる形も可能です。学業と両立しやすい設計にしています。",
      },
      {
        q: "必要なスキルはありますか？",
        a: "未経験でもOKです。企画・渉外・広報など、得意に合わせて役割を選べます。",
      },
      {
        q: "途中参加はできますか？",
        a: "随時歓迎です。まずは説明会/面談から気軽にどうぞ。",
      },
    ] satisfies FaqItem[],
  },
};
