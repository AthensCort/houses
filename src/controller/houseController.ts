import FakeService from "../db/house"
//OMFG no me da error si no le pongo los backets
//cuando es export default se guarda en un identificador

//con los brackets, estas agarrdno un export NO defualt y tiene que estar estrictamente definido

//esaba importando con llavecitas pero debe ser sin llavecitas para poder manejarlo en el modulo
export class HouseController{

    dbService: FakeService

    constructor(){
        this.dbService= new FakeService();
    }

    async getHousesByType(type: string, minPrice: number, maxPrice: number) {
        const housesByType = await this.dbService.getHouseByType(type);
        const filtered = housesByType.filter(
            (house) => house.price > minPrice && house.price < maxPrice
        );
        return filtered;
    }

    async getAllHouses() {
        return await this.dbService.getHouses();
    }

    async getHouse(id: number) {
        return await this.dbService.getHouseById(id);
    }
}
