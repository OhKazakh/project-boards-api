import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'Имя пользователя' })
    name: string;

    @ApiProperty({ example: 'john@example.com', description: 'Email пользователя' })
    email: string;
}
