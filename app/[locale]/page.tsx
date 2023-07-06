import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import MatrixCalc from "./components/MatrixCalc/MatrixCalc";
import Hero from "./_hero/Hero";
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <MatrixCalc />
    </main>
  );
}
