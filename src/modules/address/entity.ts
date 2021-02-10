import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import {AdrContactGrp} from "./AdrContactGrp/entity";

@Entity("Address")
export class Address {
  @PrimaryGeneratedColumn()
  __id: string

  @CreateDateColumn()
  __createdAt: string

  @UpdateDateColumn()
  __updatedAt: string

  @DeleteDateColumn()
  __deletedAt: string

  @Column()
  __orgUnit: number

  @Column()
  AdrForenameTxt: string

  @Column()
  AdrSurnameTxt: string

  @Column()
  AdrTitleTxt: string

  @Column()
  AdrStreetTxt: string

  @Column()
  AdrStreetNumberTxt: string

  @Column()
  AdrCityTxt: string

  @Column()
  AdrPLZTxt: string

  @Column()
  AdrNotesClb: string

  @OneToMany(() => AdrContactGrp, (contact) => contact.Address)
  public AdrContactGrp: AdrContactGrp[];

}
