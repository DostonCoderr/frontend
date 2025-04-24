import Link from 'next/link';
import '../styles/about-doston.css'; // CSS faylini import qilish

export const metadata = {
  title: 'About Doston - Music API',
  description: 'Doston haqida ma\'lumot - Music API loyihasining muallifi va yaratuvchisi haqida bilib oling.',
  keywords: 'Doston, Music API, API muallifi, loyiha yaratuvchisi',
  authors: [{ name: 'Doston' }],
  robots: 'index, follow',
  openGraph: {
    title: 'About Doston - Music API',
    description: 'Doston haqida ma\'lumot - Music API loyihasining muallifi va yaratuvchisi haqida bilib oling.',
    url: 'https://your-api-docs-url.com/about-doston',
    type: 'website',
  },
};

export default function AboutDoston() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-container">
          <h1>About Doston</h1>
          <Link href="/">Orqaga</Link>
        </div>
      </header>

      {/* Main Section */}
      <main>
        <div className="container">
          <section className="section">
            <h2>Doston Kim?</h2>
            <p>
              Men Dostonman, Music API loyihasining muallifi va yaratuvchisiman. Ushbu loyiha orqali musiqa ilovalari uchun foydali API xizmatini taqdim etishni maqsad qildim. Men dasturchilik bilan 5 yildan beri shug‘ullanaman va asosan JavaScript, TypeScript, Node.js va React/Next.js texnologiyalarida ishlayman.
            </p>
            <p>
              Ushbu API musiqa ilovalari uchun qo‘shiqlar, pleylistlar va foydalanuvchi autentifikatsiyasini boshqarish imkonini beradi. Agar loyiha haqida savollaringiz bo‘lsa, men bilan bog‘lanishingiz mumkin!
            </p>
          </section>

          <section className="section">
            <h2>Bog‘lanish</h2>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:doston@example.com">doston@example.com</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/dostoncoder" target="_blank" rel="noopener noreferrer">github.com/dostoncoder</a></li>
              <li><strong>Telegram:</strong> <a href="https://t.me/dostoncoder" target="_blank" rel="noopener noreferrer">@dostoncoder</a></li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 Doston. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
}