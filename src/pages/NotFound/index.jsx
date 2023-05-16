import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import React from "react";

export default function NotFound() {
  return (
    <>
      <section className={styles.container}>
        <h1>404</h1>
        <p>Página não encontrada!</p>
        <Link to="/">Voltar para a Home</Link>
      </section>
    </>
  );
}
