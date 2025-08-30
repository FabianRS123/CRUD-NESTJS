import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, nullable:true})
    name: string;

    @Column({length: 50, nullable:true})
    lastName: string;

    @Column({length: 9, nullable:true})
    phone: string;

    @Column({length: 8, nullable:true})
    dni: string;

    @Column({length: 100, unique: true, nullable:true})
    email: string;

    @Column({length: 100, unique: true, nullable:false})
    username: string;

    @Column({length: 200, nullable:false})
    password: string;

    @Column({type: 'date', nullable:true})
    dateOfBirth: Date;

    // @DeleteDateColumn()//Te sirve para no borrar el registro, solo lo marca como eliminado
    // deletedAt: Date;

}
