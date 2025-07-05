'use client';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-jetbrains">
        <Navigation />
        {/* Full bleed content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}