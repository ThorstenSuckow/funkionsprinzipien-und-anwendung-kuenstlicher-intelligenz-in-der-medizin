// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const {sortSidebarItems} = require("./src/Util");

const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ki in der medizin',
  tagline: 'All-purpose library for a general-purpose scripting language',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ki-in-der-medizin.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ThorstenSuckow', // Usually your GitHub org/user name.
  projectName: 'ki-in-der-medizin', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          async sidebarItemsGenerator({
                                        defaultSidebarItemsGenerator,
                                        ...args
                                      }) {
            // Use the provided data to generate a custom sidebar slice
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sortSidebarItems(sidebarItems);
          },

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ThorstenSuckow/ki-in-der-medizin/tree/main/',
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/ThorstenSuckow/ki-in-der-medizin/tree/main/',
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
     /* algolia: {
        appId: " ",
        apiKey: " ",
        indexName: "ki-in-der-medizin",
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',

        searchParameters: {},
        searchPagePath: 'search',
      },*/
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Home',
          src: 'img/home.svg',
        },
        items: [
          {
            type: "doc",
            docId: "kapitel/index",
            position: "left",
            label: "Inhaltsverzeichnis"
          },

          /*{to: '/blog', label: 'Blog', position: 'left'},*/
         /* {to: '/about', label: 'About', position: 'right'},*/
          {
            href: 'https://github.com/ThorstenSuckow/ki-in-der-medizin',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [/*
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/thorstensuckow',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'github.com/thorstensuckow',
                href: 'https://github.com/thorstensuckow',
              },
            ],
          },
        */],
        copyright: `copyright © ${new Date().getFullYear()} <a href="#">ki-in-der-medizin.info</a> / <a href="https://thorsten.suckow-homberg.de">Thorsten Suckow-Homberg</a>.  Except where otherwise noted, the content on this page is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php", "http", "diff", "java", "haskell", "python"]
      },
    }),
};

module.exports = config;
