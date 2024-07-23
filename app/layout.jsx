
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.css';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import LoadingBar from '@/components/LoadingBar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LocaleProvider } from '@/components/localeProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
      <LocaleProvider>
       <ThemeProvider>
          <div>
            <Header />
            <LoadingBar/>
            <main className={styles.main}>
              {children}
            </main>
            <Footer />
          </div>
          </ThemeProvider>
          </LocaleProvider>
      </body>
    </html>
  );
}
