//import styles from "./Player.module.scss";

import React, { useEffect, useState } from "react";

import Title from "components/Title";
import Banner from "components/Banner";

import styles from "./Player.module.css";

import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";

export default function Player() {
  const [video, setVideo] = useState({});

  const parameters = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/DouglasVulcano/cinetag_api/videos?id=${parameters.id}`
    )
      .then((response) => response.json())
      .then((data) => setVideo(data.pop()));
  }, [parameters.id]);

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
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </section>
    </>
  );
}
