import Link from 'next/link';
import Navbar from './components/Navbar';
import './styles/index.css';

export const metadata = {
  title: 'Music API - Asosiy Sahifa',
  description: 'Music API - musiqa ilovalari uchun API xizmati. Pleylistlar, qo‘shiqlar va autentifikatsiyani boshqaring.',
  keywords: 'Music API, API documentation, open source API, Doston, playlist API',
  authors: [{ name: 'Doston' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://your-api-docs-url.com',
  },
};

export default function Home() {
  return (
    <div className="home-page">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="video-overlay"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero-section">
        <div className="container">
          <h1 className="hero-title">Explore the Future with Music API</h1>
          <p className="hero-description">
            Create powerful music apps with our API. Manage playlists, songs, and authentication effortlessly.
          </p>
          <div className="hero-buttons">
            <Link href="/how-can-use" className="btn demo-btn">
              Check Our Demo
            </Link>
            <Link href="/api-doc" className="btn get-started-btn">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}