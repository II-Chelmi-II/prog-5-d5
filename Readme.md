# Description Générale

Ce projet simule le fonctionnement d’une machine à café automatique, en mettant l’accent sur sa logique métier via la programmation orientée objet. La machine gère plusieurs composants internes (eau, grains, température…) et permet à l’utilisateur de sélectionner une boisson après avoir effectué un paiement. Elle prend également en compte divers scénarios d’erreurs et inclut quelques optimisations pour améliorer l’expérience utilisateur.

# Cas d’Utilisation (Use Case)

Un scénario typique d’utilisation de la machine à café se déroule comme suit :
	1.	L’utilisateur insère de l’argent dans la machine.
	2.	La machine vérifie si le montant est suffisant.
	3.	L’utilisateur choisit le type de café désiré.
	4.	La machine vérifie qu’il y a assez d’eau, de grains de café, et que la température est adéquate.
	5.	Si tout est prêt :
	•	Elle moud les grains.
	•	Elle chauffe l’eau.
	•	Elle prépare le café.
	•	Elle le verse dans un récipient.
	6.	Si une erreur survient (panne, manque d’eau, de grains…), la machine affiche un message et passe en mode erreur.
	7.	Après usage, la machine peut être nettoyée ou remise à zéro.

# Architecture de la Machine (Attributs et Méthodes)

## Attributs :
	•	waterTank: niveau d’eau (en litres)
	•	beanContainer: quantité de grains de café (en grammes)
	•	coffeeContainer: quantité de café liquide prêt à être servi
	•	temperature: température actuelle de l’eau (en °C)
	•	state: état actuel de la machine (off, ready, brewing, error)
	•	balance: solde inséré par l’utilisateur (en Ariary ou euros)
	•	coffeePrice: prix fixe ou variable des cafés selon le type

## Méthodes principales :

turnOn()
turnOff()
addWater(amount)
addBeans(amount)
grindBeans()
heatWater()
brew()
serve()
clean()
pay(amount)
chooseCoffee(type)
checkResources()

# Gestion des Erreurs Possibles

La machine peut rencontrer plusieurs erreurs :
	•	Manque d’eau : waterTank trop bas
	•	Manque de grains : beanContainer insuffisant
	•	Température insuffisante : temperature < 90°C
	•	Paiement insuffisant : balance < coffeePrice
	•	Machine déjà en cours d’utilisation
	•	Problème électrique / arrêt brutal : state = error

La méthode checkResources() permet d’anticiper ces erreurs et d’empêcher l’exécution de brew() si une condition n’est pas remplie.

# Modélisation Orientée Objet

Exemple simple de la structure de la machine à café en pseudo-code Java :

class CoffeeMachine {
    double waterTank;
    double beanContainer;
    double coffeeContainer;
    double temperature;
    String state; // off, ready, brewing, error
    double balance;
    double coffeePrice;

    void turnOn() { ... }
    void turnOff() { ... }
    void addWater(double amount) { ... }
    void addBeans(double amount) { ... }
    void grindBeans() { ... }
    void heatWater() { ... }
    void brew() { ... }
    void serve() { ... }
    void clean() { ... }
    boolean pay(double amount) { ... }
    void chooseCoffee(String type) { ... }
    boolean checkResources() { ... }
}