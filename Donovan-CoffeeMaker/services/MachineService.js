import { PaymentService } from './PaymentService.js';
import { DrinkService } from './DrinkService.js';
import { ResourceService } from './ResourceService.js';
import { Transaction } from '../models/Transaction.js';
import { ErrorTypes } from '../models/ErrorTypes.js';

export class MachineService {
    constructor(resourceService) {
        this.resourceService = ResourceService;
        this.transactionHistory = [];
    }

    serveCoffee(drinkId, paymentMethod) {
        const drink = DrinkService.getDrinkById(drinkId);

        if (!drink) {
            return this.logTransaction(null, paymentMethod, false, ErrorTypes.CHOICE.DRINK_UNAVAILABLE);
        }

        if (!PaymentService.isPaymentTypeAccepted(paymentMethod)) {
            return this.logTransaction(drink, paymentMethod, false, ErrorTypes.PAYMENT.UNRECOGNIZED_METHOD);
        }

        if (!PaymentService.isPaymentSufficient(paymentMethod, drink.price)) {
            return this.logTransaction(drink, paymentMethod, false, ErrorTypes.PAYMENT.INSUFFICIENT_FUNDS);
        }

        if (!this.resourceService.canServeDrink(drink)) {
            return this.logTransaction(drink, paymentMethod, false, ErrorTypes.CHOICE.NO_COFFEE);
        }

        this.resourceService.serveDrink(drink);
        return this.logTransaction(drink, paymentMethod, true);
    }

    logTransaction(drink, paymentMethod, success, error = null) {
        const tx = new Transaction({ drink, paymentMethod, success, error });
        this.transactionHistory.push(tx);
        return tx;
    }

    getHistory() {
        return this.transactionHistory;
    }
}