'use client'
import { useEffect } from 'react';
import styles from './Accueil.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';
import Carousel from './Carousel';
import TypedEffect from './TypedEffect';

export default function Accueil() {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };

    loadBootstrap();
  }, []);

  return (
    <div className={styles.container}>
      <div className="row"> 
        <div className={`col- ${styles.leftColumn}`}> 
          <h1 className={`py-3 text_baniere textt ${styles.spacing}`}> 
            Visiter l&apos;Afrique c&apos;est <TypedEffect />
          </h1>
        </div>
        <div className={`col-6 ${styles.rightColumn}`}></div>
      </div>
      <h5 className="italic spacing-bottom">Alors, on vous aide ?</h5>
      <br className={styles.space}/>
      <Carousel />
      
      <div className={`${styles.aboutUs} ${styles.newSection}`}>
        <h2>Une aventure inoubliable... </h2>
        <p>Soyez assuré d&apos;obtenir une bonne dose de paludisme après votre visite</p>
      </div>
      <div className={styles.videoContainer}>
        <video controls autoPlay loop className={styles.video}>
          <source src="/video.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>  
      </div>
      <AboutUs />
    </div>
  );
}
