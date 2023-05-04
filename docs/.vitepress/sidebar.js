const sidebar =  {
  // This sidebar gets displayed when user is
  // under `guide` directory.
  // 租用版说明文档左侧菜单
  '/guide/': [
    {
      text: '简介',
      collapsible: true,
      items:[
        { text: '软件介绍', link: '/guide/introduce' }         
      ]
    } ,
    {
      text: '快速上手',
      collapsible: true,
      items:[
        { text: '准备', link: '/guide/start' },
        { text: '注册服务端', link: '/guide/regserver' },
        { text: '软件登陆', link: '/guide/login' },
        { text: '添加客户列表', link: '/guide/addlist' },
        { text: '邮箱批量导入', link: '/guide/emplist' },
        { text: '邮件群发', link: '/guide/mailmass' },
        { text: '发送记录', link: '/guide/replylog' },     
      ]
    },
		{
      text: '常见问题',
      collapsible: true,
      items:[
        { text: '用户账号无效', link: '/guide/useridinvalid' },
        { text: '连接服务器失败', link: '/guide/netfail' },
        { text: '发送常见问题', link: '/guide/question' },
      ]
    } 
  ]
}

module.exports = sidebar;
