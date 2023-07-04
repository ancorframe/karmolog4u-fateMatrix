import "./globals.css";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslator } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: any) {
  // While the `locale` is required, the namespace is optional and
  // identical to the parameter that `useTranslations` accepts.
  const t = await getTranslator(locale, "Metadata");

  return {
    // metadataBase:new URL(''),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "fate_matrix",
      languages: {
        "ru-RU": "/ru/fate-matrix",
        "uk-UA": "/ua/fate-matrix",
      },
    },
    verification: {
      google: "google-site-verification=id",
    },
  };
}

interface Props {
  children: React.ReactNode;
  params: any;
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
