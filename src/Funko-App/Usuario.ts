import { Coleccion } from "./Coleccion.js";
import chalk from "chalk";
import { Funko } from "./Funko.js";
import fs from "fs";
import { Sesion } from "./Sesion.js";

const log = console.log
const RUTAUSUARIOS = "./src/Funko-App/Users/";

/**
 * Clase para representar a un usuario
 */
export class Usuario implements Sesion {
  private funkos: Coleccion
  private nombre: string

  /**
   * Constructor de la clase Usuario
   * @param nombreUsuario 
   */
  constructor(nombreUsuario: string) {
    this.funkos = new Coleccion();;
    this.nombre = nombreUsuario;
    if (this.existeRuta(nombreUsuario) === true) {
      log(chalk.green(`Bienvenido ${nombreUsuario}, se procede a cargar los datos de tu usuario`));
      /* Guardo los nonbres de los ficheros en un array de strings */
      const ficherosUsuario = fs.readdirSync(RUTAUSUARIOS + nombreUsuario + "/");
      /* Voy abriendo cada fichero para extraer la información del JSON */
      if (ficherosUsuario.length === 0) {
        log(chalk.red("Aun no has añadido ningun Funko a tu colección"))
      } else {
        ficherosUsuario.forEach((ficheroActual) => {
          const funkoJSON = JSON.parse((fs.readFileSync(RUTAUSUARIOS + nombreUsuario + "/" + ficheroActual)).toString())
          this.funkos.añadir(new Funko (
            funkoJSON.id,
            funkoJSON.nombre,
            funkoJSON.desc,
            funkoJSON.tipo,
            funkoJSON.genero,
            funkoJSON.franquicia,
            funkoJSON.numero,
            funkoJSON.exclusivo,
            funkoJSON.caracteristica_esp,
            funkoJSON.valor
          ))
        })
      }
    } else {
      console.log(`NO existe el usuario, se procede a crear una cuenta`)
      fs.mkdirSync(RUTAUSUARIOS + nombreUsuario);
    }
  }

  /**
   * Método getter que nos devuelve el nombre del usuario
   */
  get getNombre() {
    return this.nombre;
  }

  /**
   * Método getter que nos devuelve un array con todos los funkos del usuario
   */
  get getFunkos() {
    return this.funkos;
  }

  /**
   * Método que nos permite añadir un Funko a la colección y mostrar un mensaje por
   * consola
   * @param nuevoFunko 
   * @returns 
   */
  añadirFunko(nuevoFunko: Funko): boolean {
    if (this.funkos.añadir(nuevoFunko)) {
      const funkoInfo = JSON.stringify(nuevoFunko);
      fs.writeFileSync(RUTAUSUARIOS + this.getNombre + "/" + "funko" + nuevoFunko.getID + ".json", funkoInfo);
      log(chalk.blue("Has añadido un nuevo Funko"));
      return true;
    } else {
      log(chalk.red("¡Error! Intentas añadir un Funko que ya esta en la colección"));
      return false;
    }
  }

  /**
   * Método que nos permite modificar un Funko de la colección y muestra los mensajes por pantalla
   * @param funko 
   * @returns 
   */
  modificarFunko(funko: Funko): boolean {
    if (this.funkos.modificar(funko)) {
      const funkoInfo = JSON.stringify(funko);
      // fs.rmSync(RUTAUSUARIOS + this.getNombre + "/" + "funko" + funko.getID + ".json");
      fs.writeFileSync(RUTAUSUARIOS + this.getNombre + "/" + "funko" + funko.getID + ".json", funkoInfo);
      log(chalk.blue(`Se ha modificado el funko con ID: ${funko.getID}`));
      return true;
    } else {
      log(chalk.red("¡Error! no se puede modificar el funko que quieres porque no lo tienes"));
      return false;
    }
  }

  /**
   * Método que nos permite eliminar un Funko de la colección y mostrar por pantalla el mensaje por pantalla
   * @param idFunko 
   * @returns 
   */
  eliminarFunkoXID(idFunko: number): boolean {
    if (this.funkos.eliminar(idFunko)) {
      fs.rmSync(RUTAUSUARIOS + this.getNombre + "/" + "funko" + idFunko + ".json")
      log(chalk.blue("Se ha eliminado el Funko de la colección"));
      return true;
    } else {
      log(chalk.red("No se puede eliminar el funko porque no existe en tu colección"));
      return false;
    }
  }

  /**
   * Método para mostrar por pantalla todos los funkos
   */
  listarTusFunkos() {
    this.funkos.listar();
  }

  /**
   * Método para mostrar un único Funko de la colección 
   * @param idFunko 
   */
  mostrarFunko(idFunko: number) {
    this.funkos.mostrarFunko(idFunko);
  }

  /**
   * Método privado para comprobar que la ruta del usuario existe
   * @param nombreUsuario 
   * @returns 
   */
  existeRuta(nombreUsuario: string): boolean {
    return fs.existsSync(RUTAUSUARIOS + nombreUsuario)
  }
}
