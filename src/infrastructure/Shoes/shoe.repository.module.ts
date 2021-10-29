import { Module } from "@nestjs/common";
import { ShoeRepositoryProvider } from "./shoe.repository.provider";

@Module({
    imports: [],
    providers: [ShoeRepositoryProvider],
    exports: [ShoeRepositoryProvider],
})
export class ShoeRepositoryModule {}
