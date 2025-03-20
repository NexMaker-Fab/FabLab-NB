import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config test
export default defineConfig({
  base:'/',
  title: "FabLab-NB",
  description: "A Cool Space",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fab course', 
        items: [
          { text: '2025-1-Fengyi Zhao', link: 'https://unnc-fab.github.io/2025-1-FYZHAO/' },
          { text: '2025-1-Yanbing', link: 'https://unnc-fab.github.io/2025-1-YANBING/' },
          { text: '2025-1-Ao liu', link: 'https://unnc-fab.github.io/2025-1-AL/' },
          { text: '2025-1-Xiaona Xu', link: 'https://unnc-fab.github.io/2025-1-XiaonaXu/markdown-examples.html' },
          { text: '2025-1-Yanbing', link: 'https://unnc-fab.github.io/2025-1-YANBING/' },
          { text: '2025-1-Xu Sun', link: '  https://fabacademy.org/2025/labs/unnc/students/xu-sun/' },
          { text: '2025-1-Yaolun Zhang', link: 'https://fabacademy.org/2023/labs/ningbo/students/yaorun-zhang/' }
        
          
        ]
       },
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
