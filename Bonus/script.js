import { getFunction } from "./fetch.js";

// IL PRIMO E UNICO FILE SCRIPT.JS CHE IMPORTATE DEL HTML DEVE CONTENERE SOLAMENTE IMPORT
// MENTRE TUTTI GLI ALTRI FILES DEVONO AVERE SOLO EXPORT
// PER GESTIRE LA PROMISE DI UNA FUNZIONE IMPORTATA UTILIZZATE IL METODO SEGUENTE:
getFunction().then(data => console.log(data));