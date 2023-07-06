import "./globals.css";
import { Inter, Cormorant } from "next/font/google";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslator } from "next-intl/server";
import Header from "./_header/Header";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--cormorant",
});

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

export default async function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${inter.className} ${cormorant.variable}`}>
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
