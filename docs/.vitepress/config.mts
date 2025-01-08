import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/",
  title: "FabLab-NB",
  description: "A Cool Space",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fab course', link: '/en/fabcourse/fabcourse' },
      { text: 'Research', link: '/en/research/research' },
      { text: 'Activity', link: '/en/activity/activity' },
      { text: 'About us', link: '/en/aboutus' }
    ],

    sidebar: [
      {
        text: 'Home', link: '/',
        items: [
          { text: 'About us', link: '/en/aboutus/aboutus' },
          { text: 'Activity', link: '/en/activity/activity' }
        ]
      },
      {
        text: 'Fabcourse', link: '/en/fabcourse/fabcourse',
        items: [
            { text: 'Fab academy2025', link: '/en/aboutus/aboutus' },
            { text: 'Fab course', link: '/en/fabcourse/fabcourse' },
            { text: 'Research', link: '/en/research/research' }
          

        ]
      }
    ],

    socialLinks: [
      { icon: 'UNNC', link: 'https://www.unnc.edu.cn/' }
    ]
  }
})
