'use client'
import React, { useState } from "react";
import Image from 'next/image';
import styles from "./Attraction.module.css";
import attractionsData from "./Attraction.json";

export default function Attraction() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleClick = (index) => {
        if (selectedImageIndex === index) {
            setSelectedImageIndex(null); // Fermer le menu si c&apos;est déjà ouvert
        } else {
            setSelectedImageIndex(index); // Ouvrir le menu pour l&apos;image sélectionnée
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Les Trésors d&apos;Afrique</h1>
            <p className={styles.introduction}>Découvrez les trésors de l&apos;Afrique à travers ses attractions les plus emblématiques. Des vastes étendues sauvages du parc national Kruger à la majesté des pyramides égyptiennes, chaque destination offre une expérience unique, alliant nature, histoire et culture. Laissez-vous transporter dans un voyage inoubliable à travers les paysages spectaculaires, la faune diversifiée et la richesse culturelle incomparable de l&apos;Afrique.</p>
            {attractionsData.map((attraction, index) => (
                <div key={index} className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={attraction.src} 
                            alt={attraction.alt} 
                            className={styles.image} 
                            layout="responsive" 
                            width={attraction.width}
                            height={attraction.height} 
                        />
                        <div className={styles.overlay}>
                            <p className={styles.caption}>{attraction.alt}</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        {selectedImageIndex === index ? attraction.description : `${attraction.description.slice(0, 100)}...`}
                        <span className={styles.showMore} onClick={() => handleClick(index)}>En savoir plus</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
