console.log("============== Exercice 3 ==============")

class Vecteur2D {
    constructor(_x = 0, _y = 0) {
        this.x = _x;
        this.y = _y;
    }

    afficher() {
        console.log("---- Coordonnées ----")
        console.log("x = " + this.x)
        console.log("y = " + this.y)

        console.log("---------------------")
    }

    addition(a) {
        return new Vecteur2D(this.x + a.x, this.y + a.y)
    }
}

class Rectangle {
    constructor(_longueur = 2, _largeur = 2) {
        this.longueur = _longueur;
        this.largeur = _largeur;

        this.nom = "Rectangle";
    }


    afficher() {
        console.log("---- Affichage ----");

        console.log(`Je suis ${this.nom}`)
        console.log("Longueur = " + this.longueur);
        console.log("Largeur = " + this.largeur);

        console.log("---------------------")
    }

    surface() {
        console.log("La surface = " + this.longueur * this.largeur);
    }

}

class Carre extends Rectangle {
    constructor(_longueur = 2) {
        super(_longueur, _longueur);
        this.nom = "Carré";
    }

    afficher() {
        console.log("---- Affichage ----");

        console.log(`Je suis ${this.nom}`)
        console.log("Longueur = " + this.longueur);

        console.log("---------------------")
    }
}

class Point {
    constructor(_x = 0, _y = 0) {
        this.x = _x;
        this.y = _y;
    }
}

class Segment{
    constructor(_orig_x = 0, _orig_y = 0, _ext_x = 0, _ext_y = 0 ){
        this.orig = new Point(_orig_x, _orig_y);
        this.ext = new Point(_ext_x, _ext_y);
    }
}


// Jeu de test
console.log("============== Test de la classe Vecteur2D ==============");

let v1 = new Vecteur2D(3, 4);
v1.afficher();

let v2 = new Vecteur2D(1, 2);
v2.afficher();

let v3 = v1.addition(v2);
v3.afficher();

console.log("============== Test de la classe Rectangle ==============");

let rectangle = new Rectangle(5, 10);
rectangle.afficher();
rectangle.surface();

console.log("============== Test de la classe Carré ==============");

let carre = new Carre(4);
carre.afficher();
carre.surface();

console.log("============== Test de la classe Segment ==============");

let segment = new Segment(0, 0, 5, 5);
console.log(`Segment : Origine (${segment.orig.x}, ${segment.orig.y}), Extérieur (${segment.ext.x}, ${segment.ext.y})`);
