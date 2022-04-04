import { Twit } from '../entities'
import { Controller, Get, Param } from '@nestjs/common'
import { FindTwitService } from '../service/find-twit.service'

@Controller('twits')
export class TwitGetController {
    constructor(private readonly service: FindTwitService) {}

    @Get()
    async getTwits(): Promise<Twit[]> {
        return this.service.find()
    }

    @Get('/:id')
    async getTwit(@Param('id') id: number): Promise<Twit> {
        return this.service.findOne(id)
    }
}
