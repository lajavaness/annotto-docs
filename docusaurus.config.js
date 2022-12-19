// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Annotto',
	tagline: 'Annotto is the only go to annotation tool to successfully annotate your documents at scale',
	url: 'https://lajavaness.github.io',
	baseUrl: '/annotto-docs/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'lajavaness',
	deploymentBranch: 'gh-pages',
	trailingSlash: false,
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
			"docusaurus-preset-openapi",
			/** @type {import('docusaurus-preset-openapi').Options} */
			{
				api: {
					path: "./Annotto_open_api.yml",
					routeBasePath: "/api",
				},
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
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
						position: 'left',
					},
					{
						label: 'Install',
						type: 'doc',
						docId: 'setup',
						position: 'left',
					},
					{
						label: 'User guide',
						type: 'doc',
						docId: 'user-manual/create-account',
						position: 'left',
					},
					{
						to: '/api',
						label: 'API',
						position: 'left',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					},
					{
						href: 'https://github.com/lajavaness/annotto',
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
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
}

module.exports = config
