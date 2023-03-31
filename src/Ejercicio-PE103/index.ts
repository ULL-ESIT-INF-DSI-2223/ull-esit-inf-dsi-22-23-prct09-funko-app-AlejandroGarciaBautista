import { ProcesarCSV } from "./ProcesarCVS.js";
import { ProcesarJSON } from "./ProcesarJson.js";

console.log("CSV")
const csv = new ProcesarCSV("src/Ejercicio-PE103/fichero.csv");

console.log("JSON")
const json = new ProcesarJSON("src/Ejercicio-PE103/fichero.json");