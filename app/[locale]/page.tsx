import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
export default function Home() {
   const t = useTranslations("FateMatrix");
  return <main className={styles.main}>{t("title")}</main>;
}
