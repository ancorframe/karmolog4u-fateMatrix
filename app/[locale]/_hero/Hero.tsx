import React from "react";
import styles from "./hero.module.css";
import Image from "next/legacy/image";
import { useTranslations } from "next-intl";
import heroMob from "../../../public/assets/images/hero_bg_mob.webp";
import hero from "../../../public/assets/images/hero_bg.webp";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className={styles.section}>
      <div className={styles.desktop}>
        <Image
          priority
          src={hero}
          alt="Hero background"
          className={styles.hero_img}
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          placeholder="blur"
        />
      </div>
      <div className={styles.mobile}>
        <Image
          priority
          src={heroMob}
          alt="Hero background"
          className={styles.hero_img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <p className={styles.title_about}>{t("title.about")}</p>
          <p className={`${styles.title_about} ${styles.title_author}`}>
            &nbsp;{t("title.author")}&nbsp;
          </p>
        </div>
        <div className={styles.desc}>
          <p className={styles.about}>{t("about.first")}</p>
          <p className={styles.about}>{t("about.second")}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
