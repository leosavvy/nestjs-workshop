import { Module } from "@nestjs/common";
import { ShoeRepository } from "./shoe.repository";

@Module({
    imports: [],
    providers: [ShoeRepository],
    exports: [],
})
export class ShoeRepositoryModule {}
