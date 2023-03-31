import { Procesar } from "./Procesar.js";

/**
 * Clase para procesar datos de un CVS
 */
export class ProcesarCSV extends Procesar{
  /**
   * Constructor que llama al constructor de la clase padre
   * @param rutaFichero 
   */
  constructor(rutaFichero: string) {
    super(rutaFichero);
  }
  
  /**
   * Método para obtener la información del CSV
   * @param contenido 
   * @returns 
   */
  parse(contenido: Buffer): number[][] {    
    const resultado: number[][] = [];
    const datos = contenido.toString();
    const datosArray = datos.split("\n");

    const peso: number[] = [];
    const valor: number[] = [];

    for (let i = 2; i < datosArray.length; i++) {
      const elementos = datosArray[i].split(" ");
      peso.push(parseInt(elementos[0]));
      valor.push(parseInt(elementos[1]));
    }
    resultado.push(peso);
    resultado.push(valor);
    return resultado;
  }
}
