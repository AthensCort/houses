import { FakeService } from "../db/fakeService"
export class HouseController{

    dbService: FakeService

    constructor(){
        this.dbService= new FakeService();
    }

    async getHousesByType(type: string, minPrice: number, maxPrice:number){
        const dbService= new FakeService();
        dbService.getHouses(type, minPrice, maxPrice)
    }
}