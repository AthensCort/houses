import { House } from '../types/db/house';

const fake_houses: House[] = [
    {
        id: 1,
        price: 100,
        name: "mansion lujosa",
        description: "cosas y cosas y cosas y cosas",
        address: "avenida plaza sesamo",
        duration: "3 meses",
        terrainArea: 80,
        constructionArea: 200,
        type: "departamento"
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
        type: "casa"
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
        type: "departamento"
    }
];

class FakeService {
    async getHouses(): Promise<House[]> {
        return fake_houses;
    }

    async getHouseById(id: number): Promise<House | undefined> {
        return fake_houses.find(house => house.id === id);
    }
}

export default FakeService;
