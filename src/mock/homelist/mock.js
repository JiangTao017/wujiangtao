let Mock = require("mockjs")
let data = [
    {title: "中国 npm 镜像源升级公告", name: "fengmk2",num: "45626", huinum: "26"},
    {title: "【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦", name: "fengmk2",num: "45626", huinum: "26"},
    {title: "Node.js 2021年开发者报告解读：健康稳步的发展中", name: "fengmk2",num: "45626", huinum: "26"},
    {title: "【2021/11/26】请大家遵纪守法，勿发布不合规内容", name: "fengmk2",num: "45626", huinum: "26"},
    {title: "node+vue3+vite+ts开源免费的后台管理系统", name: "fengmk2",num: "45626", huinum: "26"},
    {title: "NestJs目前周下载量已经达到120万了 用nestjs开发的人多吗", name: "fengmk2",num: "45626", huinum: "26"},
    {title: "请问大家用什么框架搭建静态服务器比较好啊？", name: "fengmk2",num: "45626", huinum: "26"},

]
Mock.mock("/api/homelist", "get", function(config){
    return data
})
// 删除
Mock.mock(/\/api\/homelist\/\d/, "delete", function(config){
    console.log('config',config);
    let arr = config.url.split("/")
    
    let id = arr.pop()
    data.splice(id, 1)
    data = data.map(function(item, id){
        return {
            title: item.title,
            name: item.name,
            num: item.num,
            huinum: item.huinum
        }
    })
    return data
})
