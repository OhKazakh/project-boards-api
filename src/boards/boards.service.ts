import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BoardsService {
  constructor(private readonly prisma: PrismaService) { }

  create(createBoardDto: CreateBoardDto) {
    return this.prisma.board.create({ data: createBoardDto as any });
  }

  findAll() {
    return this.prisma.board.findMany();
  }

  async findOne(id: number) {
    const board = await this.prisma.board.findUnique({
      where: { id },
      include: { tasks: true },
    });
    if (!board) {
      throw new NotFoundException(`Board #${id} not found`);
    }
    return board;
  }

  remove(id: number) {
    return this.prisma.board.delete({ where: { id } });
  }
}
