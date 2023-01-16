const bodyEl = document.querySelector("body");
const div = document.createElement("div");

// propprietà che aggiunge una classe
div.className = "pippo";

// metodo che aggiunge altre classi
div.classList.add("pippo2");

// stile in linea - quindi ha bisogno di una chiave+valore
div.style = "background-color: black; height: 100px; width: 100px";
div.style.background = "red";
bodyEl.append(div);

// funzione con parametri
const nome = "Giuseppe";
const cognome = "Senettone";

const funzione = (valore, valore2) => {
  console.log("Nome: ", valore);
  console.log("Cognome: ", valore2);
};

funzione(nome, cognome);
