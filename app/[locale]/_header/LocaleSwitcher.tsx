"use client";

import { usePathname } from "next-intl/client";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

const locales = ["ru", "uk"];

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const t = useTranslations("Locale");

    const localeKey = (locale:any) => {
        return t(locale)
    }
  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={pathName} locale={locale}>
                {localeKey(locale)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
