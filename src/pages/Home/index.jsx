import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";

import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/DouglasVulcano/cinetag_api/videos"
    )
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

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
