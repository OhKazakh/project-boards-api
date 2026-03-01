import { ApiProperty } from '@nestjs/swagger';
import { Task } from '../../tasks/entities/task.entity';

export class Board {
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор доски' })
    id: number;

    @ApiProperty({ example: 'My Board', description: 'Название доски' })
    title: string;

    @ApiProperty({ example: '2023-11-20T12:00:00Z', description: 'Дата создания' })
    createdAt: Date;

    @ApiProperty({ type: () => [Task], description: 'Задачи на этой доске', required: false })
    tasks?: Task[];
}
