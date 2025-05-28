export const ErrorTypes = {
    PAYMENT: {
        INSUFFICIENT_FUNDS: 'Solde insuffisant',
        UNRECOGNIZED_METHOD: 'Moyen de paiement non reconnu',
        SYSTEM_OFFLINE: 'Système de paiement hors ligne',
    },
    CHOICE: {
        DRINK_UNAVAILABLE: 'Choix indisponible',
        NO_COFFEE: 'Manque de poudre à café',
        NO_WATER: 'Manque d’eau',
        NO_CUP: 'Gobelet manquant',
        POWER_OUTAGE: 'Coupure de courant',
        MACHINE_DOWN: 'Panne générale',
    },
    PREPARATION: {
        TIMEOUT: 'Temps de préparation dépassé',
        BAD_MIX: 'Mauvais mélange',
    },
    DISTRIBUTION: {
        CUP_NOT_DELIVERED: 'Verre non délivré',
        DRINK_NOT_POURED: 'Boisson non versée',
        DELIVERY_FAILED: 'Échec de distribution',
    },
};