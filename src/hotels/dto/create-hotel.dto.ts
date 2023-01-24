import { ApiProperty } from '@nestjs/swagger';
export class CreateHotelDto {
    @ApiProperty({
        example: 'nombre del hotel',
        description: 'digitar nombre del hotel',
    })
    name: string;

    @ApiProperty({
        example: 'precio',
        description: 'digitar precio del hotel por noche',
    })
    price: number;

    @ApiProperty({
        example: 'direccion del hotel',
        description: 'digitar digitar del hotel',
    })
    address: string;

    @ApiProperty({
        example: 'calificacion',
        description: 'digitar numero de estrellas del 1 al 5',
    })
    star: number;
}
