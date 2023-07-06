import React from "react";
import { useTranslations } from "next-intl";
import styles from "./navigation.module.css";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.png";

const nav = [
  { t: "services", link: "https://karmolog4u.com.ua/#services" },
  { t: "learning", link: "https://karmolog4u.com.ua/#education" },
  { t: "shop", link: "https://karmolog4u.com.ua/catalog" },
  { t: "blog", link: "#" },
  { t: "calculator", link: "https://karmolog4u.com.ua/calculation/ua" },
];
function Navigation() {
  const t = useTranslations("Navigation");
  const localize = (locale: any) => {
    return t(locale);
  };
  return (
    <nav className={styles.nav}>
      <a
        href="https://karmolog4u.com.ua/"
        rel="noreferrer"
        style={{ display: "flex" }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={70}
          height={70}
          priority
          className={styles.logo}
        />
      </a>
      <ul className={styles.link_wrap}>
        {nav.map(({ t, link }, index) => (
          <li key={index}>
            <a href={link} className={styles.link} rel="noreferrer">
              {localize(t)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
