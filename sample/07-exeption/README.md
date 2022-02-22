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

1、新建一个异常类`nest g f filter/http-exception`

