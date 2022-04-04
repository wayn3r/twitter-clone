import { Body, Controller, Post } from '@nestjs/common'
import { CreateTwitDto } from '../dtos/create-twit.dto'
import { Twit } from '../entities'
import { CreateTwitService } from '../service/create-twit.service'

@Controller('twits')
export class TwitPostController {
    constructor(private readonly service: CreateTwitService) {}

    @Post()
    public async create(@Body() twitData: CreateTwitDto): Promise<Twit> {
        const twit: Twit = await this.service.create(twitData)
        return twit
    }
}
