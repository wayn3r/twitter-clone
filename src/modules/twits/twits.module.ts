import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TwitDeleteController } from './controller/twit-delete.controller'
import { TwitGetController } from './controller/twit-get.controller'
import { TwitPatchController } from './controller/twit-patch.controller'
import { TwitPostController } from './controller/twit-post.controller'
import { Twit } from './entity/twit.entity'
import { CreateTwitService } from './service/create-twit.service'
import { FindTwitService } from './service/find-twit.service'

@Module({
    imports: [TypeOrmModule.forFeature([Twit])],
    controllers: [
        TwitGetController,
        TwitPostController,
        TwitPatchController,
        TwitDeleteController,
    ],
    providers: [CreateTwitService, FindTwitService],
})
export class TwitsModule {}
