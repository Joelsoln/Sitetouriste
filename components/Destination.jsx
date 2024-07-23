import React from "react";
import styles from "./Destination.module.css";
import DestinationItem from "./DestinationItems";
import image1 from "@/public/mar.webp";
import image2 from "@/public/zanzi.webp";
import image3 from "@/public/image8.webp";
import image4 from "@/public/image4.webp";
import image5 from "@/public/foret.webp";
import image6 from "@/public/yad.webp";
import image7 from "@/public/soleil.webp";

export default function Destination() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.intro}>
        <h1>Découvrez les Merveilles Historiques et Naturelles de l&apos;Afrique</h1>
        <p>L&apos;Afrique est un continent riche en histoire et en beauté naturelle. De ses marchés animés aux vastes étendues désertiques, en passant par ses plages idylliques, chaque coin de ce continent raconte une histoire unique. Explorez avec nous quelques-unes des destinations les plus emblématiques et découvrez la diversité culturelle et géographique qui fait de l&apos;Afrique un lieu si spécial.</p>
      </div>
      <div className={styles.destinationGrid}>
        <DestinationItem
          imageSrc={image1}
          altText="image1"
          title="Marché de Marakeck"
          description="Explorez l&apos;atmosphère vibrante et les étals colorés du célèbre marché de Marakeck, où vous pouvez découvrir une grande variété de produits locaux et d&apos;artisanat traditionnel."
        />
        <DestinationItem
          imageSrc={image7}
          altText="image2"
          title="Un coucher de soleil au Parc National de Lubumbashi"
          description="Admirez la splendeur d&apos;un coucher de soleil époustouflant au cœur du Parc National de Lubumbashi. Les teintes chaudes et les silhouettes des arbres créent une ambiance magique, offrant une expérience inoubliable au milieu de la nature sauvage de la République Démocratique du Congo."
        />
        <DestinationItem
          imageSrc={image3}
          altText="image3"
          title="Une plage à Zanzibar"
          description="Détendez-vous sur les plages de sable blanc et plongez dans les eaux turquoises de Zanzibar, une destination paradisiaque réputée pour sa beauté naturelle et son charme exotique."
        />
        <DestinationItem
          imageSrc={image4}
          altText="image4"
          title="Vue panoramique sur une ville côtière à Madagascar"
          description="Admirez la vue imprenable sur la côte de Madagascar depuis un point de vue panoramique, offrant une perspective magnifique sur les plages de sable doré et les eaux scintillantes."
        />
        <DestinationItem
          imageSrc={image5}
          altText="image5"
          title="Une image de la foret equatoriale"
          description="Explorez les vastes étendues de la foret Équatoriale, où vous pouvez découvrir des paysages époustouflants, une tranquillité à couper le souffle."
        />
        <DestinationItem
          imageSrc={image6}
          altText="image6"
          title="Monument de la Reunification Yaounde"
          description="Visitez le monument historique du Cameroun situé à Yaoundé en pleine capitale politique à moins de 1 km du centre-ville."
        />
      </div>
    </div>
  );
}
