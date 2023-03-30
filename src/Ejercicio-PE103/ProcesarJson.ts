import { Procesar } from "./Procesar";
import { Elemento } from "./Elemento";

/**
 * Clase para procesar datos de un JSON
 */
export class ProcesarJSON extends Procesar {
  /**
   * Constructor que llama al constructor de la clase padre
   * @param rutaFichero 
   */
  constructor(rutaFichero: string) {
    super(rutaFichero);
  }

  /**
   * Método para obtener la información del JSON
   * @param contenido 
   * @returns 
   */
  parse(contenido: Buffer): number[][] {
    const resultado: number[][] = [];
    const peso: number[] = [];
    const valor: number[] = [];
    const jsonDatos = JSON.parse(contenido.toString());

    const elementos = jsonDatos.elementos;

    elementos.forEach((elemento: Elemento) => {
      peso.push(elemento.peso)
      valor.push(elemento.valor)
    });

    resultado.push(peso)
    resultado.push(valor)

    return resultado;
  }
}