"use client";

import { usePathname } from "next-intl/client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import styles from "./localeSwitcher.module.css";
import { useState } from "react";

const locales = ["ru", "uk"];

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathName = usePathname();
  const t = useTranslations("Locale");

  const localeKey = (locale: any) => {
    return t(locale);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        {localeKey(locale)}
      </button>
      <ul
        className={`${styles.dropdown_list} ${
          isOpen ? styles.dropdown_list__open : ""
        }`}
      >
        {locales.map((l) => {
          if (l !== locale) {
            return (
              <li key={l}>
                <Link className={styles.link} href={pathName} locale={l}>
                  {localeKey(l)}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
