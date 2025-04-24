import Head from 'next/head';
import Link from 'next/link';
import '../styles/about-api.css'; // CSS faylini import qilish

export default function AboutApi() {
  return (
    <div>
      <Head>
        <title>About API - Music API</title>
        <meta name="description" content="Music API haqida ma'lumot - musiqa ilovalari uchun API xizmati." />
        <meta name="keywords" content="Music API, about API, open source API, Doston" />
        <meta name="author" content="Doston" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-api-docs-url.com/about-api" />
      </Head>
      <header>
        <div className="header-container">
          <h1>Music API - About API</h1>
          <Link href="/">Orqaga</Link>
        </div>
      </header>
      <main>
        <div className="container">
          <section className="section">
            <h2>API Haqida</h2>
            <p>
              Music API musiqa ilovalari uchun mo‘ljallangan bo‘lib, qo‘shiqlar, pleylistlar, kategoriyalar va foydalanuvchi autentifikatsiyasini boshqarish imkonini beradi. Bu API open-source bo‘lib, har kim undan foydalanishi mumkin. API JSON formatida ishlaydi va JWT autentifikatsiyasini qo‘llab-quvvatlaydi.
            </p>
          </section>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>© 2025 Doston. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
}