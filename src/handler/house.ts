// src/handler/houseHandler.ts
import { Request, Response, NextFunction } from "express";
import { HouseController } from "../controller/houseController";


//const tcosas


export default class HouseHandler {
    houseController: HouseController;

    constructor(houseController: HouseController) {
        this.houseController = houseController;
    }

    // GET /houses
    async getAllHouses(req: Request, res: Response, next: NextFunction) {
        try {
            const houses = await this.houseController.getAllHouses();
            res.status(200).json(houses);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } 
        }
    }


    async getHouseById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const house = await this.houseController.getHouse(id);
            if (house) {
                res.status(200).json(house);
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } 
        }
    }

    async getHousesByTypeAndPrice(req: Request, res: Response, next: NextFunction) {
        try {
            const { type, minPrice, maxPrice } = req.query;

            if (!type || !minPrice || !maxPrice) {
                return res.status(400).json({ message: "Faltan cosas compa" });
            }

            const houses = await this.houseController.getHousesByType(
                type as string,
                parseFloat(minPrice as string),
                parseFloat(maxPrice as string)
            );

            res.status(200).json(houses);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } 
        }
    }
}


const controller = new HouseController();
const houseHandler = new HouseHandler(controller);
export { houseHandler };
