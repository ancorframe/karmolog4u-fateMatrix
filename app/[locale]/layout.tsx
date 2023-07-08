import "./globals.css";
import { Cormorant } from "next/font/google";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslator } from "next-intl/server";
import Header from "./_header/Header";
import localFont from "next/font/local";

const futuraPt = localFont({
  src: [
    {
      path: "../../public/assets/fonts/FuturaPT-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FuturaPT-Book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FuturaPT-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FuturaPT-Heavy.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FuturaPT-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FuturaPT-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--futuraPt",
});

const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--cormorant",
});

export async function generateMetadata({ params: { locale } }: any) {
  // While the `locale` is required, the namespace is optional and
  // identical to the parameter that `useTranslations` accepts.
  const t = await getTranslator(locale, "Metadata");

  return {
    metadataBase: new URL("https://karmolog4u-fate-matrix.vercel.app"),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/",
      languages: {
        "ru-RU": `/ru/`,
        "uk-UA": `/ua/`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "/",
      siteName: "Karmolog4u",
      images: [
        {
          url: `/opengraph-image.jpg`,
          width: 624,
          height: 630,
        },
        {
          url: "/opengraph-image.jpg",
          width: 1800,
          height: 1200,
          alt: "Custom alt",
        },
      ],
      locale: locale,
      type: "website",
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    themeColor: "black",
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      siteId: "1467726470533754880",
      creator: "@Karmolog4u",
      creatorId: "1467726470533754880",
      images: ["/twitter-image.jpg"],
    },
    manifest: "/manifest.json",
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
        <body className={`${futuraPt.className} ${cormorant.variable}`}>
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
