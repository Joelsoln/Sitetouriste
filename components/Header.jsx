// Header.jsx
'use client'
import styles from './Header.module.css';
import Image from 'next/image';
import Afrique from '@/public/logo4.webp';
import { useRouter } from 'next/router'; // Importer useRouter depuis next/router
import MenuNav from './MenuNav';
import { useTheme } from './ThemeProvider';

export default function Header() {

  const [theme, setTheme] = useTheme();
  return (
<header className={styles.header +' '+
        (theme === 'light'? styles.light : styles.dark)
        }>
      <div className={styles.title}>
      <a href="/">
          <Image
            src={Afrique}
            alt="logo de Notre page Web"
            width={60}
            height={57}
          />
        </a>
        <h1 className={styles.h1}>
          <span className={styles.v}>V</span>isitAfrica 
        </h1>
      </div>
      <div className={styles.navContainer}>
        <MenuNav />
      </div>
    </header>
  );
}
