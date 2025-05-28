export const coffeeMachineConfig = {
    // Liste des boissons disponibles
    drinks: [
        {
            id: 'espresso',
            name: 'Espresso',
            water: 50,        // ml
            coffee: 18,       // grammes
            cup: 1,           // unité
            price: 1000,      // Ariary
        },
        {
            id: 'americano',
            name: 'Americano',
            water: 100,
            coffee: 18,
            cup: 1,
            price: 1200,
        },
        {
            id: 'cappuccino',
            name: 'Cappuccino',
            water: 100,
            coffee: 14,
            cup: 1,
            price: 1500,
        },
    ],

    // Ressources initiales
    initialResources: {
        water: 1000,   // ml
        coffee: 500,   // grammes
        cups: 20,      // nombre de gobelets
    },

    // Moyens de paiement acceptés
    acceptedPayments: ['coin', 'bill', 'card'],
};