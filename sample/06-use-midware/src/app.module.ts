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
