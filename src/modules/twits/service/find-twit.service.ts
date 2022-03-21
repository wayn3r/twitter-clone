import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Twit } from '../entity/twit.entity'

export class FindTwitService {
    constructor(
        @InjectRepository(Twit)
        private readonly twitRepository: Repository<Twit>,
    ) {}

    public async find(): Promise<Twit[]> {
        const twits: Twit[] = await this.twitRepository.find()
        return twits
    }
}
