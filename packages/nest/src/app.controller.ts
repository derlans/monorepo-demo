import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { add } from 'share/utils/index'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    add(1, 2)
    return this.appService.getHello()
  }
}
