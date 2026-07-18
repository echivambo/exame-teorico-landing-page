import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eteorico.automatizamoz.tech";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
