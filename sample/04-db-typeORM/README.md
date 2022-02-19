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

踩坑笔记：
1、添加一个模块`photo`
```sh
$ nest g resource photo
```
2、设计表、并完成entity
photo.entity.ts
``` ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column("double")
    views: number;

    @Column()
    isPublished: boolean;
}
```
3、在service的constructor里注入使用
``` ts
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}
  ... code
```
在运行时候就报错，排查之后才发现需要在此模块里import他的实体
``` ts
import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
```
4、这样就可以在service里使用ORM的api了
如：`save`、`findOne`、`findAll`、`delete`
``` ts
// users.service
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoService.findOne(+id);
  }
```