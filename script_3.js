let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for (let i = 1; i <= etages; i++) {
  console.log(" ".repeat(etages - i) + "#".repeat(i));
}

//autre version

/*
// Demander à l'utilisateur le nombre d'étages pour la pyramide
const etages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));
//parseInt conversion en entier 

// Vérifie si l'entrée est bien un nombre et positif
if (isNaN(etages) || etages <= 0) { // isNaN (signifiant "is Not-a-Number") renvoie true si la valeur de etages n’est pas un nombre
    console.log("Merci d'entrer un nombre valide et positif.");
    return;
}

// Boucle principale pour chaque étage
for (let i = 1; i <= etages; i++) {
    let ligne = "";

    // Première boucle pour ajouter les espaces
    for (let j = 0; j < etages - i; j++) {
        ligne += " ";
    }

    // Deuxième boucle pour ajouter les #
    for (let k = 0; k < i; k++) {
        ligne += "#";
    }

    // Affiche la ligne complète de la pyramide dans la console
    console.log(ligne);
}
}
*/