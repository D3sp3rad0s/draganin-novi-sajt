import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Header from '@/components/Header'; // DODALI SMO OVO
import Footer from '@/components/Footer'; // I OVO

export const metadata = {
  title: 'Dragana Mirković - Prototip',
  description: 'Novi, moderni sajt za DM',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50`}
      >
        <Header />
        {/* Ovdje {children} predstavlja sadržaj naših stranica (page.js) */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}