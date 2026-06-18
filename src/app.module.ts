import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { ProjectsModule } from "./projects/projects.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { HelloController } from "./hello/hello.controller";
import { NestController } from "./nest/nest.controller";

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController, NestController],
})
export class AppModule {}
