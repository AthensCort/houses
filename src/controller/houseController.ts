import POLLO from "../db/fakeService"
//OMFG no me da error si no le pongo los backets
//cuando es export default se guarda en un identificador

//con los brackets, estas agarrdno un export NO defualt y tiene que estar estrictamente definido

//esaba importando con llavecitas pero debe ser sin llavecitas para poder manejarlo en el modulo
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