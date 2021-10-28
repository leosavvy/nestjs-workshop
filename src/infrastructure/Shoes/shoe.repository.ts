import { Injectable } from "@nestjs/common";
import { database } from "../Database/database";

@Injectable()
export class ShoeRepository {
    async getAllShoes() {
        return new Promise((resolve) => resolve(database.Shoes));
    }

    async getShoeById(shoeId: number) {
        return new Promise((resolve) =>
            resolve(database.Shoes.find((s) => s.id === shoeId)),
        );
    }
}
