import { Outfit, Ovo } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ovo',
});

export const metadata = {
  title: 'jung - slowly but surely',
  description:
    'full-stack development projects, coding learning progress, log of fintech startup build',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
//className={`${outfit.className} ${ovo.className} antialiased`} <- inside body element
