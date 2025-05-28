import { coffeeMachineConfig } from '../config/coffeeMachineConfig.js';
import { Drink } from '../models/Drink.js';

export class DrinkService {
    static getAvailableDrinks() {
        return coffeeMachineConfig.drinks.map(d => new Drink(d));
    }

    static getDrinkById(id) {
        const drinkData = coffeeMachineConfig.drinks.find(d => d.id === id);
        return drinkData ? new Drink(drinkData) : null;
    }
}