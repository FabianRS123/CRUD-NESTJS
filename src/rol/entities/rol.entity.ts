import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Rol {

    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"varchar", length:25})
    descripcion:string

    @OneToMany(() => User, (user) => user.rol)
    users: User[];
}
