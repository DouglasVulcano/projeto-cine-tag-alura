import React from "react";

import styles from "./Card.module.css";

import iconFavorite from "./favoritar.png";

export default function Card({ id, title, thumb }) {
  return (
    <div className={styles.container}>
      <img src={thumb} alt={title} className={styles.capa} />
      <h2>{title}</h2>
      <img
        src={iconFavorite}
        alt={"Favoritar filme"}
        className={styles.favoritar}
      />
    </div>
  );
}
