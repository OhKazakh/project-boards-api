import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BoardsService {
  constructor(private readonly prisma: PrismaService) { }

  create(createBoardDto: CreateBoardDto) {
    return this.prisma.board.create({ data: createBoardDto as any }); // Cast needed depending on DTO
  }

  findAll() {
    return this.prisma.board.findMany();
  }

  async findOne(id: number) {
    const board = await this.prisma.board.findUnique({ where: { id } });
    if (!board) {
      throw new NotFoundException(`Board #${id} not found`);
    }
    return board;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.prisma.board.update({
      where: { id },
      data: updateBoardDto as any,
    });
  }

  remove(id: number) {
    return this.prisma.board.delete({ where: { id } });
  }
}
