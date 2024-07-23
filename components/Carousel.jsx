import Image from 'next/image';
import logo from '@/public/bousole.webp';
import styles from './Carousel.module.css';
import one from '@/public/1.webp';
import deux from '@/public/2.webp';
import three from '@/public/3.webp';
import four from '@/public/4.webp';
import five from '@/public/5.webp';
import six from '@/public/6.webp';
import seven from '@/public/7.webp';

export default function Carousel() {
  const images = [logo, one, deux, three, four, five, six, seven]; // Liste des images à afficher

  return (
    <div className={styles.carouselContainer}>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="3000" data-bs-duration="400">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={600}
                height={500}
                className="d-block w-100"
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
