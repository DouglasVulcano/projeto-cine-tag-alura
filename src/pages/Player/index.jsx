//import styles from "./Player.module.scss";

import React from "react";

import Title from "components/Title";
import Banner from "components/Banner";

import videos from "json/db.json";
import styles from "./Player.module.css";

import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";

export default function Player() {
  const parameters = useParams();

  const video = videos.find((item) => item.id === Number(parameters.id));

  if (!video) return <NotFound />;

  return (
    <>
      <Banner imagem="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </section>
    </>
  );
}
