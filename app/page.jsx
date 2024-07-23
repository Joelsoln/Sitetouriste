import styles from "./page.module.css";
import Accueil from "@/components/Accueil";

export const metadata = {
  title: 'biblio-app | Accueil',
  description: 'Site web presentant les meilleurs sites touristiques en Afrique',
  openGraph: {
    title: 'biblio-app | Accueil',
    description: 'Site web presentant les meilleurs sites touristiques en Afrique',
    images: ['./logo3.webp']
  }
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Accueil/>
    </main>
  );
};
