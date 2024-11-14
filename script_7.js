
function acneBot() {

  let userMessage = prompt("Parle au bot adolescent :");

  // Vérifie la phrase selon les condiitons demandées
  if (userMessage.endsWith("?")) {
    console.log("Ouais Ouais...");
  } else if (userMessage === userMessage.toUpperCase() && userMessage !== "") {
    console.log("Pwa, calme-toi...");
  } else if (userMessage.includes("Fortnite")) {
    console.log("on s' fait une partie soum-soum ?");
  } else if (userMessage.trim() === "") {
    console.log("t'es en PLS ?");
  } else {
    console.log("balek.");
  }
}

// Appelle la fonction pour lancer la conversation
acneBot();
