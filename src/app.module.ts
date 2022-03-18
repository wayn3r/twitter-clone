import { Module } from '@nestjs/common'
import { TwitsModule } from './modules/twits/twits.module'

@Module({
    imports: [TwitsModule],
})
export class AppModule {}
