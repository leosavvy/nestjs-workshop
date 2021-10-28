import { Injectable } from "@nestjs/common";
import { database } from "../Database/database";

@Injectable()
export class ShoeRepository {
    async getAllShoes() {
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
