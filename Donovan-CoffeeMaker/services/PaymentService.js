import { coffeeMachineConfig } from '../config/coffeeMachineConfig.js';

export class PaymentService {
    static isPaymentTypeAccepted(paymentMethod) {
        return coffeeMachineConfig.acceptedPayments.includes(paymentMethod.type);
    }

    static isPaymentSufficient(paymentMethod, drinkPrice) {
        return paymentMethod.amount >= drinkPrice;
    }
}