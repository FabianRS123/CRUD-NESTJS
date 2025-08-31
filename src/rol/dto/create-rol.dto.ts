import { IsString, MaxLength } from "class-validator";

export class CreateRolDto {

    @MaxLength(25)
    @IsString()
    descripcion: string;

}
