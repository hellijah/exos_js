let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for (let i = 1; i <= etages; i++) {
  console.log(" ".repeat(etages - i) + "#".repeat(i));
}
