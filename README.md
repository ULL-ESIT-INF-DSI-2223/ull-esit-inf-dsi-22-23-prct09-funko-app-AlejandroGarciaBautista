[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/fmDo8ROl)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-AlejandroGarciaBautista/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-AlejandroGarciaBautista?branch=main)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-AlejandroGarciaBautista&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-AlejandroGarciaBautista)

# Informe Práctica 9 de DSI 2022-23

## Autor: Alejandro García Bautista

## Correo Electrónico: alu0101387604@ull.edu.es

# Tareas previas
1. [x] Aceptar la tarea
2. [x] Yargs y chalk 
3. [x] API sincrona

# Introducción a la Práctica
En esta práctica número 9 se ha hecho uso de todo lo aprendido en la primera parte de la asignatura así como se ha llevado a cabo el uso de la API sincrona de Node.js para manejar el sistema de ficheros.

# Ejercicios de la práctica
En esta práctica se nos ha pedido que realicemos un ejercicio de manera autónoma y otro en la sesión de laboratorio, los ejercicios son los siguientes:

## FunkoApp
En este ejercicio se ha pedido que desarrollemos un programa que registre una colección de Funkos de diferentes usuarios para llevar a cabo este ejercicio he realizado las siguientes clases e interfaces:

**Funko**: es una clase que nos permite representar un Funko el funko tiene los siguientes atributos:
  - id: id en tu colección debe ser único
  - nombre: nombre del funko pop
  - desc: descripción del funko
  - tipo: tipo del funko pop
  - genero: genero del funko pop
  - franquicia: franquicia a la que pertenece
  - numero: número dentro de la franquicia
  - exclusivo: indica si es exclusivo o no
  - caracteristica_esp: características especiales del funko
  - valor: valor en el mercado del funko
Con estos atributos se han desarrollado todos los getters de estos atributos ya que son privados y se han desarrollado los siguientes métodos:
  - valorMercado: nos indica con una string el valor de mercado
  
  ```ts
  valorMercado(): string {
    if (this.valor > 70) {
      return "Muy Alto";
    }

    if (this.valor > 50 && this.valor <= 70) {
      return "Alto";
    }

    if (this.valor >= 25 && this.valor <= 50) {
      return "Normal";
    }

    return "Bajo";
  }
  ```

  - información hace uso de chalk para imprimir por consola los datos del funko

  ```ts
  informacion() {
    log(chalk.blue(`------- Funko nº: ${this.getID} -------`));
    log(`Nombre: ` + chalk.greenBright(`${this.getNombre}`));
    log(`Descripcion: ` + chalk.greenBright(`${this.getDesc}`));
    log(`Tipo: ` + chalk.greenBright(`${this.getTipo}`));
    log(`Genero: ` + chalk.greenBright(`${this.getGenero}`));
    log(`Franquicia: ` + chalk.greenBright(`${this.getFranquicia}`));
    log(`Número: ` + chalk.greenBright(`${this.getNumero}`));
    log(`Exclusivo: ` + chalk.greenBright(`${this.getEsExclusivo}`));
    log(`Caracteristicas especiales: ` + chalk.greenBright(`${this.getCaracteristicas}`));
    
    if (this.valorMercado() === "Muy Alto") {
      log(`Valor de mercado: ` + chalk.red.bold("Muy Alto"));
    }

    if (this.valorMercado() === "Alto") {
      log(`Valor de mercado: ` + chalk.yellow.bold("Alto"));
    }

    if (this.valorMercado() === "Normal") {
      log(`Valor de mercado: ` + chalk.blue.bold("Normal"));
    }

    if (this.valorMercado() === "Bajo") {
      log(`Valor de mercado: ` + chalk.green.bold("Bajo"));
    }
    log(chalk.blue(`---------------------------`));
  }
  ```

**Coleccion**: esta clase nos permite representar un conjunto de funkos el único atributo que tiene esta clase es un array de objetos de la clase Funko, se han desarrollado los siguientes métodos en esta clase:
  
  - getTamColeccion: nos devuelve el número de elementos en la colección.
  
  ```ts
  get getTamColeccion() {
    return this.funkos.length;
  }
  ```

  - añadir: este método nos permite añadir un Funko a la colección.

  ```ts
  añadir(funko: Funko): boolean {
    let seAñade: boolean = true;
    this.funkos.forEach((funkoActual) => {
      if (funkoActual.getID === funko.getID) {
        seAñade = false;
      }
    })

    if (seAñade) {
      this.funkos.push(funko);  
    }
    return seAñade;
  }
  ```
  
  - modificar: este método nos permite modificar un funko en la colección debe existir para poder reemplazar el antiguo funko. 

  ```ts
  modificar(funko: Funko): boolean {
    let seModifica: boolean = false;
    let indice: number = 0;
    this.funkos.forEach((funkoActual) => {
      if (funkoActual.getID === funko.getID) {
        this.funkos[indice] = funko;
        seModifica = true;
      }
      indice++;
    })
    return seModifica;
  }
  ```
  
  - eliminar: este método nos permite eliminar un funko conociendo su id.

  ```ts
  eliminar(idFunko: number): boolean {
    let seElimina = false;
    let indice: number = 0;
    this.funkos.forEach((funkoActual) => {
      if (funkoActual.getID === idFunko) {
        this.funkos.splice(indice, 1);
        seElimina = true;
      }
      indice++;
    })
    return seElimina;
  }
  ```
  
  - listar: este método nos permite mostrar por consola todos los funkos de la colección haciendo uso de chalks.

  ```ts
  listar() {
    if (this.getTamColeccion === 0) {
      log(chalk.green("Tu colección esta vacia"))
    } else {
      this.funkos.forEach((funkoActual) => {
        funkoActual.informacion();
      })
    }
  }
  ```
  
  - mostrarFunko: este método nos permite mostrar por consola el funko que se le indique mediante el id.

  ```ts
  mostrarFunko(idFunko: number): boolean {
    this.funkos.forEach((funkoActual) => {
      if (funkoActual.getID === idFunko) {
        funkoActual.informacion();
        return true;
      }
    })
    log(chalk.red("El Funko no existe"));
    return false;
  }
  ```

**Sesion**: en esta interfaz he definido los métodos que se deben implementar en el momento de tener un sesión en el programa estos son añadirFunko, modificarFunko, eliminarFunkoXID, listasTusFunkos, mostrarFunko.

**Usuario**: esta clase implementa la interfaz Sesion y sirve para representar a un usuario, en esta clase tendremos toda la gestión de ficheros haciendo uso de la API sincrona de Node.js los métodos que están implementados en esta clase son los nombrados en la interfaz ademas de añadir un nuevo método para comprobar si un usuario ya tiene registros, la implementación de los métodos son los siguientes:
  
  - constructor: en el constructor ademas de inicializar las variables se llevan a cabo la creación/comprobación del usuario ademas de cargar los datos de los funkos de la colección:

  ```ts
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
      console.log(`No existe el usuario, se procede a crear una cuenta`)
      fs.mkdirSync(RUTAUSUARIOS + nombreUsuario);
    }
  }
  ```

  - los getters son los siguientes:

  ```ts
  get getNombre() {
    return this.nombre;
  }

  get getFunkos() {
    return this.funkos;
  }
  ```

  - añadirFunkos: método que nos permite añadir un nuevo funko a la colección, ademas de crear el fichero JSON nos indica por consola el éxito o el fracaso de la acción.

  ```ts
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
  ```

  - modificarFunko: método que nos permite modificar un funko ademas de mostrar por pantalla el éxito o fracaso de la acción.

  ```ts
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
  ```

  - eliminarFunkoXID: método para eliminar un funko si conocemos su ID ademas nos indica el éxito o el fracaso de la acción.

  ```ts
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
  ```

  - listarTusFunkos: método que hace uso del método listar de la clase Colección.

  ```ts 
  listarTusFunkos() {
    this.funkos.listar();
  }
  ```

  - mostrarFunko: método que hace uso del método mostrarFunko de la clase Colección.

  ```ts
  mostrarFunko(idFunko: number) {
    this.funkos.mostrarFunko(idFunko);
  }
  ```

  - existeRuta: método que nos indica si la ruta del usuario existe o no.

  ```ts
  existeRuta(nombreUsuario: string): boolean {
    return fs.existsSync(RUTAUSUARIOS + nombreUsuario)
  }
  ```

El fichero **FunkoApp.ts** tenemos el programa principal que haciendo uso de yargs se leen los datos que se introducen desde la terminal al ejecutar el programa para saber que acción se va a realizar. Las acciones que podemos usar son:
  - añadir
  - actualizar
  - eliminar
  - listar
  - mostrar

## Ejercicio PE103
El ejercicio que se planteo en la sesión de laboratorio fue el siguiente, haciendo uso del Template Method desarrollar la siguiente actividad que consistía en extraer de información sobre el peso y sobre el valor de un fichero usado en el problema de la mochila, estos ficheros pueden estar en formato **.cvs** o en formato **.json** para ello se hace la clase plantilla que es Procesar que contiene lo siguiente, por falta de tiempo me faltaron dos métodos que serian para obtener los arrays por separado y no mostrarlos por pantalla y asi poder trabajar con ellos de una manera correcta e optima:

```ts
abstract class Procesar {
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
```

Las clases que implementan el parse son las siguientes:

- ProcesarCSV: en el método parse se le pasa un objeto de tipo Buffer y con el método toString lo pasamos a una string que vamos a convertir en un array de string usando split y como divisor el *retorno de carro* una vez hecho eso creamos los dos arrays con la información y recorremos todo el array nuevo y ahora dividiendo por el *espacio* entonces ahora solo necesitamos usar el parseInt para hacer la conversión de los números y poder guardarlos en donde corresponden, el bucle for empieza en 2 para saltarnos los datos que nos nos interesan del CVS

```ts
class ProcesarCSV extends Procesar{
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
```

- ProcesarJson: en el momento parse recibe lo mismo que el CVS pero en este caso al pasarlo a una string lo qu hacemos es llamar al método JSON.parse para obtener un objeto JSON, ademas necesitamos un tipo de datos personalizado que he llamado Elemento para en el momento que tengamos que recorrer el JSON hacerlo de una manera más sencilla. Una vez que tengo el JSON *parseado* guardo unicamente los elementos y los recorro con un **forEach** y guardo los datos que se requieren.

```ts
type Elemento = {
  peso: number;
  valor: number;
}

class ProcesarJSON extends Procesar {
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
```

# Conclusión
En esta práctica se han puesto en conocimiento todos lo aprendido en la asignatura ademas de hacer uso de la API de Node.js y se ha aprendido a usar dos nuevos paquetes que son **chalk** y **yargs** para poder realizar la aplicación por  

# Problemas a lo largo de la práctica
Los errores que he encontrado a lo largo de la práctica son:

 - No he podido realizar la clase Funko con los enum que se indicaban en el guion ya que no sabia bien como gestionarlo en el constructor al momento de recibir los datos desde la consola.
 - No he podido realizar los test de los método que muestran por pantalla usando el chalk. 

# Bibliografía
[Apuntes de clase](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/)
[JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
[API Sincrona de Node y fs](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html)