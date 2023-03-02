module.exports = {
  //网站标题（博客名称）
  "title": "778B",
  //加载页面的提示语�?
  "description": "温柔才是宝藏，你也是",
  "dest": "dist",
  "head": [
     [
      "link",
      {
        "rel": "icon",
        "href": "favicon.png"
      }
    ], 
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间�?",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": true,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    //配置有情链接
    "friendLink": [
      //http://43.138.16.164/
    ],
    //配置评论，比较复杂建议自己百�?
    "valineConfig": {
      "appId": "XoYVGebrakOU2FA6fhWOCGxA-gzGzoHsz",// your appId
      "appKey": "z8fnOR0R5kyLwEAoTdszjTvE", // your appKey
      "avatar": "https://s2.loli.net/2022/06/14/fgbwH1c5dlZUiuy.jpg", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填�?
    },
    "logo": "/mylogo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "778B",
    "authorAvatar": "/avatar_top.png",
    "record": "你的备案�? ", //icp备案
    "startYear": "2022",
    //关于页面的信�?
    "info": "欢迎踏入IOT的世�?",
    //社交账号设置
    "socials": {
      "github": "https://github.com/viys", //github
      //"gitlub": false, //gitlub
      //"gitee": false,//"https://gitee.com/GodLikeZeal", //gitee
      //"jianshu":false,// "https://www.jianshu.com/u/e2d051b6d2e9", //简�?
      //"zhihu": "https://www.zhihu.com/people/qian-ge-diao-63", //知乎
      //"toutiao": false, //知乎
      //"juejin": "https://juejin.cn/user/334694205359901", //掘金
      //"segmentfault": false ,//"https://segmentfault.com/u/zeal_5eecb699bdb08", 思否
      // "csdn": false, //CSDN
      //"lceda":"https://oshwhub.com/778b?tab=home&page=1",
      "oshwhub":"https://oshwhub.com/778b?tab=home&page=1",// false, //微信
      "qq": "tencent://message/?Menu=yes&uin=2628587386&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45" //QQ
    },

    //首页文案，可以自己更换每天会自动显示一�?
    "mottos": [
    {
      "zh": "天在下雨地下滑，自己跌倒自己爬�?",
      "en": "It was raining and I slipped. I fell and climbed."
    },
    {
      "zh": "花有百般红，猫与猫不同�?",
      "en": "Flowers are all kinds of red. People are different from dogs."
    },
    {
      "zh": "万物与我都是荒诞的静�?",
      "en": "Just because people gather and disperse in the wind, it's up to you and me."
    },
    {
      "zh": "月亮很亮，亮也没用，没用也亮�?",
      "en": "After learning many skills, I finally found that the most useful skill is to be open-minded."
    },
    {
      "zh": "现在，天色暗了，我也倦了�?",
      "en": "Enjoy yourself. These are the good old days you're going to miss in the years ahead. "
    }, {
      "zh": "孤独 养分 风与黄昏 水与等火 我都不缺",
      "en": "It's a bit careless to stand in the rain on a thundering day."
    },
    {
      "zh": "你走的路要繁花盛开，要人声鼎沸�?",
      "en": "I just want to stand and earn money."
    }
    ],
    //配置背景图片，每次刷新自�?
    //放public下名字跟下面一�?
    "covers": [
      '/homeImage/1.jpg',
      '/homeImage/2.jpg',
      '/homeImage/3.jpg',
      '/homeImage/4.jpg',
      '/homeImage/5.jpg',
      '/homeImage/6.jpg',
      '/homeImage/7.jpg',
      '/homeImage/8.jpg',
      '/homeImage/9.jpg',
      '/homeImage/10.jpg',
      '/homeImage/11.jpg',
      '/homeImage/12.jpg',
      '/homeImage/13.jpg',
      '/homeImage/14.jpg',
      '/homeImage/15.jpg',
      '/homeImage/16.jpg',
      '/homeImage/17.jpg',
      '/homeImage/18.jpg',
      '/homeImage/19.jpg',
      '/homeImage/20.jpg',
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {//代码块加序号
    "lineNumbers": true
  },
  //配置彩带
  plugins:[
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明�?
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和�?
        colorSaturation: "80%",
        // 色带HSL亮度�?
        colorBrightness: "60%",
        // 带状颜色不透明�?
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多�?
        colorCycleSpeed: 6,
        // 从哪一侧开始Y�? (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多�?
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
  ]
  
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt�? 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}