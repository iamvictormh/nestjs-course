import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TasksService } from "./tasks.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("/tasks")
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  "";
  @Get()
  @ApiOperation({ summary: "Get all tasks" })
  @ApiResponse({ status: 200, description: "Return all tasks" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Get("/:id")
  getTask(@Param("id") id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: "This create a task" })
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Delete()
  deleteTasks() {
    return this.tasksService.deleteTask();
  }

  @Put()
  updateTasks() {
    return this.tasksService.updateTask();
  }

  @Patch()
  patchTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
