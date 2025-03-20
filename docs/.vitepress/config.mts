import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config test
export default defineConfig({
  base:'/',
  title: "FabLab-NB",
  description: "A Cool Space",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [

      { text: 'Tutorials', link: 'en/tutorials/tutorials' },
      { text: 'Fab course', 
        items: [
          { text: '2025-1-Fengyi Zhao', link: 'https://unnc-fab.github.io/2025-1-FYZHAO/' },
          { text: '2025-1-Yanbing', link: 'https://unnc-fab.github.io/2025-1-YANBING/' },
          { text: '2025-1-Ao liu', link: 'https://unnc-fab.github.io/2025-1-AL/' },
          { text: '2025-1-Xiaona Xu', link: 'https://unnc-fab.github.io/2025-1-XiaonaXu/' },
          { text: '2025-1-Yanbing', link: 'https://unnc-fab.github.io/2025-1-YANBING/' }
        ]
       },
      { text: 'Research', link: '/en/research/research' },
      { text: 'Exhibition', link: '/en/exhibition/exhibition' },
      { text: 'Activity', 
        items: [
          { text: '2025 Autodesk fusion360 workshop', link: ' en/activity/2025autodeskfusion' },
          { text: '2025 hackathon', link: 'en/activity/2025hackathon' }
        ]
       },
      { text: 'Hardware', link: '/en/hardware/hardware' },
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
