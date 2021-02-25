module.exports = {
  title: 'GazeDetect',
  tagline: 'Quick and accessible neurological condition screening.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/GazeDetect.png',
  organizationName: 'Aditya Mangalampalli', // Usually your GitHub org/user name.
  projectName: 'GazeDetect', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GazeDetect',
      logo: {
        alt: 'GazeDetect Logo',
        src: 'img/GazeDetect.png',
      },
      items: [
        {
          to: 'docs/callibration/Introduction',
          activeBasePath: 'docs/callibration',
          label: 'Tests',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog',
          activeBasePath: 'blog',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Alpheron',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GazeDetect. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
