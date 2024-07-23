'use client';
import { useState } from 'react';
import styles from './MenuNav.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useLocale } from './localeProvider';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function MenuNav() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useTheme();
    const [locale, setLocale] = useLocale();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const handleLocale = () => {
        if (locale === 'fr') {
            setLocale('en');
        } else {
            setLocale('fr');
        }
    };

    return (
        <nav className={styles.nav}>
            {/* Menu hamburger */}
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
                <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
                <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
            </div>

            {/* Menu principal */}
            <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
                <li>
                    <Link href="/" className={pathname === '/' ? styles.active : ''}>
                        <FormattedMessage id='app.header.menu.lien1' defaultMessage="Accueil" />
                    </Link>
                </li>
                <li>
                    <Link href="/attraction" className={pathname === '/attraction' ? styles.active : ''}>
                        <FormattedMessage id='app.header.menu.lien2' defaultMessage="Attraction" />
                    </Link>
                </li>
                <li>
                    <Link href="/destination" className={pathname === '/destination' ? styles.active : ''}>
                        <FormattedMessage id='app.header.menu.lien3' defaultMessage="Destination" />
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
                        <FormattedMessage id='app.header.menu.lien4' defaultMessage="Contact" />
                    </Link>
                </li>
                <li>
                    <Link href="/connexion" className={pathname === '/connexion' ? styles.active : ''}>
                        <FormattedMessage id='app.header.menu.lien5' defaultMessage="Connexion" />
                    </Link>
                </li>
            </ul>
            <div className={styles.controls}>
                <label className={styles.toggleLabel}>
                    <FontAwesomeIcon icon={faLanguage} />
                    <input
                        type="checkbox"
                        checked={locale === 'en'}
                        onChange={handleLocale}
                        className={styles.toggleInput}
                    />
                </label>
                <label className={styles.toggleLabel}>
                    <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={handleTheme}
                        className={styles.toggleInput}
                    />
                </label>
            </div>
        </nav>
    );
}
