---
title: 使用VuePress和Markdown构建网站
date: 2022-02-11 14:59:23
permalink: /website/vuePress/
categories:
  - 网站搭建
tags:
  - 网站搭建
titleTag: 原创
author:
  name: 纪先生
  link: https://xxx.com
---
# 使用VuePress 和Markdown构建网站

## vuePress简介

VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用Markdown来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。

## 开始

VuePress 的官方网站写的很好，按照官方提供的步骤来就可以了，我这里补充一些自己根据文档没有做出来效果遇到的问题。

具体的工程初始化可直接参考官网：[VuePress](https://v2.vuepress.vuejs.org/zh/guide/)

我的网站主题是 [vuepress-theme-vdoing](https://doc.xugaoyi.com/)

一步到底的话参考 [使用Vuepress搭建博客](http://www.inode.club/webframe/tool/vuepressBlog.html)

参考以上三个网站就可以搭建出一个基本网站的雏形了



下面是我在搭建期间遇到麻烦的地方

### 导航目录

首先根据上面两个网站搭建出一个雏形(正常的文件结构)， 与我们构建网站相关的主要是docs文件夹，我的目录结构是

```
├─ docs
│  ├─ .vuepress(必选)
│  │  └─ config.js （设置网站全局信息的）
│  ├─ @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)
│  ├─ .... (自定义文件夹，存放写的md文章)
│  └─ index.md (首页，构建后的index页面)
├─ .gitignore
└─ package.json
```

**2-vuePress-nav-folder.png**

`.vuePress/config.js` 中目录结构的配置如下

```javascript
module.exports = {
	  themeConfig:{
	  	nav: [
      {text:"主页",link:"/"},
      { text: "Java相关",
        items:[
               {text:"虚拟机系列",link:"/jvm/head/"},
               {text:"杂文",link:"/essay/XOR/"},
            ]
      },
        {text: "MySQL相关", link: "/MySQL/"},
        { text: "问题与设计系列", link: "/design/pt-change/"},
        { text: "网站搭建", link: "/website/"},
        { text: "休息一下", link: "/games/"},
      ],
	  }
}
```

实际的效果如下

**2-vuePress-nav-result.png**



### 主题设置

[vuepress-theme-vdoing 主题的官方文档](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/)

#### 安装

> yarn add -D vuepress-theme-vdoing



#### 配置

`.vuePress/config.js` 中主题配置如下

```javascript
module.exports = {
  theme: 'vdoing',
  }
```



`.vuePress/config.js` 侧边栏配置如下（用默认的**structuring**即可）

> 自动生成结构化侧边栏, 注意最多支持4级目录,切文件名前需要指定序号

```javascript
module.exports = {
	    //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    sidebar: 'structuring',
  }
```



### 注意事项

* md文件或者目录以“数字.”的形式命名，如 “00.java基础”，“10.MySQL主从复制.md”等，文章显示的顺序就是依赖数字排序(数字尽量不要连续，方便后续增加)。
* 文中的图片不能使用中文命名，否则会编译失败。
* 文件夹或者文件如果不是以数字开始的，则不会展示(**小技巧：文章没有写完或者不想发布的文章不已数字开头命名就不会对外展示**)



### 设置文章

可以设置文章的作者，时间等

运行启动之后会自动在md的第一行添加文章的内容，默认如下

title：标题，date：日期，permalink：文章地址(随机生成，建议改成固定的)，tags：标签

```
title: 使用VuePress和Markdown构建网站
date: 2022-02-11 14:59:23
permalink: /website/vuePress/ 
categories:
  - 网站搭建
tags:
  - 网站搭建
```

还可以手动添加（titleTag：文章的类型，author：作者，）

```
titleTag: 原创,优质 # 原创、转载 、优质、推荐
author:
  name: 纪先生
  link: https://xxx.com
```

其中author还可以通过全局配置(md的配置会覆盖全局的)

```javascript
module.exports = {
	  themeConfig:{
				 author: '阿纪',
	  }
}
```

效果如下

**2-vuePress-page.png**



### 网站的head配置

设置网站的icon，就是浏览器地址栏左边显示的图片，还有就是给网站添加一些脚本script(我这里添加的是umami监控的脚本)

`.vuePress/config.js` 中head配置如下

> 下方图标应该存放的位置是.vuePress/public/目录下

```javascript
module.exports = {
	head: [
				// 浏览器中地址栏左侧显示的图标
				['link', { rel: 'icon', href: 'ajisun-logo-circular.png' }],
        // 添加百度站长的自动推送代码
        [ 'script', { src: '/assets/js/autopush-baidu.js' } ],
        // 第三方的script js(正常的script配置是<script async defer data-website-id="xxxxx" src="https://www.ajisun.fun/umami.js"></script>)
        ['script',
            {
              'data-website-id': 'xxxxx',
              async: 'async',
              defer: 'defer',
              src: 'https://www.ajisun.fun/umami.js',
            },
        ],
	],
}
```



### 配置页脚和社交信息

`.vuePress/config.js` 中社交和页脚的配置如下

```javascript
module.exports = {
	  themeConfig:{
         social: {
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
              '纪先生进阶指南 |  <a href="https://beian.miit.gov.cn" target="_blank">皖ICP备2022001441号</a>',
    				},
	  		},
}
```

效果如下：

**2-vuePress-nav-folder.png**



### 三方插件



#### 全局搜索

默认的主题已经自带搜索功能，不过搜索的范围小而已，只能搜索页面的**标题，h2，h3**以及**tags**的搜索，并非全文搜索，效果如下

**3-plugin-search-1.png**





