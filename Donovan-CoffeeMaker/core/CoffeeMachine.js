import { MachineService } from '../services/MachineService.js';
import { ResourceService } from '../services/ResourceService.js';
import { coffeeMachineConfig } from '../config/coffeeMachineConfig.js';

export class CoffeeMachine {
    constructor() {
        this.resourceService = new ResourceService(coffeeMachineConfig.initialResources);
        this.machineService = new MachineService(this.resourceService);
    }

    start(drinkId, paymentMethod) {
        const result = this.machineService.serveCoffee(drinkId, paymentMethod);
        this.displayResult(result);
    }

    displayResult(result) {
        if (result.success) {
            console.log(`Your ${result.drink.name} is ready!`);
        } else {
            console.log(`Error: ${result.error}`);
        }
    }

    showResources() {
        console.log(this.resourceService.getCurrentResources());
    }

    showHistory() {
        console.log(this.machineService.getHistory());
    }
}