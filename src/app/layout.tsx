import { Arimo } from 'next/font/google';

import NavBar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';

import './globals.css';

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
