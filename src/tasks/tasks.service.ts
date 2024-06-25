import { Injectable } from '@nestjs/common';
import { State, Task } from './tasks.entity';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      "id": "1",
      "title": "test",
      "description": "foo-bar",
      "state": State.PENDING
    },
    {
        "id": "2",
        "title": "test",
        "description": "foo-bar",
        "state": State.DONE
    },
    {
        "id": "3",
        "title": "test",
        "description": "foo-bar",
        "state": State.PENDING
    }
  ]

  list() : Task[] {
    return this.tasks
  }

  find(id: string): Task | null {
    const found = this.tasks.find(f => f.id === id)

    return found
  }

  findIndex(id: string): number {
    return this.tasks.findIndex(f => f.id === id)
  }

  create( data: { id: string, title: string, description: string } ): Task {
    const newTask: Task = {
      id: data.id,
      title: data.title,
      description: data.description,
      state: State.PENDING
    }

    this.tasks.push(newTask)

    return newTask
  }

  get(id: string): Task | null {
    const task = this.find(id)
    return task
  }

  update(id: string, data: Partial<Task>): Task | null {
    let task = this.find(id)
    if(task) {
      const index = this.findIndex(id)
      task = { ...task, ...data }
      this.tasks[index] = task
    }

    return task;
  }

  delete(id: string): Task | null {
    const deleted = this.find(id)
    this.tasks = this.tasks.filter((t => t.id !== id))

    return deleted
  }
}
