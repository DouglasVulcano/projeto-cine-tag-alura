import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "./logo.png";

import HeaderLink from "components/HeaderLink";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./favorites">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}
