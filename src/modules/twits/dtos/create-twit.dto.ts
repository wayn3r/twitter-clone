import { IsString } from 'class-validator'

export class CreateTwitDto {
    @IsString()
    public readonly message: string
}
