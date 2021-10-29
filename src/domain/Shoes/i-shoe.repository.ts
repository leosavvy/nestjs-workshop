export interface IShoeRepository {
    getAllShoes(): Promise<Array<any>>;
    getShoeById(shoeId: number): Promise<any>;
}
