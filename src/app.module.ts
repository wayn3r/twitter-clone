import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TwitsModule } from './modules/twits/twits.module'
import { UsersModule } from './modules/users/users.module';

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
        UsersModule,
    ],
})
export class AppModule {}
