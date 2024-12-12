import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/FabLab-NB/',
  title: "FabLab-NB",
  description: "A cool fablab space",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '基础',
        link: '/basic/index'
      },
      {
        text: 'API',
        link: '/api/index'
      },
      {
        text: '核心篇',
        link: '/core/index'
      },
      {
        text: '实战教学篇',
        items: [
          {
            text: '原生 JS 开发',
            link: '/teach/index'
          },
          {
            text: 'Vue', 
            link: '/teach/index'
          },
          {
            text: 'React', 
            link: '/teach/index'
          },
          {
            text: 'CRXJS Vue', 
            link: '/teach/index'
          },
          {
            text: 'CRXJS React', 
            link: '/teach/index'
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'PM', link: '/pm/pm' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
