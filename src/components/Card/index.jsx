import React from "react";

import styles from "./Card.module.css";

import { useFavoritesContext } from "contexts/FavoritesContext";

import iconFavorite from "./favoritar.png";
import iconFavorited from "./desfavoritar.png";

export default function Card({ id, title, thumb }) {
  const { favorite, addFavorite } = useFavoritesContext();

  const isFavorite = favorite.find((item) => item.id === id),
    icon = isFavorite ? iconFavorited : iconFavorite;

  return (
    <div className={styles.container}>
      <img src={thumb} alt={title} className={styles.capa} />
      <h2>{title}</h2>
      <img
        src={icon}
        alt={"Favoritar filme"}
        className={styles.favoritar}
        onClick={() => {
          addFavorite({
            id: id,
            title: title,
            thumb: thumb,
          });
        }}
      />
    </div>
  );
}
