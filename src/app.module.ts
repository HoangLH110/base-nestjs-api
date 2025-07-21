import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ResponseModule } from "./common/response/response.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ResponseModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
