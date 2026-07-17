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

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type ArticleItem = {
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  excerpt: string;
  body: ArticleBlock[];
};

export const site = {
  url: "https://hokkaidonors.com",
  site: {
    name: "Hokkaidonors",
    nameJa: "Hokkaidonors",
    tagline: "東京にいながら北海道に貢献できるコミュニティ",
    subtagline: "2025年8月に立ち上げ、現在45名で活動中。東京・北海道の2拠点で展開。",
    description:
      "北海道出身の学生が東京・北海道を拠点に、地域支援・企画・発信を通じて北海道に還元するコミュニティです。",
    links: {
      line: "https://line.me/R/ti/p/@453bmysh",
      instagram: "https://www.instagram.com/hokkaidonors?igsh=MW0zeDltMTIwdHU5eg%3D%3D&utm_source=qr",
      x: "https://x.com/hokkaidonors?s=21&t=f1dT-7ikz-6xaSWDilxZPA",
    },
    metrics: {
      members: 45,
      eventsPerYear: 12,
      partners: ["北海道庁"],
    },
  },
  routes: [
    { href: "/", label: "トップ" },
    { href: "/activities", label: "活動・実績" },
    { href: "/news", label: "ブログ" },
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
  articles: [
    {
      slug: "dosanko-bbq-2025",
      title: "道産子BBQ in Tokyoを開催しました！",
      author: "ktekitou1130",
      publishedAt: "2026-02-04",
      readingTime: "1分",
      excerpt:
        "2025年8月30日、Hokkaidonors初のイベント・道産子BBQ in Tokyoを開催。チームの可能性を肌で感じた1日を振り返ります。",
      body: [
        {
          type: "p",
          text: "２０２５年８月３０日、Hokkaidonorsの初めてのイベントである道産子BBQ in Tokyoが催されました。",
        },
        {
          type: "p",
          text: "このイベントは団体内で行われた内部イベントでありましたが、ある時は盛り上がり、ある時は真面目に議論する、そんなHokkaidonorsらしさがにじみでるような、そんなイベントであったと思い返します。あれから２度のイベントを経てこの記事を書いていますが、あのBBQからHokkaidonorsの潜在的なパワーを肌で感じていました。その力は場数を踏むにつれて、メンバーが増えるにつれて、様々な方々と関わる機会を経るにつれて、強く大きく、いい意味で複雑になっていっている気がしますが、やはりその核はあのBBQであったと個人的に感じています。",
        },
        {
          type: "quote",
          text: "会計、当日の企画、集客、フォームづくり、当日来てくれた子もみんなのおかげで本当にいい初回でした！……局ごとに集まって真剣な話をしているところを見て、本当に感極まりない気持ちでした。騒ぐとこは騒いで、真剣な時は集中してるみんながかっこよかった！",
          attribution: "代表",
        },
        {
          type: "p",
          text: "これから様々なことを経験していくと思うし、この団体の行く末は誰にもわかりませんが、この記憶を核に据えてこれからも全身全霊で頑張りたいと思います。",
        },
      ],
    },
    {
      slug: "ethical-ennichi-2025",
      title: "エシカル縁日に出展しました！",
      author: "ktekitou1130",
      publishedAt: "2025-12-30",
      updatedAt: "2026-01-04",
      readingTime: "2分",
      excerpt:
        "2025年12月13日、エシカル縁日に出展。スギを使ったコースター作りと木育の発信を通じて、世代を超えた対話が生まれました。",
      body: [
        {
          type: "p",
          text: "2025年12月13日、Hokkaidonorsは「エシカル縁日」に出店しました！",
        },
        {
          type: "p",
          text: "8月のワークショップに続き、スギを使ったものづくり体験と木育の発信を行いました。",
        },
        {
          type: "p",
          text: "単なるものづくりでおわるのではなく、その背景にある循環を伝えることを目標に活動をしました。",
        },
        {
          type: "p",
          text: "当日は、コースター作りを実施しました。",
        },
        {
          type: "p",
          text: "今回のイベントでは、モノ作り以上に様々な方との対話をすることができたのが大きい収穫になりました。",
        },
        {
          type: "ul",
          items: [
            "ブースを訪れた方から「北海道に行ったことがあります！」「行ってみたい！」という声をたくさんいただき、改めて北海道の良さを発信する喜びを実感しました。",
            "小さなお子様が笑顔で工作に没頭する姿や、大人の参加者と深く木材について語り合う場面など、世代を超えた「木育」の輪が広がりました。",
            "初めて名刺交換に挑戦したメンバーも、先輩のサポートを受けながら積極的に人脈を広げることができ、今後の活動に繋がる貴重な出会いがたくさんありました。",
          ],
        },
        {
          type: "p",
          text: "初めてのイベント運営に携わるメンバーも多い中、全員が今自分ができることを考え、自発的に動けていました！",
        },
        {
          type: "quote",
          text: "渉外局が積極的に名刺交換をして人脈を作り、誰一人動いていない人がいなかったのが本当に凄かった！",
          attribution: "メンバーの声",
        },
        {
          type: "p",
          text: "準備段階での場所の周知や時間配分など、次回への改善点も見つかりましたが、臨機応変にハプニングを乗り越えられた経験は、チームとしての大きな成果になったと思います。",
        },
        {
          type: "h3",
          text: "これからのHokkaidonors",
        },
        {
          type: "p",
          text: "今回のイベントでも北海道への恩返しという団体のコンセプトをひろげていくことができました。",
        },
        {
          type: "p",
          text: "イベントでの出会いや学びを大切に、これからもHokkaidonorsは楽しみながら学べる活動を続けていきます。当日足を運んでくださった皆様、本当にありがとうございました！",
        },
      ],
    },
  ] satisfies ArticleItem[],
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
      "りっけんプレゼンテーション大会",
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
