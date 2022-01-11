// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital Services Factory Manual 😎',
  tagline: 'Cental doucmentation repository for everything relating to tech on the Digital Services Factory team',
  url: 'https://gov-cy.github.io/dsf-manual/',
  baseUrl: '/',
  organizationName: 'gov-cy', // Usually your GitHub org/user name.
  projectName: 'dsf-manual', // Usually your repo name.
  deploymentBranch: 'deployed',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  staticDirectories: ['src/static'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog:false,
        docs: {
          path:'src/docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./src/js/sidebars.js'),
          editUrl: 'https://github.com/gov-cy/dsf-manual/tree/main/',
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
        title: 'DSF Manual',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/gov-cy/dsf-manual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GOV.CY GitHub',
                href: 'https://github.com/gov-cy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Digital Services Factory Team. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
