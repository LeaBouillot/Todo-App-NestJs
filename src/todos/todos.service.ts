import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

// const prisma = new PrismaClient();

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    return `This action adds a new todo: ${createTodoDto.todo} is_done ${createTodoDto.isCompleted}`;
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo: ${updateTodoDto.todo} is_done ${updateTodoDto.isCompleted}`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
