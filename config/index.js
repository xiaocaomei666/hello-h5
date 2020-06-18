// 小程序相关文件配置信息

/******************************** 定义环境 /s ********************************/
// 以下选择定义环境（注意对应关系，下面有appId）
// const env = 'dev' // 开发环境
const env = 'test' // 测试环境
// const env = 'prod' // 生产环境


// 地址环境 map（注意对应关系）
const envMap = {
  dev: 'http://192.168.10.171:8002/', // 开发环境
  // test: 'https://dtstest.dinghu.com/xcx/', // 测试环境
  test: 'https://xcxt.dinghu.com/', // 测试环境
  prod: '', // 生产环境
}

/******************************** 定义环境 /e ********************************/

// 小程序appid
const xcxAppId = {
  dev: '', // 开发环境
  test: 'wxaf3ccf0f0c9d421c', // 测试环境
  prod: '' // 生产环境
}


// 白名单页面配置
const authWhitePages = [
  'pages/login/login'
]

// tabbar 页面
const tabBarPages = [
  'pages/index/index',
  'pages/componentUse/componentUse',
  'pages/specialStyle/specialStyle',
  'pages/example/example'
]

// 微信授权页面
const wxAuthPage = 'pages/authorize/authorize'

// 绑定手机号码页面 
const loginPage = 'pages/login/login'

// 默认进入页面 -- 订单页面
const defaultPage = 'pages/order/order'

const config = {
  // 小程序运行环境
  env,
  // 请求 base url
  requestBaseURL: envMap[env],
  // 分享默认文案
  defaultShareConfig: {
    title: '小草莓--分享文案标题',
    path: 'pages/index/index',
    imageUrl: '../../images/1.jpg'
  },
  authWhitePages,
  tabBarPages,
  wxAuthPage,
  loginPage,
  defaultPage,
  // 腾讯地图 key
  qqMapKey: 'PZRBZ-JB5R4-DQZUF-DEEDZ-Z6IIJ-J6FI7',
}

module.exports = config