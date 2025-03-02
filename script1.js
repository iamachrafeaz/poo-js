console.log("============== Exercice 1 ==============")
/**
 * Ecrire une fonction constructeur voiture avec les attributs « model , marque, année, type,
carburant » .
2. créer une liste des voitures.
3. implémenter le mécanisme d’héritage entre la classes voitures et deux autre classes Hyndai 
( attributs : série(string) , hybride (booléen) / méthodes : alarmer() )et Ford ( options (tableau )).
 4. Trier puis afficher les voiture selon un ordre croissant des année.
 */

// Fonction constructeur Voiture
function Voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant
}

// Liste des voiture
let arrCars = [
    new Voiture("Model X", "Tesla", 2021, "SUV", "Electric"),
    new Voiture("Civic", "Honda", 2020, "Sedan", "Gasoline"),
    new Voiture("A4", "Audi", 2019, "Sedan", "Diesel"),
    new Voiture("Mustang", "Ford", 2022, "Coupe", "Gasoline")
]

arrCars.sort((a, b) => {
    return a.annee - b.annee
});

// Création d'une classe Hyndain qui hérite de la classe Voiture
function Hyndai(model, marque, annee, type, carburant, serie, hybride) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.serie = serie;
    this.hybride = hybride;
}

// Methode pour la classe Hyndai
Hyndai.prototype.alarmer = function () {
    console.log(`Je suis ${this.marque} (${this.serie}) 🚗, Piip Piip!`);
}

// Création d'une classe Ford qui hérite de la classe Voiture
function Ford(model, marque, annee, type, carburant, options) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.options = options;
}

// Jeu de test

console.log("Sorted Cars" , arrCars);

let hyndai1 = new Hyndai("Ioniq 5", "Hyndai", 2023, "SUV", "Electric", "Premium", true);
console.log(hyndai1);
hyndai1.alarmer(); 

let ford1 = new Ford("F-150", "Ford", 2022, "Truck", "Diesel", ["GPS", "Camera de recul"]);
console.log(ford1);
console.log(`Options: ${ford1.options}`);

console.log("============== Exercice 2 ==============")

/**
 * 1. Creer deux objet native Etudiant ( nom : string , prenom : string , age : number , cne : string ) et
    Professeur ( nom : string , age : number , cin : string , )
 * 2. Ajouter une méthode étudier() a l’objet Etudiant, puis ajouter une méthode enseigner() a l’objet
    Etudiant Professeur.
 * 3. Trier les étudiants selon l’ordre alphabétique « nom et prénom ».
*/

// Objet Etudiant1
let etudiant1 = {
    nom: 'Green',
    prenom: 'Rachel',
    age: 21,
    cne: "K234424",
    etudier: function () {
        console.log(`My name is ${this.nom} ${this.prenom}, I am studying 👨🏻‍🎓`);
    }
}

// Objet Etudiant2
let etudiant2 = {
    nom: 'Geller',
    prenom: 'Monica',
    age: 23,
    cne: "A3432432",
    etudier: function () {
        console.log(`My name is ${this.nom} ${this.prenom}, I am studying 👨🏻‍🎓`);
    }
}

// Objet Etudiant3
let etudiant3 = {
    nom: 'Buffet',
    prenom: 'Pheobe',
    age: 22,
    cne: "K324433",
    etudier: function () {
        console.log(`My name is ${this.nom} ${this.prenom}, I am studying 👨🏻‍🎓`);
    }
}

// Liste des etudiants
let etudiants = [etudiant1, etudiant2, etudiant3];

etudiants.sort((a, b) => {
    if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
    }
    return a.nom.localeCompare(b.nom);
});

console.log(etudiants);

// Objet Professeur
let professeur = {
    nom: "Being",
    age: 34,
    cin: "K23423423",
    enseigner: function () {
        console.log(`My name is ${this.nom}, I am teaching 👨🏻‍🏫`);
    }
}

// Jeu de test
etudiant1.etudier();
professeur.enseigner();

console.log("=============== Fin ===============")