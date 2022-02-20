# 实现基本的增删改查
1、创建项目（看上一章）
2、我们需要一个业务处理的模块`cats`
创建模块 
``` js
  nest g resource [name]
```
3、可以直接生成模块并在根模块导入

如：
`nest g resource banner`
生成的模块如下：
.banner
├── banner.controller.spec.ts
├── banner.controller.ts
├── banner.module.ts
├── banner.service.spec.ts
├── banner.service.ts
├── dto
│   ├── create-banner.dto.ts
│   └── update-banner.dto.ts
└── entities
    └── banner.entity.ts

生成的了模块增删改查所需的controller、service、test、dto、entity

  
controller控制器接收用户请求，并交给其他（service）处理，我们把service注入到控制器，以便调用服务里的方法处理业务；  

控制器：
`import { Controller, Get, Post, Patch, Query, Delete, Body, Param, Headers } from '@nestjs/common';`

请求方法有CRUD，遵循restful规范，需要@装饰在方法上  
注意： 编辑（更新）使用`Patch`装饰器（Post, Get, Patch, Delete）

获取参数：
Param参数：uel里面的参数  如/:id    
query参数：url后面的参数 (问号后面的)   
body参数：post请求所带的参数
``` js
  // 更新
  @Patch(':id')
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  // 删除的
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
```