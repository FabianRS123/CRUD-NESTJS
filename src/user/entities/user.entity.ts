import { Rol } from "src/rol/entities/rol.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToOne(() => Rol, (rol) => rol.users)
    // @JoinColumn({ name: 'rol_id' })  //  CON ESTE PERSONALIZAS EL NOMBRE DE LA COLUMNA EN LA BASE DE DATOS
    rol: Rol;

}
