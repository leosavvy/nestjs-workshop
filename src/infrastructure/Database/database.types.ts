export type Shoe = {
    id: number;
    size: number;
    brand: ShoeBrands;
    material: "Leather" | "Synthetic";
};

export enum ShoeBrands {
    Kickers = "Kickers",
    Nike = "Nike",
    UnderArmour = "Under Armour",
}
