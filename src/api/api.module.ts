import { Module } from "@nestjs/common";
import { ShoeController } from "./Shoes/shoes.controller";

@Module({
    imports: [],
    controllers: [ShoeController],
    providers: [],
    exports: [],
})
export class APIModule {}
