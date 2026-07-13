import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TennisCut サポート",
  description:
    "TennisCut日本語版のサポート、プライバシーポリシー、利用規約。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">
            TennisCut
          </Link>
          <nav aria-label="メインナビゲーション">
            <Link href="/support">サポート</Link>
            <Link href="/privacy">プライバシー</Link>
            <Link href="/terms">規約</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>© 2026 TennisCut</span>
          <a href="mailto:tanakashoya919@gmail.com">
            tanakashoya919@gmail.com
          </a>
        </footer>
      </body>
    </html>
  );
}
