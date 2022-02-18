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