
module.exports = {
  // 站点名称
  title: 'vitepress',
  // 部署的基础路径
  base: '/',
  // 生成html的head配置：站点favicon...
  head: [

  ],
  themeConfig: {
    // 头部导航
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '百度',
        link: 'http://baidu.com' // 外部链接有特定标识
      },
    ],
    sidebar: [
      { 
        text: '基础菜单', 
        children: [
          {
            text: '包管理工具',
            link: '/components/package'
          },
          {
            text: '组件库封装',
            link: '/components/text'
          },
        ]
      },
      { 
        text: '二类菜单', 
        children: [
          {
            text: 'affix',
            link: '/components/affix'
          },
          {
            text: '表单',
            link: '/components/forms'
          }
        ]
      }
    ]
  },
}
