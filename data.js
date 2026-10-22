// 只改这个文件就能迭代内容；推到 main 后网页和长图自动更新。
window.PROFILE = {
  name: "Etherstrings",
  role: "独立开发者 · 全栈 + AI",
  tagline: "一个人做的守望先锋娱乐产品矩阵，累计千万级流量；从想法到上线收款全程自己来。",
  strengths: [
    { title: "扛流量", desc: "千万级流量下的稳定性、限流、缓存与成本控制" },
    { title: "一人全栈闭环", desc: "后端 / 网页 / 小程序 / 客户端 / 支付 / 部署" },
    { title: "AI 落地", desc: "模型选型 + 评测门禁 + 接进真实产品" },
  ],
  series: {
    title: "OW 娱乐产品矩阵",
    badge: "累计千万级流量",
    desc: "围绕守望先锋玩家做的一组可分享、可传播的娱乐产品，网站 + 微信小程序 + 桌面客户端多端覆盖，自带分享图和扫码裂变。",
    items: [
      { name: "你是区吗", what: "输入 BattleTag，读真实对局数据给出锐评和标签，后台异步深度判断" },
      { name: "小鱿评蛆团", what: "截图发起评审、朋友扫码投票 + 随机陪审防拉票，满票出判决分享图；公共 / 个人黑名单" },
      { name: "网恋男神/女神", what: "录一段音分析声线、匹配英雄与参考音色；实测 5 个开源声学模型，声线主判 56/56 命中" },
      { name: "刻板印象测试", what: "微信小程序，33 个测试 + 3 个小游戏，内容审核上架流程" },
    ],
    stack: ["Go", "Python", "PostgreSQL", "Redis", "React", "uni-app", "Docker", "微信 / 支付宝支付"],
  },
  projects: [
    {
      name: "万我 All is me",
      what: "一张自拍生成多种风格（二次元 / 像素 / 证件照）",
      fact: "一套 monorepo 同时出 网页 + iOS + Android，点数计费",
      stack: ["Cloudflare Workers", "D1", "Next.js", "Expo"],
    },
    {
      name: "投资复盘系统",
      what: "每天自动拉成交、行情、期权数据，按回测过的规则打分出日报",
      fact: "数据层 + 回测引擎 + 仪表盘 + SwiftUI 菜单栏 App",
      stack: ["Python", "回测", "SwiftUI"],
    },
    {
      name: "JVes",
      what: "macOS 菜单栏工具：盯住所有 AI 编程对话，谁在等我、谁跑完了",
      fact: "原生 Swift，接 Claude 自动排优先级、判断项目进度",
      stack: ["Swift", "macOS", "LLM"],
    },
  ],
  more: "还有：A 股 AI 分析推送（开源）、Unity 3D 剧情游戏、多个 AI Agent 技能插件",
  offer: [
    "需要有人把一个想法 2–4 周做成能上线、能收钱的东西",
    "需要有人做过真实大流量，又能自己把前后端和 AI 都接起来",
  ],
  contact: "github.com/Etherstrings",
};
