import React from 'react';
import TestimonialCard from './Testi';
import Gallery from './Gallery';
import styles from './AboutUs.module.css';
import pic1 from '@/public/pic1.webp';
import pic2 from '@/public/pic2.webp';
import pic3 from '@/public/pic3.webp';
import pic4 from '@/public/pic4.webp';

export default function AboutUs() {
  return (
    <div className="container">
      <div className={`${styles.newSection} row`}>
        <div className={styles.logoContainer}>
          {/* Logo or image here */}
        </div>
        <div className={styles.textContainer}>
          <h3 className="text-center">Qui sommes nous ?</h3>
          <br />
          <p>Nous sommes une entreprise passionnée par l&apos;Afrique et ses merveilles. Notre mission est de vous faire découvrir la beauté et la diversité de ce continent fascinant.</p>
          <p>Que vous souhaitiez partir en safari, vous détendre sur des plages paradisiaques ou explorer des cultures riches et variées, nous sommes là pour vous aider à vivre une expérience inoubliable.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <h2 className="text-center">Ils nous ont fait confiance</h2>
      </div>
      <br />
      <div className="row justify-content-center">
        <TestimonialCard
          image={pic1}
          alt="Photo"
          text={<span style={{ fontStyle: 'italic' }}>« Mon safari en Afrique a été une aventure inoubliable. La nature sauvage était époustouflante, avec des paysages à couper le souffle. Observer les animaux majestueux dans leur habitat naturel a été une expérience unique. »</span>}
        />
        <TestimonialCard
          image={pic2}
          alt="Photo"
          text={<span style={{ fontStyle: 'italic' }}>« Mes vacances sur les plages africaines étaient tout simplement paradisiaques. Le sable fin et les eaux cristallines offraient un cadre parfait pour la détente. Chaque moment passé au bord de l&apos;océan était un véritable moment de bonheur. »</span>}
        />
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        <TestimonialCard
          image={pic3}
          alt="Photo"
          text={<span style={{ fontStyle: 'italic' }}>« Découvrir les cultures locales en Afrique a été une expérience inoubliable. J&apos;ai plongé dans l&apos;histoire et les traditions locales à travers des rencontres authentiques. Ces moments m&apos;ont ouvert l&apos;esprit sur la richesse de la diversité culturelle africaine. »</span>}
        />
        <TestimonialCard
          image={pic4}
          alt="Photo"
          text={<span style={{ fontStyle: 'italic' }}>« Explorer les trésors cachés de l&apos;Afrique a été une aventure incroyable. Parcourir des sites historiques, admirer des paysages spectaculaires et plonger dans une nature luxuriante étaient des expériences uniques. Chaque moment passé en Afrique restera gravé dans ma mémoire pour toujours. »</span>}
        />
      </div>
      <Gallery />
    </div>
  );
}
