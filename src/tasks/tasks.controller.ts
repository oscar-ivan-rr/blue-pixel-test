import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './DTOs/CreateTaskDTO';
import { GetTaskDTO } from './DTOs/GetTaskDTO';
import { UpdateTaskDTO } from './DTOs/UpdateTaskDTO';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {}

  @UseGuards(AuthGuard)
  @Get()
  list() {
    return this.taskService.list()
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  get(@Param() params: GetTaskDTO) {
    const task = this.taskService.find(params.id)

    return task || {}
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param() params: {id: string}) {
    return this.taskService.delete(params.id) || {}
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() body: CreateTaskDTO) {
    return this.taskService.create({
      id: body.id,
      title: body.title,
      description: body.description
    })
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param() params: {id: string}, @Body() body: UpdateTaskDTO) {
    return this.taskService.update(params.id, body) || {}
  }
}
