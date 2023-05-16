import Card from "components/Card";
import styles from "./Favorites.module.css";
import Banner from "components/Banner";
import Title from "components/Title";

import React from "react";
import { useFavoritesContext } from "contexts/FavoritesContext";

export default function Favorites() {
  const { favorite } = useFavoritesContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Title>
        <h1>Meus favoritos!</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => (
          <Card key={fav.id} id={fav.id} title={fav.title} thumb={fav.thumb} />
        ))}
      </section>
    </>
  );
}
