export class ResourceService {
    constructor(resources) {
        this.resources = resources;
    }

    canServeDrink(drink) {
        return this.resources.hasEnoughFor(drink);
    }

    serveDrink(drink) {
        this.resources.consume(drink);
    }

    refillResources(extra) {
        this.resources.refill(extra);
    }

    getCurrentStatus() {
        return this.resources;
    }
}