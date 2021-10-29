import { Injectable } from "@nestjs/common";
import { IShoeRepository } from "src/domain/Shoes/i-shoe.repository";
import { database } from "../Database/database";

@Injectable()
export class ShoeRepository implements IShoeRepository {
    async getAllShoes(): Promise<Array<any>> {
        return new Promise((resolve) =>
            setTimeout(() => resolve(database.Shoes), Math.random() * 1000),
        );
    }

    async getShoeById(shoeId: number) {
        return new Promise((resolve) =>
            setTimeout(
                () => resolve(database.Shoes.find((s) => s.id === shoeId)),
                Math.random() * 1000,
            ),
        );
    }
}
