import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FabLab-NB",
  description: "A Cool Space",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fab course', link: '/en/fabcourse/fabcourse' },
      { text: 'Research', link: '/en/research/research' },
      { text: 'Activity', link: '/en/activity/activity' },
      { text: 'About us', link: '/en/aboutus/aboutus' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Home', link: '/' },
          { text: 'About us', link: '/en/aboutus/aboutus' },
          { text: 'Fab course', link: '/en/fabcourse/fabcourse' },
          { text: 'Research', link: '/en/research/research' },
          { text: 'Activity', link: '/en/activity/activity' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'UNNC', link: 'https://www.unnc.edu.cn/' }
    ]
  }
})
