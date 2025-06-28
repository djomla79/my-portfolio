/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://name-of-the-site',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],
};
