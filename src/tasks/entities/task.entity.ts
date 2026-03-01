import { ApiProperty } from '@nestjs/swagger';
import { Board } from '../../boards/entities/board.entity';
import { User } from '../../users/entities/user.entity';

export enum TaskStatus {
    TODO = 'todo',
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
}

export class Task {
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор задачи' })
    id: number;

    @ApiProperty({ example: 'Buy groceries', description: 'Заголовок задачи' })
    title: string;

    @ApiProperty({ example: 'Milk, Eggs, Bread', description: 'Описание задачи', required: false })
    description?: string;

    @ApiProperty({ enum: TaskStatus, example: TaskStatus.TODO, description: 'Статус задачи' })
    status: TaskStatus;

    @ApiProperty({ example: 1, description: 'ID доски' })
    boardId: number;

    @ApiProperty({ type: () => Board, description: 'Связанная доска', required: false })
    board?: Board;

    @ApiProperty({ example: 1, description: 'ID пользователя' })
    userId: number;

    @ApiProperty({ type: () => User, description: 'Связанный пользователь', required: false })
    user?: User;

    @ApiProperty({ example: '2023-11-20T12:00:00Z', description: 'Дата создания' })
    createdAt: Date;
}
