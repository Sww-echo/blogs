module.exports = {
  title: '哈哈', // 配置标题
  description: '我的个人网站', //  描述
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      'link',
      {
        rel: 'icon',
        href: '/002.jpg'
      }
    ] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/public/001.jpg',
    sidebarDepth: 3,
    nav: [
      // 导航栏配置
      {
        text: '博客',
        link: '/blog/document/vuepress'
      },
      {
        text: '博客',
        link: '/blog/document/vuepress'
      }
    ],
    sidebar: {
      //  配置侧边栏
      '/blog/': [
        {
          title: '文档',
          collapsable: false,
          children: ['document/vuepress']
        }
      ]
    },
    smoothScroll: true
  }
};
