// Table de correspondance complet des codons en acides aminés
const codonToAminoAcid = {
  "UUU": "Phénylalanine", "UUC": "Phénylalanine",
  "UUA": "Leucine", "UUG": "Leucine", "CUU": "Leucine", "CUC": "Leucine", "CUA": "Leucine", "CUG": "Leucine",
  "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine", "AGU": "Sérine", "AGC": "Sérine",
  "UAU": "Tyrosine", "UAC": "Tyrosine",
  "UGU": "Cystéine", "UGC": "Cystéine",
  "UGG": "Tryptophane",
  "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
  "CAU": "Histidine", "CAC": "Histidine",
  "CAA": "Glutamine", "CAG": "Glutamine",
  "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine", "AGA": "Arginine", "AGG": "Arginine",
  "AUU": "Isoleucine", "AUC": "Isoleucine", "AUA": "Isoleucine",
  "AUG": "Méthionine",
  "ACU": "Thréonine", "ACC": "Thréonine", "ACA": "Thréonine", "ACG": "Thréonine",
  "AAU": "Asparagine", "AAC": "Asparagine",
  "AAA": "Lysine", "AAG": "Lysine",
  "GUU": "Valine", "GUC": "Valine", "GUA": "Valine", "GUG": "Valine",
  "GCU": "Alanine", "GCC": "Alanine", "GCA": "Alanine", "GCG": "Alanine",
  "GAU": "Acide aspartique", "GAC": "Acide aspartique",
  "GAA": "Acide glutamique", "GAG": "Acide glutamique",
  "GGU": "Glycine", "GGC": "Glycine", "GGA": "Glycine", "GGG": "Glycine",
  "UAA": "Stop", "UAG": "Stop", "UGA": "Stop"
};

// Fonction pour traduire l'ARN en une chaîne d'acides aminés
function translateARNtoProtein(arn) {
  // Vérifie si la longueur de la séquence ARN est un multiple de 3
  if (arn.length % 3 !== 0) {
    console.log("Erreur : la séquence ARN n'est pas valide. Elle doit être un multiple de 3.");
    return null;
  }

  let protein = [];
  
  // Découpe l'ARN en codons de 3 lettres
  for (let i = 0; i < arn.length; i += 3) {
    let codon = arn.slice(i, i + 3).toUpperCase(); // Extrait un codon (3 lettres) et le converti en majuscule
    let aminoAcid = codonToAminoAcid[codon]; // Trouve l'acide aminé correspondant
    if (aminoAcid) {
      protein.push(aminoAcid); // Ajoute l'acide aminé à la chaîne protéique
    } else {
      console.log(`Erreur : le codon ${codon} n'est pas reconnu.`);
      return null;
    }
  }
  
  return protein.join("-"); // Joint les acides aminés avec des tirets
}

// Demande à l'utilisateur d'entrer une séquence ARN
let userArn = prompt("Veuillez entrer une séquence ARN (ex: CCGUCGUUGCGCUACAGC) :");

// Appelle la fonction de traduction et affiche le résultat
let translatedProtein = translateARNtoProtein(userArn);
if (translatedProtein) {
  console.log("Traduction de la séquence ARN :", translatedProtein);
}
