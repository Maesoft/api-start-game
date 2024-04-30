import { User } from "src/users/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    comment:string
    @ManyToOne(()=>User, user => user.comments)
    @JoinColumn()
    user:User
}
