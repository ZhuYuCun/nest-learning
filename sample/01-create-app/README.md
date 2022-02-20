# 创建项目
如果你安装好了node环境和npm，就可以直接安装nest的脚手架，用它生成nestjs项目的基础代码。
```
$ npm i -g @nestjs/cli
$ nest new project-name
```
* project-name 是你的项目名称
* 根据个人喜好可以选择不同的包管理工具，npm、yarn、pnpm
* 执行完毕接下来就可以安装依赖，运行了。

这样你就得到一个基础的、可开发的架构。以后我们的工作都在这样的架构基础之上开发。

# 基础架构

├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
开发目录在`src`下面，main.ts是整个项目的入口文件。nest是基于express开发的。

app.module.ts  
根目录，整个项目的入口，
有@Module装饰器装饰的类是模块，整个类是模块的入口，要把控制器、服务等注册到这个装饰器里  

@Injectable装饰服务，把服务变成一个可注入的类


@Controller装饰的类是控制器，服务可注入到控制器使用  
