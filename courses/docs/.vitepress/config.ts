import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'FabLab-NB',
  description: 'UNNC-FabLab Courses | 课程与作业站点',
  base: '/courses/',
  themeConfig: {
    nav: [
      { text: 'Home', link: 'https://nbfablab.com/index.html' },
      { text: 'Hardware', link: 'https://nbfablab.com/hardware.html' },
      { text: 'Activity', link: 'https://nbfablab.com/activity.html' },
      { text: 'Courses', link: 'https://nbfablab.com/courses/' },
      { text: 'Exhibition', link: 'https://nbfablab.com/awards_patents_fullstyle.html' }
    ],
    sidebar: [
      {
        text: 'lab manage',
        items: [
          { text: 'FabLab', link: '/lab-manage/fablab/' },
          { text: 'Fab Academy', link: '/lab-manage/fab-academy/' },
          { text: 'safety', link: '/lab-manage/safety/' }
        ]
      },
      {
        text: 'tutorials',
        items: [
          { text: 'Project manage', link: '/tutorials/project-manage/' },
          { text: 'CAD design', link: '/tutorials/cad-design/' },
          { text: '3D printer', link: '/tutorials/3d-printer/' },
          { text: 'Electric design', link: '/tutorials/electric-design/' },
          { text: 'Arduino application', link: '/tutorials/arduino-application/' },
          { text: 'Laser cutting', link: '/tutorials/laser-cutting/' },
          { text: 'PCB manufacture', link: '/tutorials/pcb-manufacture/' },
          { text: 'CNC manufacture', link: '/tutorials/cnc-manufacture/' },
          { text: 'Mold', link: '/tutorials/mold/' },
          { text: 'IOT and Interaction', link: '/tutorials/iot-interaction/' },
          { text: 'Interface Application Programming', link: '/tutorials/interface-application-programming/' },
          { text: 'Material and tool', link: '/tutorials/material-tool/' },
          { text: 'Business plan basic', link: '/tutorials/business-plan-basic/' },
          { text: 'AI vehicle', link: '/tutorials/ai-vehicle/' }
        ]
      },
      {
        text: 'class',
        items: [
          { text: 'FAB ACADEMY', link: '/class/fab academy/' },
          { text: '2025-1', link: '/class/2025-1/' },
          { text: '2025-2', link: '/class/2025-2/' }
         
          
        ]
      }
    ]
  }
})
