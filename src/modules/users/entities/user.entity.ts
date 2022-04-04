import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Twit } from 'src/modules/twits/entities'

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    public id: number

    @Column({ nullable: false })
    public name: string

    @Column({ nullable: false })
    public username: string

    @Column({ nullable: false })
    public password: string

    @Column({ nullable: false })
    public email: string

    @OneToMany(() => Twit, twit => twit.user)
    public twits: Twit[]

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date
}
