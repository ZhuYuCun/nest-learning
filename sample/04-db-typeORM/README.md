# 链接数据库ORM框架
本案例使用nest官方推荐的typeORM，数据库是mysql

参考：
 [nest官网](https://docs.nestjs.cn/8/techniques?id=%e6%95%b0%e6%8d%ae%e5%ba%93) 
 [typeORM官网](https://typeorm.biunav.com/zh/)

首先安装所需要的依赖包
``` sh
$ npm install --save @nestjs/typeorm typeorm mysql2
```  

在app.modele.ts引入`TypeOrmModule`使用,  

``` js
// app.module.ts
  import { Module } from '@nestjs/common';
+ import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
+    TypeOrmModule.forRoot({
+      type: 'mysql',
+      host: 'localhost',
+      port: 3306,
+      username: 'root',
+      password: 'root',
+      database: 'test',
+      entities: [],
+      synchronize: true,
    }),
  ],
})
export class AppModule {}
```
这就可以链接数据库了，接下来就看怎么使用这个ORM来实现业务了

