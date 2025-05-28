export class Resources {
    constructor({ water = 0, coffee = 0, cups = 0 }) {
        this.water = water;
        this.coffee = coffee;
        this.cups = cups;
    }

    hasEnoughFor(drink) {
        return (
            this.water >= drink.water &&
            this.coffee >= drink.coffee &&
            this.cups >= drink.cup
        );
    }

    consume(drink) {
        this.water -= drink.water;
        this.coffee -= drink.coffee;
        this.cups -= drink.cup;
    }

    refill({ water = 0, coffee = 0, cups = 0 }) {
        this.water += water;
        this.coffee += coffee;
        this.cups += cups;
    }
}