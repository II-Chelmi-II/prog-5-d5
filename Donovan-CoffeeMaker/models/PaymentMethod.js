export class PaymentMethod {
  constructor(type, amount) {
    this.type = type; // 'coin', 'bill', 'card' dans le fichier config
    this.amount = amount; // en Ariary
  }

  isAccepted(acceptedMethods) {
    return acceptedMethods.includes(this.type);
  }
}