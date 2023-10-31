/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  },
  ns: [
    'common'
  ],
  partialBundledLanguages: true,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
