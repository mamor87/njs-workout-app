import { Column, Entity } from "typeorm";
import { IUser } from "../../../shared";
import { BaseEntity } from "src/entities/base.entity";

@Entity({database: 'users.db'})
export class UserEntity extends BaseEntity implements IUser {
  id: string;
  @Column('text')
  email: string;
}