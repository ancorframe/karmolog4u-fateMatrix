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
      canonical: process.env.NEXT_BASE_URL,
      languages: {
        "ru-RU": `${process.env.NEXT_BASE_URL}/ru/`,
        "uk-UA": `${process.env.NEXT_BASE_URL}/ua/`,
      },
    },
    verification: {
      google: "google-site-verification=id",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: process.env.NEXT_BASE_URL,
      siteName: "Next.js",
      images: [
        {
          url: "/public/assets/images/opengraph-image.png",
          width: 800,
          height: 600,
        },
        {
          url: "/public/assets/images/opengraph-image.png",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
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
    // manifest: "https://nextjs.org/manifest.json",
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      siteId: "1467726470533754880",
      creator: "@nextjs",
      creatorId: "1467726470533754880",
      images: ["/public/assets/images/twitter-image.png"],
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
