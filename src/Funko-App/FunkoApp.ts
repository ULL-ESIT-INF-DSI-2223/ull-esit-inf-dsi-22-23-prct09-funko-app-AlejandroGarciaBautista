import yargs from "yargs";
import { hideBin } from "yargs/helpers"
import { Funko } from "./Funko.js";
import { Usuario } from "./Usuario.js";

/**
 * Nos permite leer por consola el método añadir
 */
yargs(hideBin(process.argv))
  .command('añadir', 'Añade un funko a la coleccion', {
    usuario: {
      description: "Usuario que va a usar la APP",
      type: "string",
      demandOption: true
    },
    id: {
      description: "ID del Funko en tu collecion",
      type: "number",
      demandOption: true
    },
    nombre: {
      description: "Nombre del Funko",
      type: "string",
      demandOption: true
    },
    desc: {
      description: "Descripcion corta sobre el Funko",
      type: "string",
      demandOption: true
    },
    tipo: {
      description: "Tipo de Funko: Pop!, Pop! Rides, Vynil Soda, Vynil Gold, ...",
      type: "string",
      demandOption: true
    },
    genero: {
      description: "Genero del Funko: Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, ...",
      type: "string",
      demandOption: true
    },
    franquicia: {
      description: "Franquicia a la que pertenece el funko",
      type: "string",
      demandOption: true
    },
    numero: {
      description: "Número del Funko dentro de la colección de la franquicia",
      type: "number",
      demandOption: true
    },
    exclusivo: {
      description: "Indica si es exclusivo",
      type: "boolean",
      demandOption: true
    },
    caracteristica_esp: {
      description: "Caracteristicas especiales del Funko, que lo diferencien de los demas",
      type: "string",
      demandOption: true
    },
    valor: {
      description: "Valor en el mercado",
      type: "number",
      demandOption: true
    }
 }, (argv) => {
  const usuario = new Usuario(argv.usuario);
  const funko = new Funko(
    argv.id,
    argv.nombre,
    argv.desc,
    argv.tipo,
    argv.genero,
    argv.franquicia,
    argv.numero,
    argv.exclusivo,
    argv.caracteristica_esp,
    argv.valor
  )
  usuario.añadirFunko(funko)
 })
.help().argv;

/**
 * Nos permite leer por consola el método modificar
 */
yargs(hideBin(process.argv))
  .command('actualizar', 'Actualiza la información de un Funko', {
    usuario: {
      description: "Usuario que va a usar la APP",
      type: "string",
      demandOption: true
    },
    id: {
      description: "ID del Funko en tu collecion",
      type: "number",
      demandOption: true
    },
    nombre: {
      description: "Nombre del Funko",
      type: "string",
      demandOption: true
    },
    desc: {
      description: "Descripcion corta sobre el Funko",
      type: "string",
      demandOption: true
    },
    tipo: {
      description: "Tipo de Funko: Pop!, Pop! Rides, Vynil Soda, Vynil Gold, ...",
      type: "string",
      demandOption: true
    },
    genero: {
      description: "Genero del Funko: Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, ...",
      type: "string",
      demandOption: true
    },
    franquicia: {
      description: "Franquicia a la que pertenece el funko",
      type: "string",
      demandOption: true
    },
    numero: {
      description: "Número del Funko dentro de la colección de la franquicia",
      type: "number",
      demandOption: true
    },
    exclusivo: {
      description: "Indica si es exclusivo",
      type: "boolean",
      demandOption: true
    },
    caracteristica_esp: {
      description: "Caracteristicas especiales del Funko, que lo diferencien de los demas",
      type: "string",
      demandOption: true
    },
    valor: {
      description: "Valor en el mercado",
      type: "number",
      demandOption: true
    }
 }, (argv) => {
  const usuario = new Usuario(argv.usuario);
  const funko = new Funko(
    argv.id,
    argv.nombre,
    argv.desc,
    argv.tipo,
    argv.genero,
    argv.franquicia,
    argv.numero,
    argv.exclusivo,
    argv.caracteristica_esp,
    argv.valor
  )
  usuario.modificarFunko(funko)
 })
.help().argv;

/**
 * Nos permite leer por consola el método eliminar
 */
yargs(hideBin(process.argv))
  .command('eliminar', 'Elimina un Funko haciendo uso de su ID', {
    usuario: {
      description: "Usuario que va a usar la APP",
      type: "string",
      demandOption: true
    },
    id: {
      description: "ID del Funko",
      type: "number",
      demandOption: true
    }
 }, (argv) => {
  const usuario = new Usuario(argv.usuario);
  usuario.eliminarFunkoXID(argv.id);
 })
.help().argv;

/**
 * Nos permite leer por consola el método listar
 */
yargs(hideBin(process.argv))
  .command('listar', 'Muestra todos los Funkos', {
    usuario: {
      description: "Usuario que va a usar la APP",
      type: "string",
      demandOption: true
    }
 }, (argv) => {
  const usuario = new Usuario(argv.usuario);
  usuario.listarTusFunkos()
 })
.help().argv;

/**
 * Nos permite leer por consola el método mostrar
 */
yargs(hideBin(process.argv))
  .command('mostrar', 'Muestra el Funko que se indique con su id', {
    usuario: {
      description: "Usuario que va a usar la APP",
      type: "string",
      demandOption: true
    },
    id: {
      description: "ID del Funko",
      type: "number",
      demandOption: true
    }
 }, (argv) => {
  const usuario = new Usuario(argv.usuario);
  usuario.mostrarFunko(argv.id);
 })
.help().argv;
