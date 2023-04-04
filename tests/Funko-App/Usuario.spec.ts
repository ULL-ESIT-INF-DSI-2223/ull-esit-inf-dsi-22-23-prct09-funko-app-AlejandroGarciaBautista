import 'mocha'
import { expect } from 'chai'
import { Funko } from '../../src/Funko-App/Funko.js'
import { Usuario } from '../../src/Funko-App/Usuario.js'
import { Coleccion } from '../../src/Funko-App/Coleccion.js'

const funko1 = new Funko(1, "Mario", "Mario Bros con una estrella", "Pop!", "Videojuegos", "Mario Bros", 12, false, "Cabeza XXL", 30)
const funko1_2 = new Funko(1, "Mario", "Mario Bros con una estrella", "Pop!", "Videojuegos", "Mario Bros", 22, false, "Cabeza XXL", 30)
const funko2 = new Funko(2, "Luigi", "Luigi con una estrella", "Pop! Rides", "Videojuegos", "Mario Bros", 10, false, "Cabeza XXL", 15)
const funko3 = new Funko(3, "Wario", "Wario con una estrella", "Pop!", "Videojuegos", "Mario Bros", 20, true, "Cabeza XXL", 100)
const funko4 = new Funko(4, "Bowser", "Bowser Enfadado", "Pop! Rides", "Videojuegos", "Mario Bros", 11, false, "Cabeza XXL", 60)
const usuario = new Usuario("test")

describe("Tests de la clase Usuario", () => {
  it ("El constructor no debe devolver undefined", () => {
    expect(new Usuario("test")).not.to.be.eql(undefined)
  });

  it ("Prueba del getNombre", () => {
    expect(usuario.getNombre).to.be.eql("test")
  });

  it ("Prueba de getFunkos", () => {
    expect(usuario.getFunkos).to.be.eql(new Coleccion())
  });

  it ("Prueba de añadirFunko", () => {
    expect(usuario.añadirFunko(funko1)).to.be.eql(true);
    expect(usuario.añadirFunko(funko1)).to.be.eql(false);
    const coleccion = new Coleccion();
    coleccion.añadir(funko1);
    expect(usuario.getFunkos).to.be.eql(coleccion)
  });

  it ("Prueba de modificar un funko", () => {
    expect(usuario.modificarFunko(funko1_2)).to.be.eql(true);
    expect(usuario.modificarFunko(funko2)).to.be.eql(false);
    const coleccion = new Coleccion();
    coleccion.añadir(funko1_2);
    expect(usuario.getFunkos).to.be.eql(coleccion)
  });

  it ("Prueba eliminarFunko", () => {
    expect(usuario.eliminarFunkoXID(2)).to.be.eql(false)
    expect(usuario.eliminarFunkoXID(1)).to.be.eql(true)
    expect(usuario.getFunkos).to.be.eql(new Coleccion())
  })

  it ("Prueba de existeRuta", () => {
    expect(usuario.existeRuta("test")).to.be.eql(true)
    expect(usuario.existeRuta("ale")).to.be.eql(false)
  })
});