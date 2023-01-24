import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client_users", { schema: "hotels_db" })
export class ClientUsersEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "name", length: 255 })
    name: string;

    @Column('varchar', { name: 'lastname', length: 255 })
    lastname: string;

    @Column("varchar", { name: "email", length: 255 })
    email: string;

    @Column("varchar", { name: "cel", nullable: true, length: 255 })
    cel: string | null;

    @Column("varchar", { name: "usernames", length: 255 })
    usernames: string;

    @Column("varchar", { name: "password", length: 255 })
    password: string;
}
