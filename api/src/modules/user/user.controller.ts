import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { FindOptionsWhere, Repository } from "typeorm";
import { UserInput } from "../../shared";
import { UserEntity } from "src/modules/user/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  @Get('all')
  getAll() {
    return this.userRepository.find();
  }

  @Get(':id')
  getOne(@Param('id') userId: string) {
    return this.userRepository.findOneBy({
      id: userId,
    });
  }

  @Post('save')
  save(@Body() instances: UserInput[]) {
    return this.userRepository.save(instances.map(i => this.userRepository.create(i)));
  }

  @Post('delete')
  delete(@Body() options: FindOptionsWhere<UserEntity>) {
    return this.userRepository.delete(options);
  }

  @Post('archive')
  archive(@Body() options: FindOptionsWhere<UserEntity>) {
    return this.userRepository.softDelete(options);
  }
}