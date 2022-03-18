import { Controller } from '@nestjs/common'

@Controller('twits')
export class TwitGetController {
    public getTwits() {
        return []
    }
}
