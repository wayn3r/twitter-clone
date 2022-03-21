import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Twit {
    @PrimaryGeneratedColumn()
    public id: number

    @Column({ nullable: false })
    public message: string
}
