import { cardCreator, creazioneSelectCategories } from "./script.js";

export let listaProdotti;

export const funzionePost = (objBody, param, method, idProduct = "") => {
  fetch(`https://api.escuelajs.co/api/v1/` + param + idProduct, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(
          `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
        );
      } else {
        alert(`${param} CARICATO CORRETTAMENTE!`);
        console.log(data);
      }
    })
    .catch(e => console.log("ERRORE: ", e));
};

export const elimina = (callType, idProduct) => {
  fetch(`https://api.escuelajs.co/api/v1/` + callType + `/` + idProduct, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data !== true) {
        alert(
          `${callType} NON CANCELLATO PER LE SEGUENTI RAGIONI: ` + data.name
        );
      } else {
        alert(`${callType} CANCELLATO CORRETTAMENTE!`);
      }
    })
    .catch(e => console.log("ERRORE: ", e));
};

export const metodoGet = () => {
  fetch("https://api.escuelajs.co/api/v1/products/")
    .then(res => res.json())
    .then(data => {
      cardCreator(data, ".products");
      listaProdotti = data;
      //   const scarpe = data.filter(item => item.category.id === 1);
      //   const magliette = data.filter(item => item.category.id === 2);
      //   cardCreator(scarpe, ".scarpe");
      //   //   scarpe.forEach(element => {
      //   //     console.log(element);
      //   //   });

      //   magliette.forEach(element => {
      //     cardCreator(element, ".magliette");
      //     console.log(element);
      //   });
    })
    .catch(e => console.log("Questo è il mio errore: ", e));
};

export const metodoGetCat = () => {
  fetch("https://api.escuelajs.co/api/v1/categories/")
    .then(res => res.json())
    .then(data => creazioneSelectCategories(data))
    .catch(e => console.log("Questo è il mio errore: ", e));
};
