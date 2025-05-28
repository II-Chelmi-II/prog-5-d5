import readline from 'readline';
import { CoffeeMachine } from './core/CoffeeMachine.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const machine = new CoffeeMachine();

console.log('\n☕ Welcome to the Coffee Machine ☕\n');

rl.question('Please choose a drink (espresso, americano, cappuccino): ', (drinkId) => {
    rl.question('Select payment method (coin, bill, card): ', (paymentMethod) => {
        const result = machine.start(drinkId.toLowerCase(), paymentMethod.toLowerCase());

        console.log('\n--- Result ---');
        if (result.success) {
            console.log(`${result.drink.name} is ready. Enjoy your coffee!`);
        } else {
            console.log(`Error: ${result.error}`);
        }

        console.log('\n--- Remaining Resources ---');
        machine.showResources();

        rl.close();
    });
});