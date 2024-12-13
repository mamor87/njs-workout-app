import { BeforeInsert, Column, Entity } from 'typeorm';
import { DEFAULT_UUID, IBase } from '../shared';

@Entity()
export class BaseEntity implements IBase {
  @Column('uuid', {primary: true, unique: true, nullable: false, default: DEFAULT_UUID})
  id: string = DEFAULT_UUID;

  @BeforeInsert()
  beforeInsert() {
    this.id = this.id === DEFAULT_UUID ? crypto.randomUUID() : DEFAULT_UUID;
  }
}