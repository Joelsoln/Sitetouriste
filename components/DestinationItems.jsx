// DestinationItem.jsx
import React from "react";
import Image from "next/image";
import styles from './DestinationItems.module.css';


export default function DestinationItem({ imageSrc, altText, title, description }) {
  return (
    <div className={styles.destinationItem}>
      <Image src={imageSrc} alt={altText} className={styles.destinationImage} />
      <div className={styles.destinationText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
