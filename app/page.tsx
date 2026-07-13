import Link from "next/link";

const links = [
  {
    href: "/support",
    label: "サポート",
    description: "お問い合わせ先、基本的な使い方、困ったときの確認項目",
  },
  {
    href: "/privacy",
    label: "プライバシーポリシー",
    description: "動画、写真ライブラリ、広告、購入情報の取り扱い",
  },
  {
    href: "/terms",
    label: "利用規約",
    description: "TennisCut日本語版の利用条件と免責事項",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">TennisCut</p>
          <h1>テニス動画編集のサポート</h1>
          <p className="lead">
            TennisCut日本語版のサポート情報、プライバシーポリシー、利用規約を掲載しています。
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/support">
              サポートを見る
            </Link>
            <Link className="secondary-link" href="/privacy">
              プライバシーポリシー
            </Link>
          </div>
        </div>
        <div className="app-tile" aria-label="TennisCut app icon">
          <img src="/app-icon.png" width={112} height={112} alt="" />
          <span>iPhone版</span>
        </div>
      </section>

      <section className="link-grid" aria-label="サイト内リンク">
        {links.map((item) => (
          <Link key={item.href} className="info-card" href={item.href}>
            <span>{item.label}</span>
            <p>{item.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
