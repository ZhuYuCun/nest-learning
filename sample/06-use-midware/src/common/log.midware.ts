import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class logMidware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req)
    next()
  }
}