import { Twit } from './../entity/twit.entity'
import { Controller, Get } from '@nestjs/common'
import { FindTwitService } from '../service/find-twit.service'

@Controller('twits')
export class TwitGetController {
    constructor(private readonly service: FindTwitService) {}

    @Get()
    async getTwits(): Promise<Twit[]> {
        return this.service.find()
    }
}
