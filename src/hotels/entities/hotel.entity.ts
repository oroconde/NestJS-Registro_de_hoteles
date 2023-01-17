import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("hotels", { schema: "hotels_db" })
export class HotelsEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'hotel_id' })
    hotelId: number;

  @Column('varchar', { name: 'name', length: 250 })
    name: string;

    @Column("float", { name: "price", precision: 12 })
    price: number;

    @Column("varchar", { name: "address", length: 250 })
    address: string;

    @Column("int", { name: "star" })
    star: number;
}
