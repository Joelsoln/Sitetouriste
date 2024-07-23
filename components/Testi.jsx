import React from 'react';
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function TestimonialCard({ image, alt, text, bgColor }) {
  return (
    <div className="col-md-6">
      <div className={`card text-center ${styles.testimonialCard}`} style={{ backgroundColor: bgColor }}>
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.imageContainer}>
            <Image src={image} alt={alt} width={200} height={200} />
          </div>
          <p className={`card-text ${styles.cardText}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}
