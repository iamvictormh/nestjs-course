import {
  MiddlewareConsumer,
  Module,
  NestModule,
  //RequestMethod,
} from "@nestjs/common";
// import { LoggerMiddleware } from "./logger/logger.middleware";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
// import { AuthMiddleware } from "./auth/auth.middleware";
import { PrismaService } from "@/prisma.service";

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log(consumer);
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes(
    //     {
    //       path: "/users",
    //       method: RequestMethod.GET,
    //     },
    //     {
    //       path: "/users",
    //       method: RequestMethod.POST,
    //     },
    //   )
    //   .apply(AuthMiddleware)
    //   .forRoutes("users");
  }
}
