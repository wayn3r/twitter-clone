import { NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Twit } from '../entities'

export class FindTwitService {
    constructor(
        @InjectRepository(Twit)
        private readonly twitRepository: Repository<Twit>,
    ) {}

    public async find(): Promise<Twit[]> {
        const twits: Twit[] = await this.twitRepository.find({
            relations: ['user'],
        })
        return twits
    }

    public async findOne(id: number): Promise<Twit> {
        const twit: Twit = await this.twitRepository.findOne(id, {
            relations: ['user'],
        })

        if (!twit) {
            throw new NotFoundException('Twit not found')
        }
        return twit
    }
}
