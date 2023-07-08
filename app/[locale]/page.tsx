import styles from "./page.module.css";
import MatrixCalc from "./components/MatrixCalc/MatrixCalc";
import Hero from "./_hero/Hero";

export const metadata = {
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/shortcut-icon.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
      {
        rel: "icon",
        url: "/icon.ico",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <MatrixCalc />
    </main>
  );
}
