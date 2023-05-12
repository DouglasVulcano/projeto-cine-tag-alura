import styles from "./Title.module.css";

export default function Title({ children }) {
  return <div className={styles.texto}>{children}</div>;
}
