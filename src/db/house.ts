import { House } from '../types/db/house';

const houses: House[] = [
    {
        id: 1,
        price: 100,
        name: "mansion lujosa",
        description: "cosas y cosas y cosas y cosas",
        address: "avenida plaza sesamo",
        duration: "3 meses",
        terrainArea: 80,
        constructionArea: 200,
        type: "renta"
    },
    {
        id: 2,
        price: 400,
        name: "casita normalita",
        description: "cosas y cosas y cosas y cosas",
        address: "avenida plaza sesamo",
        duration: "3 meses",
        terrainArea: 800,
        constructionArea: 2000,
        type: "renta"
    },
    {
        id: 3,
        price: 500,
        name: "cuarto misero",
        description: "cosas y cosas y cosas y cosas",
        address: "avenida plaza farmacias",
        duration: "1 mes",
        terrainArea: 10,
        constructionArea: 20,
        type: "venta"
    }
];

class FakeService { 
    //Las cuatro funciones principales 
    async getHouses(): Promise<House[]> {
        return houses;
    }
    async getHouseById(id: number): Promise<House | undefined> {
        return houses.find(house => house.id === id);
    }
    async getHouseByRange(priceMin:number, priceMax:number): Promise<House[]> {
        return houses.filter(house=> house.price >priceMin && house.price < priceMax)
    }
    async getHouseByType(type:string){
        return houses.filter(house=> house.type == type)
    }
}

export default FakeService;
