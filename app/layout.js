import { Geist, Geist_Mono } from 'next/font/google';
import { Antonio } from 'next/font/google';
import './globals.css';
import NavbarPage from './components/Navbar';
import Footer from './components/Footer';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const antonio = Antonio({
  variable: '--font-antonio-sans',
  subsets: ['latin'],
  display: 'swap', // Recommended for better performance
});

export const metadata = {
  title: 'Tiles Galore',
  description: 'Tiles Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${antonio.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NavbarPage></NavbarPage>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
