const path = require("path");
const moment = require("moment");
const { defaultTheme } = require("vuepress");
const { link } = require("fs");

module.exports = {
  base: "/gulu-manual/",
  lang: "zh-CN",
  title: "芒果幻城魔法本",
  description: "",
  head: [
    ["meta", { name: "application-name", content: "芒果幻城魔法本" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "芒果幻城魔法本" }],
    ["meta", { name: "msapplication-TileColor", content: "#9e57eb" }],
    ["meta", { name: "theme-color", content: "#9e57eb" }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/images/icons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/icons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/images/icons/favicon-16x16.png",
      },
    ],
  ],

  theme: defaultTheme({
    logo: "/images/logo.png",
    logoDark: "/images/logoDark.png",
    navbar: [
      {
        text: "首页",
        link: "/README.md",
        activeMatch: "^/$",
      },
      {
        text: "基础",
        children: [
          {
            text: "菜单",
            link: "/Basics/README.md",
            activeMatch: "^/host/",
          },
          {
            text: "咕噜币",
            link: "/Basics/README.md",
            activeMatch: "^/host/",
          },
          {
            text: "经验值",
            link: "/Basics/README.md",
            activeMatch: "^/host/",
          },
          {
            text: "主持人篇",
            link: "/Basics/README.md",
            activeMatch: "^/host/",
          },
        ],
      },
      //家园
      {
        text: "家园🏡",
        children: [
          {
            text: "漂流瓶",
            link: "/Home/README.md",
            activeMatch: "^/host/",
          },
          {
            text: "小布丁",
            link: "/Home/README.md",
            activeMatch: "^/host/",
          },
          {
            text: "留声机",
            link: "/Home/README.md",
            activeMatch: "^/host/",
          },
          {
            text: "邮箱",
            link: "/Home/README.md",
            activeMatch: "^/host/",
          },
          {
            text: "个性家园",
            link: "/Home/README.md",
            activeMatch: "^/host/",
          },
        ],
      },
      //街区
      {
        text: "街区🏙️",
        children: [
          {
            text: "1号街区",
            children: [
              {
                text: "潇影展厅",
                link: "/Street/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "幻城商店",
                link: "/Street/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "心动匹配",
                link: "/Street/README.md",
                activeMatch: "^/host/",
              },
            ],
          },
        ],
      },
      //咕噜岛
      {
        text: "小岛🏝️",
        children: [
          {
            text: "时光",
            children: [
              {
                text: "冬日海滩",
                link: "/Island/README.md",
                activeMatch: "^/Island/",
              },
              {
                text: "夏日海滩",
                link: "/Island/README.md",
                activeMatch: "^/Island/",
              },
            ],
          },
          {
            text: "观光",
            children: [
              {
                text: "爬灯塔",
                link: "/Island/README.md",
                activeMatch: "^/Island/",
              },
              {
                text: "进树洞",
                link: "/Island/README.md",
                activeMatch: "^/Island/",
              },
              {
                text: "坐船头",
                link: "/Island/README.md",
                activeMatch: "^/Island/",
              },
              {
                text: "蹦高高",
                link: "/Island/README.md",
                activeMatch: "^/Island/",
              },
              {
                text: "篮球投掷",
                link: "/Island/README.md",
                activeMatch: "^/Island/",
              },
            ],
          },
        ],
      },
      //丧尸类
      {
        text: "⭕",
        children: [
          //虚拟游乐场
          {
            text: "虚拟游乐场",
            children: [
              {
                text: "咕噜答题❓",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "咕噜记忆🧠",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "咕噜炸弹人💣",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "咕噜泡泡堂",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "碰碰车",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "咕噜祖玛",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
            ],
          },
          //派对游戏
          {
            text: "休闲游戏",
            children: [
              {
                text: "谁是卧底",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "害你在心口难开",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
            ],
          },
          //猫鼠游戏
          {
            text: "猫鼠游戏",
            children: [
              {
                text: "工厂",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "办公室",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
            ],
          },
          //PVP
          {
            text: "PVP竞技",
            children: [
              {
                text: "大逃杀",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "霹雳行动",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
            ],
          },
          //消逝的猎人
          {
            text: "消逝的猎人",
            children: [
              {
                text: "恐怖医院",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "废弃医院",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "生化医院",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "血色宫廷",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "诡秘古堡",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "异形岛",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
              {
                text: "新恐怖医院",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
            ],
          },
          //永恒深空
          {
            text: "无尽永恒",
            children: [
              {
                text: "永恒深空",
                link: "/Funny/README.md",
                activeMatch: "^/host/",
              },
            ],
          },
        ],
      },
      {
        text: "常见问题",
        link: "/FAQ/README.md",
        activeMatch: "^/FAQ/",
      },
      {
        text: "官方网站",
        link: "http://www.mangoxr.cn/",
      },
    ],
    sidebar: {
      "/Basics/": [
        {
          text: "基础",
          collapsible: false,
          children: [
            {
              text: "菜单",
              link: "/Basics/README.md",
              activeMatch: "^/Basics/",
            },
            {
              text: "咕噜币",
              link: "/Basics/README.md",
              activeMatch: "^/Basics/",
            },
            {
              text: "经验值",
              link: "/Basics/README.md",
              activeMatch: "^/Basics/",
            },
          ],
        },
        {
          text: "主持人篇",
          collapsible: false,
          link: "/Basics/README.md",
          activeMatch: "^/Basics/",
        },
      ],
      "/Home/": [
        {
          text: "家园🏡",
          collapsible: false,
          children: [
            {
              text: "漂流瓶",
              link: "/Home/README.md",
              activeMatch: "^/Home/",
            },
            {
              text: "小布丁",
              link: "/Home/README.md",
              activeMatch: "^/Home/",
            },
            {
              text: "留声机",
              link: "/Home/README.md",
              activeMatch: "^/Home/",
            },
            {
              text: "邮箱",
              link: "/Home/README.md",
              activeMatch: "^/Home/",
            },
            {
              text: "个性家园",
              link: "/Home/README.md",
              activeMatch: "^/Home/",
            },
          ],
        },
      ],
      "/Street/": [
        {
          text: "1号街区",
          collapsible: false,
          children: [
            {
              text: "潇影展厅",
              link: "/Street/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "幻城商店",
              link: "/Street/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "心动匹配",
              link: "/Street/README.md",
              activeMatch: "^/host/",
            },
          ],
        },
      ],
      "/Island/": [
        {
          text: "时光",
          collapsible: false,
          children: [
            {
              text: "冬日海滩",
              link: "/Island/README.md",
            },
            {
              text: "夏日海滩",
              link: "/Island/README.md",
            },
          ],
        },
        {
          text: "观光",
          collapsible: false,
          children: [
            {
              text: "爬灯塔",
              link: "/Island/README.md",
            },
            {
              text: "进树洞",
              link: "/Island/README.md",
            },
            {
              text: "坐船头",
              link: "/Island/README.md",
            },
            {
              text: "蹦高高",
              link: "/Island/README.md",
            },
            {
              text: "篮球投掷",
              link: "/Island/README.md",
            },
          ],
        },
      ],
      "/Funny/": [
        //虚拟游乐场
        {
          text: "虚拟游乐场",
          collapsible: true,
          children: [
            {
              text: "咕噜答题❓",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "咕噜记忆🧠",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "咕噜炸弹人💣",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "咕噜泡泡堂",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "碰碰车",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "咕噜祖玛",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
          ],
        },
        //派对游戏
        {
          text: "休闲游戏",
          collapsible: true,
          children: [
            {
              text: "谁是卧底",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "害你在心口难开",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
          ],
        },
        //猫鼠游戏
        {
          text: "猫鼠游戏",
          collapsible: true,
          children: [
            {
              text: "工厂",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "办公室",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
          ],
        },
        //PVP
        {
          text: "PVP竞技",
          collapsible: true,
          children: [
            {
              text: "大逃杀",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "霹雳行动",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
          ],
        },
        //消逝的猎人
        {
          text: "消逝的猎人",
          collapsible: true,
          children: [
            {
              text: "恐怖医院",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "废弃医院",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "生化医院",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "血色宫廷",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "诡秘古堡",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "异形岛",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
            {
              text: "新恐怖医院",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
          ],
        },
        //永恒深空
        {
          text: "无尽永恒",
          collapsible: true,
          children: [
            {
              text: "永恒深空",
              link: "/Funny/README.md",
              activeMatch: "^/host/",
            },
          ],
        },
      ],
      //常见问题
      "/FAQ/": ["/FAQ/README.md"],
    },
    tip: "提示",
    warning: "注意",
    danger: "警告",
    backToHome: "返回首页",
    // 404 page
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
    ],
    //repo: "https://github.com/jymusic0663/gulu-manual",
    docsRepo: "https://github.com/jymusic0663/gulu-manual",
    docsBranch: "master",
    docsDir: "docs",
    editLink: true,
    editLinkText: "编辑此页",
    lastUpdated: true,
    lastUpdatedText: "上次更新",
    contributors: true,
    contributorsText: "编辑者",
    search: true,
    searchMaxSuggestions: 10,
    // a11y
    openInNewWindow: "在新窗口打开",
    toggleDarkMode: "切换夜间模式",
    toggleSidebar: "切换侧边栏",
  }),

  markdown: {
    anchor: true,
    extractHeaders: {
      level: [1, 2, 3, 4],
    },
  },

  plugins: [
    /* [
      "vuepress-plugin-qrcode",
      {
        labelText: "二维码",
        size: "medium",
        channel: true,
      },
    ], 
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        skipWaiting: true,
      },
    ],*/
    path.resolve(__dirname, "./plugins/mdPlugins"),
  ],

  //目录
  dest: "dist",
  temp: ".temp",
  cache: ".cache",
  public: "public",

  //开发项
  //pagePatterns:['**/*.md', '!.vuepress', '!node_modules'],
  debug: true,
  host: "localhost",
  port: 8628,
  open: false,
};
