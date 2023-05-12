import Footer from "components/Footer";
import Header from "components/Header";

import styles from "./MainLayout.module.css";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <section className={styles.container}>{children}</section>
      <Footer />
    </>
  );
}
