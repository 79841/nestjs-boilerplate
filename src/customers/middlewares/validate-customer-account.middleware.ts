import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use();
}
