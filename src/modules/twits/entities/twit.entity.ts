import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from 'src/modules/users/entities'

@Entity()
export class Twit {
    @PrimaryGeneratedColumn()
    public id: number

    @Column({ nullable: false })
    public message: string

    @ManyToOne(() => User, user => user.twits, { cascade: true })
    @JoinColumn({ name: 'userId' })
    public user: User
}
