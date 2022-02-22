import { BadRequestException, Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './filter/http-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new HttpException({
      error: '错了啊',
      status: 'NOT_FOUND'
    }, HttpStatus.NOT_FOUND)
    return this.appService.getHello();
  }

  @Get('test')
  getAnother(): string {
    throw new BadRequestException({
      error: '请求错误',
      status: '500'
    })
    return '测试异常';
  }

  @Get('self')
  @UseFilters(new HttpExceptionFilter())
  getSelf(): string {
    throw new BadRequestException({
      error: '自定义',
      status: '500'
    })
    return '测试异常';
  }
}
