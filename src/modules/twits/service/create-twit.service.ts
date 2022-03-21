import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTwitDto } from '../dtos/create-twit.dto'
import { Twit } from '../entity/twit.entity'

export class CreateTwitService {
    constructor(
        @InjectRepository(Twit)
        private readonly twitRepository: Repository<Twit>,
    ) {}

    async create({ message }: CreateTwitDto): Promise<Twit> {
        const twit: Twit = this.twitRepository.create({ message })
        return this.twitRepository.save(twit)
    }
}