// 应用全局配置
const config = {
   // baseUrl: 'https://vue.ruoyi.vip/prod-api',
   //cloud后台网关地址
   baseUrl: 'http://192.168.1.10:8080',
   clientID: '428a8310cd442757ae699df5d894f051',
   // 应用信息
   appInfo: {
     // 应用名称
     name: "ruoyi-app-vue3",
     // 应用版本
     version: "1.1.0",
     // 应用logo
     logo: "/static/logo.png",
     // 官方网站
     site_url: "http://ruoyi.vip",
     // 政策协议
     agreements: [{
         title: "隐私政策",
         url: "https://ruoyi.vip/protocol.html"
       },
       {
         title: "用户服务协议",
         url: "https://ruoyi.vip/protocol.html"
       }
     ]
   }
 }

 export default config