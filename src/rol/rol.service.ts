import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {

  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>
  ) {}

  async create(createRolDto: CreateRolDto) {
    const rol = await this.rolRepository.save(createRolDto)
    return {
      "status": "success",
      "rol": rol
    };
  }

  async findAll() {
    const roles = await this.rolRepository.find()
    return {
      "status": "success",
      "roles": roles
    };
  }

  async findOne(id: number) {
    const rol = await this.rolRepository.findOneBy({ id })
    return {
      "status": "success",
      "rol": rol
    };
  }

  async update(id: number, updateRolDto: UpdateRolDto) {
    await this.rolRepository.update(id, updateRolDto);
    const rol= await this.rolRepository.findOneBy({ id })
    return {
      "status":"success",
      "message": "Se actualizo el rol con el id " + id,
      "rol": rol
    };
  }

  async remove(id: number) {
    const rol = await this.rolRepository.findOneBy({ id });
    await this.rolRepository.delete(id);
    return {
      "status": "success",
      "message": "Se elimino el rol con el id " + id,
      "rol": rol
    };
  }
}
