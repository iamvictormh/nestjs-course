import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private tasks: CreateTaskDto[] = [];

  getTasks(): CreateTaskDto[] {
    return this.tasks;
  }

  getTask(id: number): CreateTaskDto | NotFoundException {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`The task with id ${id} is not found`);
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    task = {
      ...task,
      id: this.tasks.length + 1,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask() {
    return "updating task";
  }

  deleteTask() {
    return "deleting task";
  }

  updateTaskStatus() {
    return "updating task status";
  }
}
