import { ApiProperty } from '@nestjs/swagger';
import { Task } from '../../tasks/entities/task.entity';

export class User {
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор пользователя' })
    id: number;

    @ApiProperty({ example: 'John Doe', description: 'Имя пользователя' })
    name: string;

    @ApiProperty({ example: 'john@example.com', description: 'Email пользователя' })
    email: string;

    @ApiProperty({ type: () => [Task], description: 'Задачи пользователя', required: false })
    tasks?: Task[];
}
