import { Module } from '@nestjs/common'
import { TwitDeleteController } from './controller/twit-delete.controller'
import { TwitGetController } from './controller/twit-get.controller'
import { TwitPatchController } from './controller/twit-patch.controller'
import { TwitPostController } from './controller/twit-post.controller'

@Module({
    controllers: [
        TwitGetController,
        TwitPostController,
        TwitPatchController,
        TwitDeleteController,
    ],
})
export class TwitsModule {}
