import {
    Controller,
    Get,
    Logger,
    Param,
    ParseIntPipe,
    Query,
    Req,
} from "@nestjs/common";
import { Request } from "express";
import { ShoeService } from "src/domain/Shoes/shoe.service";
import { database } from "src/infrastructure/Database/database";

@Controller("shoe")
export class ShoeController {
    constructor(private readonly shoeService: ShoeService) {}

    @Get("/")
    async findAllShoes(): Promise<any> {
        return this.shoeService.getAllShoes();

        // return database.Shoes;
    }

    @Get("/:shoeId")
    async findShoeById(
        @Param("shoeId", new ParseIntPipe()) shoeId: number,
    ): Promise<any> {
        return database.Shoes.find((s) => s.id === shoeId);
    }

    // Wildcards para las rutas
    // example/other
    // example/test
    // example/teasdasfawdafewawdadst
    @Get("example/other|te*st")
    async routeWildCard(): Promise<any> {
        return "Upa cachete!";
    }

    // Podemos acceder al objeto request de Express
    @Get("example/request/:someParam")
    async requestExample(@Req() request: Request): Promise<any> {
        return { ...request.params, ...request.query };
    }

    // Podemos acceder solo a la query
    @Get("example/query")
    async queryExample(@Query() query): Promise<any> {
        return { ...query };
    }

    // TODO Get By Id

    // TODO Get By Brand

    // TODO Get by Size
}
