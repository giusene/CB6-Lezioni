// IN QUESTO MODO LA FUNZIONE GETFUNCTION() STA RITORNANDO UNA PROMISE CHE IL FILE SCRIPT.JS POTRA' GESTIRE

export const getFunction = () =>
  fetch("https://api.escuelajs.co/api/v1/products").then(res => res.json());
