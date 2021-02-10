import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Address } from '../entity';

@Entity("AdrContactGrp")
export class AdrContactGrp {
  @PrimaryGeneratedColumn()
  __itemNo: string

  @CreateDateColumn()
  __createdAt: string

  @UpdateDateColumn()
  __updatedAt: string

  @DeleteDateColumn()
  __deletedAt: string

  @Column()
  TextTxt: string

  @ManyToOne(() => Address, (address) => address.AdrContactGrp)
  public Address: Address;
}
