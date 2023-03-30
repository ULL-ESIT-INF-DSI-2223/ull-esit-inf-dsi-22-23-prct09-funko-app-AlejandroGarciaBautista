import { ProcesarCSV } from "./ProcesarCVS";
import { ProcesarJSON } from "./ProcesarJson";

console.log("CSV")
const csv = new ProcesarCSV("src/Ejercicio-PE103/fichero.csv");

console.log("JSON")
const json = new ProcesarJSON("src/Ejercicio-PE103/fichero.json");