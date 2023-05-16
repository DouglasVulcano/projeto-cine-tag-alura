import Footer from "components/Footer";
import Header from "components/Header";

import styles from "./MainLayout.module.css";

import FavoritesProvider from "contexts/FavoritesContext";
import { Outlet } from "react-router-dom";
import React from "react";

export default function MainLayout() {
  return (
    <>
      <Header />
      <FavoritesProvider>
        <section className={styles.container}>
          <Outlet />
        </section>
      </FavoritesProvider>
      <Footer />
    </>
  );
}
