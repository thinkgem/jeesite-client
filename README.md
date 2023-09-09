
<p align="center">
 <img alt="JeeSite" src="https://jeesite.com/assets/images/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin:30px 0 30px;font-weight:bold;font-size:30px;">PC 客户端安装程序</h3>
<p align="center">
 <a href="https://jeesite.com/docs/upgrade/" target="__blank"><img alt="JeeSite-V5.x" src="https://img.shields.io/badge/JeeSite-V5.x-success.svg"></a>
 <a href="https://gitee.com/thinkgem/jeesite4/stargazers" target="__blank"><img alt="star" src="https://gitee.com/thinkgem/jeesite4/badge/star.svg?theme=dark"></a>
 <a href="https://gitee.com/thinkgem/jeesite4/members" target="__blank"><img alt="fork" src="https://gitee.com/thinkgem/jeesite4/badge/fork.svg?theme=dark"></a>
</p>

## 项目介绍

这是一个 JeeSite PC 客户端安装程序，基于 NW.js 桌面应用技术。

本软件是使用 Zip 自解压安装程序，自动创建 Windows 菜单和桌面快捷方式。

NW.js 跨平台，体积小，使用简单，官网：https://nwjs.io

## 文件介绍

* for win x64 ：适应于现代 Windows 7、8、10、11 操作系统，Chrome 版本为 110。
* for xp x86 ：适应于较老的 Windows XP 操作系统，Chrome 版本为 50，这是最后一个支持 XP 系统的 Chrome。如果使用 JeeSite Vue 版本时，请修改 vite.config.js 和 build/vite/plugin/index.ts 中的 Chrome 版本号为 50 即可。
* for macOS ：适应于 macOS 操作系统

## 如何跨平台？

1. 本项目实现了 Windows、macOS 的安装程序，如果想使用 Linux 等操作系统，可以通过 [NW.js 下载](https://nwjs.io/downloads/) 对应系统环境软件。
2. 然后将本项目中的 package.js 拷贝到，对应系统环境下指定目录。
3. 如果您有兴趣，希望可以 Pull Requests。

## 如何用到自己的项目上？

1. 使用 Zip 解压工具，打开 exe 文件
2. 编辑 package.json 里的网址为您的项目网址即可

## 如果喜欢本项目，请点亮右上角 star 按钮 ^_^

* JeeSite 官网地址：<http://jeesite.com>
* JeeSite 在线文档：<http://docs.jeesite.com>
* JeeSite 演示地址：<http://demo.jeesite.com>
* JeeSite Vue 演示地址：<http://vue.jeesite.com>
* JeeSite 源码仓库：<https://gitee.com/thinkgem/jeesite4>
* JeeSite Vue 前端源码：<https://gitee.com/thinkgem/jeesite-vue>
* JeeSite 跨平台手机端：<https://gitee.com/thinkgem/jeesite4-uniapp>
* JeeSite Cloud 微服务：<https://gitee.com/thinkgem/jeesite4-cloud>
* JeeSite 客户端安装程序：<https://gitee.com/thinkgem/jeesite-client>

