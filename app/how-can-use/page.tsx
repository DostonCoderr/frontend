'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import '../styles/how-can-use.css';

// export const metadata = {
//   title: 'How Can Use - Music API',
//   description: 'Learn how to use the Music API, including authentication, endpoints, and examples.',
//   keywords: 'How to use Music API, API tutorial, Doston API',
//   authors: [{ name: 'Doston' }],
//   robots: 'index, follow',
// };

export default function HowCanUse() {
  return (
    <div className="how-can-use-page">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header>
        <div className="header-container">
          <h1>How to Use Music API</h1>
          <Link href="/">Orqaga</Link>
        </div>
      </header>

      {/* Main Section */}
      <main>
        <div className="container">
          <section className="section">
            <h2>API’dan Foydalanish Bo‘yicha Qo‘llanma</h2>
            <p>
              Bu API musiqa ilovalari uchun mo‘ljallangan bo‘lib, qo‘shiqlar, pleylistlar va foydalanuvchi autentifikatsiyasini boshqarish imkonini beradi. Quyida API’dan qanday foydalanishni 0 dan boshlab tushuntiraman.
            </p>

            <h3>1. Bog‘lanish va Talablar</h3>
            <ul>
              <li>
                <strong>Base URL:</strong> <code>http://localhost:4000</code> (API deploy qilingandan so‘ng bu URL o‘zgaradi).
              </li>
              <li>
                <strong>Format:</strong> API JSON formatida ishlaydi. So‘rovlar va javoblar JSON shaklida bo‘ladi.
              </li>
              <li>
                <strong>Autentifikatsiya:</strong> Ko‘p endpoint’lar JWT tokenini talab qiladi. Tokenni olish uchun avval ro‘yxatdan o‘tishingiz va kirishingiz kerak.
              </li>
              <li>
                <strong>Header:</strong> Autentifikatsiya talab qilinadigan so‘rovlar uchun: <code>Authorization: Bearer </code>.
              </li>
              <li>
                <strong>Asboblar:</strong> API’dan foydalanish uchun Postman, cURL yoki JavaScript (masalan, <code>fetch</code>) ishlatishingiz mumkin.
              </li>
            </ul>

            <h3>2. Birinchi Qadamlar</h3>
            <p>API’dan foydalanish uchun quyidagi qadamlarni bajaring:</p>
            <ol>
              <li>
                <strong>Ro‘yxatdan o‘tish:</strong> <code>/api/auth/register</code> endpoint’idan foydalanib, yangi foydalanuvchi yaratish.
              </li>
              <li>
                <strong>Kirish:</strong> <code>/api/auth/login</code> endpoint’idan token olish.
              </li>
              <li>
                <strong>Tokenni ishlatish:</strong> Olingan tokenni har bir autentifikatsiya talab qiladigan so‘rovda <code>Authorization</code> header’ida yuboring.
              </li>
              <li>
                <strong>So‘rov yuborish:</strong> Kerakli endpoint’ga so‘rov yuboring (masalan, pleylistga qo‘shiq qo‘shish uchun <code>/api/playlist/add</code>).
              </li>
            </ol>

            <h3>3. Misollar</h3>
            <p><strong>Ro‘yxatdan o‘tish (Register):</strong></p>
            <pre>
{`fetch('http://localhost:4000/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'yourusername',
    email: 'your-email@example.com',
    password: 'yourpassword',
  }),
})
  .then(res => res.json())
  .then(data => console.log(data));`}
            </pre>

            <p><strong>Kirish (Login):</strong></p>
            <pre>
{`fetch('http://localhost:4000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'your-email@example.com',
    password: 'yourpassword',
  }),
})
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', data.token);
    console.log('Token:', data.token);
  });`}
            </pre>

            <p><strong>Pleylistga qo‘shiq qo‘shish:</strong></p>
            <pre>
{`fetch('http://localhost:4000/api/playlist/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': \`Bearer \${localStorage.getItem('token')}\`,
  },
  body: JSON.stringify({
    playlistName: 'Favorites',
    songId: '68074c0738bd722516beab05',
  }),
})
  .then(res => res.json())
  .then(data => console.log(data));`}
            </pre>

            <h3>4. Umumiy Xatolar va Ularning Yechimi</h3>
            <ul>
              <li>
                <strong>401 Unauthorized:</strong> Token yuborilmagan yoki noto‘g‘ri. <code>Authorization</code> header’ini tekshiring.
              </li>
              <li>
                <strong>404 Not Found:</strong> Endpoint yoki resurs topilmadi. URL yoki ID’ni tekshiring.
              </li>
              <li>
                <strong>500 Server Error:</strong> Serverda xato yuz berdi. API egasiga murojaat qiling.
              </li>
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