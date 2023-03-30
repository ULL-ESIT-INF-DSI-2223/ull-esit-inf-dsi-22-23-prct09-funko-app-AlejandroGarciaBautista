import fs from 'fs';

/**
 * Clase abstracta para procesar ficheros de distintos tipos
 */
export abstract class Procesar {
  protected contenido;
  protected datos;
  /**
   * Constructor 
   * @param rutaFichero 
   */
  constructor(rutaFichero: string) {
    this.contenido = this.leerFichero(rutaFichero);
    this.datos = this.parse(this.contenido);
    this.mostrarDatos(this.datos);
  }

  /**
   * Metodo para leer el fichero y guardarlo en un objeto Buffer
   * @param rutaFichero 
   * @returns 
   */
  leerFichero(rutaFichero: string) {
    const datos = fs.readFileSync(rutaFichero);
    return datos;
  }

  /**
   * Método abstracto que sera implementado por las distintas clases que
   * hereden de esta
   * @param contenido 
   */
  abstract parse(contenido: Buffer): number[][];

  /**
   * Método para mostrar los datos
   */
  mostrarDatos(datos: number[][]) {
    console.log(`Peso: ${datos[0]}`)
    console.log(`Valor: ${datos[1]}`)
  }
}
