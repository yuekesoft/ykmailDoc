const nav = require("./nav.js");
const sidebar = require("./sidebar.js");

export default {
    title: '越客软件 操作指南',
    description: '越客邮件群发管理软件-操作指南', 
    base: '/ykmailDoc/', 
    lastUpdated: true,
    outline: 'deep', // 右侧大纲标题层级    
 
    //contributorsText: '贡献者',     
    
    markdown: {
        headers: {
            level: [0, 0]
            }
    },
      
    head: [
        // 设置 favor.ico，.vuepress/public 下
        [
            'link', { rel: 'icon', href: '/ykmailDoc/images/yklogo32_32.png' }
        ]
    ],   
  
    
    themeConfig:{
        logo: '/images/yklogo.png',// 导航栏logo
        backToHome:'返回首页',

        editLink: {
            pattern: 'https://github.com/yuekesoft/ykmailDoc/edit/master/docs/:path',
            text: '编辑此页面'
          },

        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        //   ],
      
        footer: {
            message: '',
            copyright: 'Copyright © 2023 越客软件 yuekesoft.com'
        },     

        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },   
        
        lastUpdatedText: '上次更新',
        outlineTitle: '目录', // 右侧大纲标题文本配置
      
        docsDir: 'docs',    
        // 导航栏
        nav: nav,
        // 侧边栏数组
        sidebar: sidebar,//sidebarfolder()
        //sidebar:'auto',
        sidebarDepth:3
    }
}