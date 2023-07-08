import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private/",
    },
    sitemap: `https://karmolog4u-fate-matrix.vercel.app/sitemap.xml`,
  };
}
