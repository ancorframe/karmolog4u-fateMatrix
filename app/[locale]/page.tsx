import styles from "./page.module.css";
import MatrixCalc from "./components/MatrixCalc/MatrixCalc";
import Hero from "./_hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <MatrixCalc />
    </main>
  );
}
