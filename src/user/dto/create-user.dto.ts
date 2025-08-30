import { Type } from "class-transformer";
import { IsDate, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsOptional()
    phone: string;

    @IsString()
    @IsOptional()
    dni: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    dateOfBirth: Date;
}
