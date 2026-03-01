import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
    @ApiProperty({ example: 'Buy groceries', description: 'Заголовок задачи' })
    title: string;

    @ApiProperty({ example: 'Milk, Eggs, Bread', description: 'Описание задачи', required: false })
    description?: string;

    @ApiProperty({ enum: TaskStatus, example: TaskStatus.TODO, description: 'Статус задачи', required: false })
    status?: TaskStatus;

    @ApiProperty({ example: 1, description: 'ID доски' })
    boardId: number;

    @ApiProperty({ example: 1, description: 'ID пользователя' })
    userId: number;
}
