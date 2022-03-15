const autometa_options = {
  site: {
    name: '纪先生进阶指南',
    twitter: 'AJiSun',
  },
  canonical_base: 'https://www.ajisun.fun',
};

module.exports = {
  theme: 'vdoing',
  title: '纪先生',
  description: '以系列的方式分享Java技术，让知识更成体系；还有成长的思考和人生杂谈；日拱一卒无有尽，功不唐捐终入海！',
  head: [
        ['meta', { name: 'keywords', content: 'Java,MySQL系列,redis,问题与设计,开发问题,纪先生,虚拟机系列,网站建设'}],
        ['link', { rel: 'icon', href: 'ajisun-logo-circular.png' }],
        // 添加百度站长的自动推送代码
        [ 'script', { src: '/assets/js/autopush-baidu.js' } ],
        ['script',
            {
              'data-website-id': 'b658c055-9732-46ea-ab02-681e07f7d0b1',
              async: 'async',
              defer: 'defer',
              src: 'https://www.ajisun.fun:8443/umami.js',
            },
        ],
    ],
  meta: [{ name: "baidu-site-verification", content: "dCYlBWNrHs5lRHl3" }],
  markdown: {
    toc: {
        includeLevel:[1, 2, 3, 4]
      }
    },
  themeConfig:{
    logo: 'https://cdn.jsdelivr.net/gh/AJiSun/CDN/logo/ajisun-logo.jpeg',
    categoryText: '随笔',
    nav: [
      {text:"主页",link:"/"},
      { text: "Java相关",
        items:[
               {text:"虚拟机系列",link:"/jvm/head/"},
               // {text:"java基础知识",link:"/java-base/"},
               {text:"杂文",link:"/essay/XOR/"},
            ]
      },
        {text: "MySQL相关", link: "/MySQL/"},
        { text: "问题与设计系列",
              items:[
                  {text:"问题设计系列",link:"/design/pt-change/"},
                  {text:"开发问题集合",link:"/question/parameters/"},
                ]
        },
        { text: "网站搭建", link: "/website/"},
        { text: "休息一下", link: "/games/"},
        // { text: "其他", link: "/other/pt-change/"},
        // { text: "杂谈", //面试相关
        //   items:[
        //          {text:"杂谈",link:"/gossip"},
        //       ]
        // },
        // { text: "本人",link: "/myself/"},
      ],
    sidebarDepth: 2,
    //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    sidebar: 'structuring',
    // lastUpdated: '上次更新',
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    author: '阿纪',
    // {
    //   name: '阿纪', // 必需
    //   // link: 'https://github.com/xugaoyi', // 可选的
    // },
    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:sunj.guang@foxmail.com',
        },
        {
          iconClass: 'icon-zhihu',
          title: '知乎',
          link: 'https://www.zhihu.com/people/ajisun',
        },
        {
          iconClass: 'icon-juejin',
          title: '掘金',
          link: 'https://juejin.cn/user/123624772082791',
        },
        {
          iconClass: 'icon-bokeyuan',
          title: '博客园',
          link: 'https://www.cnblogs.com/sunjiguang',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        '纪先生进阶指南 |  <a href="https://beian.miit.gov.cn" target="_blank">皖ICP备2022001441号</a>', // 博客版权信息，支持a标签或换行标签</br>
    },


  },
  plugins: [
    // copyright
    // [
    //   'vuepress-plugin-copyright',
    //   {
    //     noCopy: true, // the selected text will be uncopiable
    //     minLength: 100, // if its length is greater than 100
    //     authorName: "纪先生指南",
    //   },
    // ],
    // markdown容器插件
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    // leanCloud评论插件
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#valine-vuepress-comment",
          appId: "zFOx6DIjNVtmwWA23HaKBHBC-gzGzoHsz",
          appKey: "SSEnLnIvJtWVhdiuceyrD53Q",
          path: '<%- frontmatter.to.path %>'
        }
      }
    ],
    // 配置插件vuepress-plugin-thirdparty-search, 默认主题的搜索框集成第三方搜索引擎
    [
      "thirdparty-search",
      {
        thirdparty: [
          // 可选，默认 []
          {
            title: "在谷歌中搜索",
            frontUrl: "https://www.google.com.hk/search?q="
          },
          {
            title: "在百度中搜索", // 在搜索结果显示的文字
            frontUrl: "https://www.baidu.com/s?wd=", // 搜索链接的前面部分
            behindUrl: "" // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在360中搜索",
            frontUrl: "https://www.so.com/s?q="
          }
        ]
      }
    ],
    ['autometa', autometa_options],
    ['sitemap', {
        hostname: "https://www.ajisun.fun",
        // 排除无实际内容的页面
        exclude: ["/404.html"]
        }
     ],
     ['vuepress-plugin-baidu-autopush']


  ]



}
