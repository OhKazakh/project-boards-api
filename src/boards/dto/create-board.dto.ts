import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
    @ApiProperty({ example: 'My Board', description: 'Название доски' })
    title: string;
}
