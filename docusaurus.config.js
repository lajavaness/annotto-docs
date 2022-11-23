// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Annotto',
  tagline: 'Our key to a successfull, simplified, fast and up to scale annotation',
  url: 'https://annotto-docs.lajavaness.com',
  baseUrl: '/annotto-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lajavaness',
  projectName: 'annotto-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      fr: {
        htmlLang: 'fr-FR',
        label: 'Français',
      },
      en: {
        htmlLang: 'en-GB',
        label: 'English',
      },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Annotto',
        logo: {
          alt: 'Annotto Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_white.svg',
        },
        items: [
          {
            label: 'Why Annotto ?',
            type: 'doc',
            docId: 'about',
            position: 'right',
          },
          {
            label: 'Install',
            type: 'doc',
            docId: 'setup',
            position: 'right',
          },
          {
            label: 'User guide',
            type: 'doc',
            docId: 'user-manual/create-account',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/lajavaness',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} La Javaness`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: false,
      },
    }),
}

module.exports = config
