import { Shoe, ShoeBrands } from "./database.types";

export const database: { Shoes: Array<Shoe> } = {
    Shoes: [
        {
            id: 1,
            brand: ShoeBrands.Kickers,
            material: "Leather",
            size: 39,
        },
        {
            id: 2,
            brand: ShoeBrands.Kickers,
            material: "Synthetic",
            size: 42,
        },
        {
            id: 3,
            brand: ShoeBrands.UnderArmour,
            material: "Leather",
            size: 45,
        },
        {
            id: 4,
            brand: ShoeBrands.Nike,
            material: "Synthetic",
            size: 38,
        },
        {
            id: 5,
            brand: ShoeBrands.UnderArmour,
            material: "Leather",
            size: 40,
        },
    ],
};
