import { listaProdotti } from "./metodiFetch.js";
import { cardCreator } from "./script.js";

const filtro1 = document.querySelector("#cat-1");
const filtro2 = document.querySelector("#cat-2");
const filtro3 = document.querySelector("#cat-3");

filtro1.addEventListener("click", () => {
  const filteredProducts = listaProdotti
    .filter(item => item.category.id === 1)
    .filter(item => item.price < 50);
  // .filter(item => item.name.charAt(0) === "A");

  cardCreator(filteredProducts, ".products");
});

export const filterByCategort = idCat => {
  const fiteredProducts = listaProdotti.filter(
    item => item.category.id === parseInt(idCat)
  );
  cardCreator(fiteredProducts, ".products");
};
