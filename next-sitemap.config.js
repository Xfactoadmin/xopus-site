/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://xopus.fr",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: [
      "https://xopus.fr/sitemap-0.xml",
    ],
  },
  exclude: ["/404", "/500", "/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  generateIndexSitemap: true,
  outDir: "./public",
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/fonctionnalites": 0.9,
      "/tarifs": 0.9,
      "/comparateur": 0.8,
      "/conformite": 0.8,
      "/contact": 0.7,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: `https://xopus.fr${path}`,
          hreflang: "fr",
        },
      ],
    };
  },
};