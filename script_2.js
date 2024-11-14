function factorielle(nombre) {
  let resultat = 1;
  for (let i = nombre; i > 1; i--) {
    resultat *= i;
  }
  return resultat;
}

let nombre = prompt("De quel nombre veux-tu calculer le factoriel ?");
console.log("Le résultat est : " + factorielle(nombre));
