import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Twit {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public message: string
}
