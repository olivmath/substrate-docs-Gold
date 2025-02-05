const config = {
  title: 'Substrate Docs',
  tagline: 'Documentação do Substrate',
  favicon: 'img/favicon.ico',
  url: 'https://olivmath.github.io',
  baseUrl: '/substrate-docs-Gold/',
  organizationName: 'olivmath', 
  projectName: 'substrate-docs-Gold',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/olivmath/substrate-docs-Gold/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Substrate Docs',
      logo: {
        alt: 'Substrate Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/olivmath/substrate-docs-Gold',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Substrate Docs`,
    },
  },
};

module.exports = config;