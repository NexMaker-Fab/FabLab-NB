import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'UNNC-FabLab 课程',
  description: '课程信息与作业展示',
  // 生产构建到子路径 /courses/
  base: '/courses/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '课程', link: '/courses/' },
      { text: '作业', link: '/assignments/' }
    ],
    sidebar: {
      '/courses/': [
        {
          text: '课程目录',
          items: [
            { text: '课程介绍', link: '/courses/intro' },
          items: [
            {
              text: 'Project manage',
              items: [
                { text: '概览', link: '/tutorials/project-manage/' },
                { text: '规划与里程碑', link: '/tutorials/project-manage/plan' },
                { text: '协作与版本控制', link: '/tutorials/project-manage/collab' }
              ]
            },
            {
              text: 'CAD design',
              items: [
                { text: '概览', link: '/tutorials/cad-design/' },
                { text: '参数化建模', link: '/tutorials/cad-design/parametric' },
                { text: '装配与工程图', link: '/tutorials/cad-design/assembly' }
              ]
            },
            {
              text: '3D printer',
              items: [
                { text: '概览', link: '/tutorials/3d-printer/' },
                { text: '切片与参数', link: '/tutorials/3d-printer/slicing' },
                { text: '材料与后处理', link: '/tutorials/3d-printer/postprocess' }
              ]
            },
            {
              text: 'Electric design',
              items: [
                { text: '概览', link: '/tutorials/electric-design/' },
                { text: '原理图与布线', link: '/tutorials/electric-design/schematic' },
                { text: '选型与供电', link: '/tutorials/electric-design/power' }
              ]
            },
            {
              text: 'Arduino application',
              items: [
                { text: '概览', link: '/tutorials/arduino-application/' },
                { text: '传感器与控制', link: '/tutorials/arduino-application/sensors' },
                { text: '通讯与扩展', link: '/tutorials/arduino-application/comms' }
              ]
            },
            {
              text: 'Laser cutting',
              items: [
                { text: '概览', link: '/tutorials/laser-cutting/' },
                { text: '版式与路径', link: '/tutorials/laser-cutting/layout' },
                { text: '安全与维护', link: '/tutorials/laser-cutting/safety' }
              ]
            },
            {
              text: 'PCB manufacture',
              items: [
                { text: '概览', link: '/tutorials/pcb-manufacture/' },
                { text: '板厂流程', link: '/tutorials/pcb-manufacture/factory' },
                { text: '焊接与测试', link: '/tutorials/pcb-manufacture/solder' }
              ]
            },
            {
              text: 'CNC manufacture',
              items: [
                { text: '概览', link: '/tutorials/cnc-manufacture/' },
                { text: 'CAM 与刀具', link: '/tutorials/cnc-manufacture/cam' },
                { text: '装夹与安全', link: '/tutorials/cnc-manufacture/fixture' }
              ]
            },
            {
              text: 'Mold',
              items: [
                { text: '概览', link: '/tutorials/mold/' },
                { text: '材料与成型工艺', link: '/tutorials/mold/material' },
                { text: '维护与翻新', link: '/tutorials/mold/maintain' }
              ]
            },
            {
              text: 'IOT and Interaction',
              items: [
                { text: '概览', link: '/tutorials/iot-interaction/' },
                { text: '设备接入与消息', link: '/tutorials/iot-interaction/device' },
                { text: '云服务与可视化', link: '/tutorials/iot-interaction/cloud' }
              ]
            },
            {
              text: 'Interface Application Programming',
              items: [
                { text: '概览', link: '/tutorials/interface-application-programming/' },
                { text: '接口设计与调用', link: '/tutorials/interface-application-programming/api' },
                { text: '可视化与交互', link: '/tutorials/interface-application-programming/visual' }
              ]
            },
            {
              text: 'Material and tool',
              items: [
                { text: '概览', link: '/tutorials/material-tool/' },
                { text: '工具使用与维护', link: '/tutorials/material-tool/tools' },
                { text: '采购与存储', link: '/tutorials/material-tool/supply' }
              ]
            },
            {
              text: 'Business plan basic',
              items: [
                { text: '概览', link: '/tutorials/business-plan-basic/' },
                { text: '成本与定价', link: '/tutorials/business-plan-basic/pricing' },
                { text: '路演与文档', link: '/tutorials/business-plan-basic/pitch' }
              ]
            },
            {
              text: 'AI vehicle',
              items: [
                { text: '概览', link: '/tutorials/ai-vehicle/' },
                { text: '控制与仿真', link: '/tutorials/ai-vehicle/control' },
                { text: '软硬件集成', link: '/tutorials/ai-vehicle/integration' }
              ]
            }
          ]
