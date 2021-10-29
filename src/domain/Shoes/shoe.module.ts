import { Module } from "@nestjs/common";
import { ShoeRepositoryModule } from "src/infrastructure/Shoes/shoe.repository.module";
import { ShoeService } from "./shoe.service";

@Module({
    imports: [ShoeRepositoryModule],
    providers: [ShoeService],
    exports: [ShoeService],
})
export class ShoeServiceModule {}
