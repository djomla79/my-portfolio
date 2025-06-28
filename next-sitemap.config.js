/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://my-portfolio-mladen-todorovic.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'yearly',
  priority: 0.7,
  exclude: ['/api/*'],
};
