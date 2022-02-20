
# 添加swagger
1、安装所需依赖
`npm install --save @nestjs/swagger swagger-ui-express`

2、在main里面导入使用，如下：
``` ts
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 导入swagger并使用
  const options = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

以上setup就是启动路径，在localhost:3000/api路径就可访问到swagger的文档了


