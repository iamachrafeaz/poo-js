# Programmation orientée objet en JavaScript

Ce projet contient plusieurs exercices JavaScript pour pratiquer la programmation orientée objet et la manipulation du DOM.

[1. Objet constructeur/natif et héritage.](#objet-constructeurnatif-et-héritage)

[2. Class et Objet.](#Class-et-Objet)

[3. Mini-Blog Site Web](./blog/README.md)

#

## Objet constructeur/natif et héritage.

### Exercice 1

**1. Objectif**

L'objectif de cet exercice est de créer une fonction constructeur Voiture et d'implémenter le mécanisme d'héritage avec deux autres classes Hyndai et Ford. Ensuite, nous devons trier les voitures par ordre croissant selon l'année de fabrication.

**2. Implémentation**

**Création de la fonction constructeur Voiture**

Attributs : `model`, `marque`, `année`, `type`, `carburant`

**Création d'une liste de voitures**

```javascript
let arrCars = [
    new Voiture("Model X", "Tesla", 2021, "SUV", "Electric"),
    new Voiture("Civic", "Honda", 2020, "Sedan", "Gasoline"),
    new Voiture("A4", "Audi", 2019, "Sedan", "Diesel"),
    new Voiture("Mustang", "Ford", 2022, "Coupe", "Gasoline")
]
```

Les voitures sont ajoutées à un tableau `arrCars`.

Le tri des voitures se fait en fonction de l'attribut `année` en ordre croissant.

**Héritage : Création des classes `Hyndai` et `Ford`**

`Hyndai` possède des attributs supplémentaires : `série (string)` et `hybride (booléen)`.

`Hyndai` possède une méthode `alarmer()` qui affiche un message d'alerte.

`Ford` possède un attribut options (tableau contenant les options de la voiture).

**Tests et affichage des résultats**
```javascript
console.log("Sorted Cars" , arrCars);

let hyndai1 = new Hyndai("Ioniq 5", "Hyndai", 2023, "SUV", "Electric", "Premium", true);
console.log(hyndai1);
hyndai1.alarmer(); 

let ford1 = new Ford("F-150", "Ford", 2022, "Truck", "Diesel", ["GPS", "Camera de recul"]);
console.log(ford1);
console.log(`Options: ${ford1.options}`);

```

Création d'objets `Hyndai` et `Ford`.

Test de la méthode `alarmer()`.

Affichage des options pour un objet `Ford`.

### Exercice 2

**1. Objectif**

L'objectif de cet exercice est de créer deux objets natifs, Etudiant et Professeur, puis d'ajouter des méthodes spécifiques et de trier les étudiants par ordre alphabétique.

**2. Implémentation**

**Création des objets Etudiant et Professeur**

Etudiant possède les attributs : `nom`, `prenom`, `age`, `cne`.

Professeur possède les attributs : `nom`, `age`, `cin`.

```javascript
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
let professeur = {
    nom: "Being",
    age: 34,
    cin: "K23423423",
    enseigner: function () {
        console.log(`My name is ${this.nom}, I am teaching 👨🏻‍🏫`);
    }
}
```
**Ajout de méthodes**

`etudier()` pour l'objet Etudiant qui affiche un message indiquant que l'étudiant est en train d'étudier.

`enseigner()` pour l'objet Professeur qui affiche un message indiquant que le professeur est en train d'enseigner.

**Tri des étudiants**

Tri en fonction du nom, et en cas d'égalité, tri par prenom.

**Tests et affichage des résultats**

Affichage des étudiants triés.

Appel des méthodes `etudier()` et `enseigner()`.

## Resultat 

``` Shell
Sorted Cars [
  Voiture {
    model: 'A4',
    marque: 'Audi',
    annee: 2019,
    type: 'Sedan',
    carburant: 'Diesel'
  },
  Voiture {
    model: 'Civic',
    marque: 'Honda',
    annee: 2020,
    type: 'Sedan',
    carburant: 'Gasoline'
  },
  Voiture {
    model: 'Model X',
    marque: 'Tesla',
    annee: 2021,
    type: 'SUV',
    carburant: 'Electric'
  },
  Voiture {
    model: 'Mustang',
    marque: 'Ford',
    annee: 2022,
    type: 'Coupe',
    carburant: 'Gasoline'
  }
]
Hyndai {
  model: 'Ioniq 5',
  marque: 'Hyndai',
  annee: 2023,
  type: 'SUV',
  carburant: 'Electric',
  serie: 'Premium',
  hybride: true
}
Je suis Hyndai (Premium) 🚗, Piip Piip!
Ford {
  model: 'F-150',
  marque: 'Ford',
  annee: 2022,
  type: 'Truck',
  carburant: 'Diesel',
  options: [ 'GPS', 'Camera de recul' ]
}
Options: GPS,Camera de recul
============== Exercice 2 ==============
[
  {
    nom: 'Buffet',
    prenom: 'Pheobe',
    age: 22,
    cne: 'K324433',
    etudier: [Function: etudier]
  },
  {
    nom: 'Geller',
    prenom: 'Monica',
    age: 23,
    cne: 'A3432432',
    etudier: [Function: etudier]
  },
  {
    nom: 'Green',
    prenom: 'Rachel',
    age: 21,
    cne: 'K234424',
    etudier: [Function: etudier]
  }
]
My name is Green Rachel, I am studying 👨🏻‍🎓
My name is Being, I am teaching 👨🏻‍🏫
=============== Fin ===============
```
## Class et Objet.

**Objectif**

L'objectif est de créer plusieurs classes (Vecteur2D, Rectangle, Carré, Point et Segment) et d'implémenter leurs méthodes pour effectuer différentes opérations.

**Implémentation**

**1. Classe Vecteur2D**

**Attributs :** `x`, `y`

**Méthodes :**

`afficher()` : Affiche les coordonnées du vecteur.

`addition(a)` : Retourne un nouveau vecteur résultant de l'addition avec un autre vecteur `a`.

**2. Classe Rectangle**

**Attributs :** `longueur`, `largeur`, `nom`

**Méthodes :**

`afficher()` : Affiche les dimensions du rectangle.

`surface()` : Calcule et affiche la surface du rectangle.

**3. Classe Carré (hérite de Rectangle)** 

**Attributs :** `longueur`

**Méthodes :**

`afficher()` : Affiche uniquement la longueur, car le carré a des côtés égaux.

**4. Classe Point** 

**Attributs :** `x`, `y`

**5. Classe Segment** 

**Attributs :** `orig (point d'origine)`, `ext (point d'extrémité)`

Initialise deux objets Point pour représenter les extrémités du segment.

**Tests et affichage des résultats**

Création et affichage de plusieurs objets Vecteur2D.

Test de l'addition de deux vecteurs.

Création et affichage des objets Rectangle et Carré.

Calcul et affichage des surfaces.

Création et affichage d'un segment.

