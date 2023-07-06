import React from "react";
import { useTranslations } from "next-intl";
import styles from "./navigation.module.css";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { t: "services", link: "" },
  { t: "learning", link: "" },
  { t: "shop", link: "" },
  { t: "blog", link: "" },
  { t: "calculator", link: "" },
];
function Navigation() {
  const t = useTranslations("Navigation");
  const localize = (locale: any) => {
    return t(locale);
  };
  return (
    <nav className={styles.nav}>
      <Image
        src={"/assets/images/Vector.png"}
        alt="Logo"
        width={70}
        height={70}
        priority
        className={styles.logo}
      />
      <ul className={styles.link_wrap}>
        {nav.map(({ t, link }, index) => (
          <li key={index}>
            <Link href={link} className={styles.link}>
              {localize(t)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
