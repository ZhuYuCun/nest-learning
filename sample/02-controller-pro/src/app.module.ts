import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [BannerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
