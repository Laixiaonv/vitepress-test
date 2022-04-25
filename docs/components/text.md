element-plus  这个要基于vue3才可以

构建工具： vite
文档工具：vitepress
包管理工具：pnpm

### ui组件库选型

> element-ui

> element-plus

element-ui 对比  element2 基本不支持手机版
element-plus 对比 element3 组件在布局上考虑了手机版的展示
element-plus：基于vue3，面向设计师和开发者的组件库

### 构建工具

> pnpm  

> npm

> yarn

### 包管理工具

> vite

* 几乎实时的服务启动
* 根据需要编译页面
* 非常轻量快速的HMR(特模块重载)
* 构建更快（Rollup）

### 文档工具

`Nuxt`主要是为了创建应用程序，`vuePress`和`vitePress`都是在Vite之上构建的Vue驱动的静态站点生成器，更为轻量化，并且更专注在以内容为中心的静态网站上。

> vuePress

> vitePress  

主要是用vite打包工具，vuePress用的是webpack，所以vitePress会更轻量级

* vue3 treeShaking +  Rollup 代码分离
* 不会把所有页面的元数据都在一个请求中发送出去。客户端导航时再一起获得新页面的组件及元数据
* 没有用 `vue-router`，写了个轻量的路由（200 行代码）
* （WIP）i18n本地化数据根据需要请求
* 配置量更少，因此比vuePress的复杂性要低一些，主题API也会少一些（倾向于 JavaScript API 而不是文件布局方式）且`没有插件`（所有的定制都在主题内）

> Hexo






