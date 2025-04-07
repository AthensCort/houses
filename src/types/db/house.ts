class House2 {
    private price: number = 0;

    setPrice(price: number) {
        if (price < 2000) {
            const newPrices = api.getPrices(); 
        } else {
            this.price = price;
        }
    }
}

export interface House {
    id: number;
    price: number;
    name: string;
    description: string;
    address: string;
    duration: string;
    terrainArea: number;
    constructionArea: number;
    type: string;
}

export default House2;
