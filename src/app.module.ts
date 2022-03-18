import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TwitsModule } from './modules/twits/twits.module'

@Module({
    imports: [
        TwitsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'admin',
            password: 'secretpassword',
            database: 'postgres',
            autoLoadEntities: true,
            synchronize: true,
        }),
    ],
})
export class AppModule {}
