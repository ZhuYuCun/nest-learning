# 异常处理  

系统抛出异常：
``` js
  throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND)
```
异常方法`HttpException` 是`@nest/common`提供的方法，接收两个参数。返回的是第一个参数对象；  

接收的参数 `HttpStatus` 提供官方提供的异常状态

``` s
  异常类可以再@nestjs/common包中找到：

  BadRequestException
  UnauthorizedException
  NotFoundException
  ForbiddenException
  NotAcceptableException
  RequestTimeoutException
  ConflictException
  GoneException
  PayloadTooLargeException
  UnsupportedMediaTypeException
  UnprocessableException
  InternalServerErrorException
  NotImplementedException
  BadGatewayException
  ServiceUnavailableException
  GatewayTimeoutException
```


# 自定义异常

1、新建一个异常类`nest g f filter/http-exception`生成如下一个文件，在里面加入了逻辑
``` js

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      })
  }
}
```
这里面接收参数并输入异常时候的所需内容。

2、局部使用
在某个路由上面使用@useFilter(new HttpExceptionFilter())  
在里面抛出异常的时候就会输出HttpExceptionFilter的返回
``` js
  @Get('self')
  @UseFilters(new HttpExceptionFilter())
  getSelf(): string {
    throw new BadRequestException({
      error: '自定义',
      status: '500'
    })
    return '测试异常';
  }
```

3、全局使用   
在全局注册使用
``` ts
// main.ts
app.useGlobalFilters(new HttpExceptionFilter())

```

