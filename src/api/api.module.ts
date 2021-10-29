import { Module } from "@nestjs/common";
import { ShoeServiceModule } from "src/domain/Shoes/shoe.module";
import { ShoeController } from "./Shoes/shoe.controller";

@Module({
    imports: [ShoeServiceModule],
    controllers: [ShoeController],
})
export class APIModule {}
