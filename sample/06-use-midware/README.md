# 中间件使用  
中间件是一个执行的方法，这个方法在发起请求和接收数据之间执行，也就是用户请求controller的时候，发起请求，请求走到controller之前。中间件可以注册多个依次执行，直到中间件使用完毕之后才执行到controller。

使用方法 
中间件要是一个@Injectable装饰的类，它还需要继承`NestMiddleware`。
1、定义中间件
``` ts
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class logMidware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req)
    next()
  }
}
```
2、在所需模块中使用
module需要实现`NestModule`,forRoutes指定路径
``` ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logMidware } from './common/log.midware';
import { CarModule } from './car/car.module';


@Module({
  imports: [CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logMidware)
    .forRoutes("car")
  }
}
```
3、运行请求你会发现可以打印出log了。

4、使用场景
以上就是在请求时候打印出请求体，有时候我们调试需要这些数据，可以开发日志系统等