import { Funko } from "./Funko.js";

/**
 * Interfaz que sera implementada en Usuario con los métodos
 * que debe tener para poder llevar a cabo las acciones que se nos piden
 */
export interface Sesion {
  añadirFunko(funko: Funko): boolean;
  modificarFunko(funko: Funko): boolean;
  eliminarFunkoXID(idFunko: number): boolean;
  listarTusFunkos(): void;
  mostrarFunko(idFunko: number): void;
}