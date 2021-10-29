import { Inject, Injectable } from "@nestjs/common";
import { IShoeRepository } from "./i-shoe.repository";

@Injectable()
export class ShoeService {
    constructor(
        @Inject("ShoeRepository")
        private readonly shoeRepository: IShoeRepository,
    ) {}

    async getAllShoes(): Promise<Array<any>> {
        return this.shoeRepository.getAllShoes();
    }

    async getShoeById(shoeId: number): Promise<any> {
        return this.shoeRepository.getShoeById(shoeId);
    }
}
