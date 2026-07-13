export const metadata = {
  title: "サポート | TennisCut",
  description: "TennisCut日本語版のサポート情報。",
};

export default function SupportPage() {
  return (
    <main className="document-shell">
      <aside className="document-aside">
        <h1>サポート</h1>
        <p className="meta">TennisCut日本語版</p>
      </aside>
      <article className="document">
        <h2>お問い合わせ</h2>
        <div className="contact-box">
          <p>
            不具合、購入、書き出し、広告表示に関するお問い合わせは、次のメールアドレスまでご連絡ください。
          </p>
          <p>
            <a href="mailto:tanakashoya919@gmail.com">
              tanakashoya919@gmail.com
            </a>
          </p>
        </div>

        <h2>基本的な使い方</h2>
        <ul>
          <li>写真ライブラリまたはファイルからテニス動画を読み込みます。</li>
          <li>試合動画ではポイントごとに区間と得点を記録できます。</li>
          <li>練習動画では残したい場面だけを記録できます。</li>
          <li>編集後、動画を書き出して写真アプリ、ファイル、共有先へ保存できます。</li>
        </ul>

        <h2>困ったとき</h2>
        <ul>
          <li>動画が読み込めない場合は、写真ライブラリまたはファイルへのアクセス権限を確認してください。</li>
          <li>音声操作が使えない場合は、マイクと音声認識の権限を確認してください。</li>
          <li>書き出しに失敗する場合は、端末の空き容量を確保し、アプリを再起動してから再度お試しください。</li>
          <li>広告が読み込めない場合は、通信状態を確認してから再度お試しください。</li>
        </ul>

        <h2>関連文書</h2>
        <ul>
          <li>
            <a href="/privacy">プライバシーポリシー</a>
          </li>
          <li>
            <a href="/terms">利用規約</a>
          </li>
        </ul>
      </article>
    </main>
  );
}
