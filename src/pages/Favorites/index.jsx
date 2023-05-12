import Card from "components/Card";
import styles from "./Favorites.module.css";
import Banner from "components/Banner";
import Title from "components/Title";

import videos from "json/db.json";

import React from "react";

export default function Favorites() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Title>
        <h1>Meus favoritos!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card
            key={video.id}
            id={video.id}
            title={video.titulo}
            thumb={video.capa}
          />
        ))}
      </section>
    </>
  );
}
