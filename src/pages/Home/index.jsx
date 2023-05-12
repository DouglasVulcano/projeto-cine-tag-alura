import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";

import videos from "json/db.json";

import styles from "./Home.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>

      <section className={styles.container}>
        {videos.map((video) => (
          <Card
            key={video.id}
            id={video.id}
            title={video.title}
            thumb={video.thumb}
          />
        ))}
      </section>
    </>
  );
}
