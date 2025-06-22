import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'W74 Tungsten',
  description: 'We do the work. Strategy, tech, creative. You get the credit.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrains.className} bg-black text-white pt-16`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}