module.exports = {
  title: 'GazeDetect',
  tagline: 'Quick and accessible neurological condition screening.',
  url: 'https://gazedetect.vercel.app',
  baseUrl: '/',
  favicon: 'img/GazeDetect.png',
  organizationName: 'Aditya Mangalampalli', // Usually your GitHub org/user name.
  projectName: 'GazeDetect', // Usually your repo name.
  plugins: [],
  themeConfig: {
    navbar: {
      title: 'GazeDetect',
      logo: {
        alt: 'GazeDetect Logo',
        src: 'img/GazeDetect.png',
      },
    },
    colorMode: {
      defaultMode: 'dark',
    },
    hideableSidebar: true,
    footer: {
      style: 'dark',
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
