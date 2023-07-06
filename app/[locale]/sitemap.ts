export default async function sitemap() {
  const baseUrl = process.env.NEXT_BASE_URL;
  return [{ url: baseUrl, lastModified: new Date() }];
}
