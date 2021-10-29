import { Provider } from "@nestjs/common";
import { ShoeRepository } from "./shoe.repository";

export const ShoeRepositoryProvider: Provider = {
    provide: "ShoeRepository",
    useClass: ShoeRepository,
};
