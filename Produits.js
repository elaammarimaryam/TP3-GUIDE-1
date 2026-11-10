const produits = [
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];
console.log(produits);
console.log("=== Catalogue des produits ===");

for (const produit of produits) {
    console.log(produit.nom + " : " + produit.prix + " MAD");
}
const disponibles = produits.filter(
    produit => produit.stock > 0
);

console.log("=== Produits disponibles ===");
console.log(disponibles);

console.log("Nombre de produits disponibles :", disponibles.length);
const valeurStock = produits.reduce(
    (total, produit) => total + (produit.prix * produit.stock),
    0
);

console.log("Valeur totale du stock :", valeurStock, "MAD");
const moinsCher = disponibles.reduce((min, produit) => {
    return produit.prix < min.prix ? produit : min;
});

console.log("Produit le moins cher :", moinsCher);
const resumeProduits = produits.map(produit => {
    return `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`;
});

console.log("=== Résumé des produits ===");
console.log(resumeProduits);
const testProduits = produits.map(produit => ({
    ...produit,
    stock: 0
}));

const testDisponibles = testProduits.filter(
    produit => produit.stock > 0
);

console.log("Nombre de produits disponibles :", testDisponibles.length);
const catalogueVide = [];

console.log("Catalogue vide :", catalogueVide.length);