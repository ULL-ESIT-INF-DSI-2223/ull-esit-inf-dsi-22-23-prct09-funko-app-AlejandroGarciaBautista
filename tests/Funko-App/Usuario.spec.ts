import 'mocha'
import { expect } from 'chai'
import { Funko } from '../../src/Funko-App/Funko.js'
import { Usuario } from '../../src/Funko-App/Usuario.js'
import { Coleccion } from '../../src/Funko-App/Coleccion.js'

const funko1 = new Funko(1, "Mario", "Mario Bros con una estrella", "Pop!", "Videojuegos", "Mario Bros", 12, false, "Cabeza XXL", 30)
const funko1_2 = new Funko(1, "Mario", "Mario Bros con una estrella", "Pop!", "Videojuegos", "Mario Bros", 22, false, "Cabeza XXL", 30)
const funko2 = new Funko(2, "Luigi", "Luigi con una estrella", "Pop! Rides", "Videojuegos", "Mario Bros", 10, false, "Cabeza XXL", 15)

describe("Tests de la clase Usuario", () => {
  it ("El constructor no debe devolver undefined", () => {
    expect(new Usuario("test")).not.to.be.eql(undefined)
  });

  it ("Prueba del getNombre", () => {
    const usuario = new Usuario("testUsuario")
    expect(usuario.getNombre).to.be.eql("testUsuario")
  });

  it ("Prueba de getFunkos", () => {
    const usuario = new Usuario("testUsuario")
    expect(usuario.getFunkos).to.be.eql(new Coleccion())
  });

  it ("Prueba de añadirFunko", () => {
    const usuario = new Usuario("testUsuario")
    expect(usuario.añadirFunko(funko1)).to.be.eql(true);
    expect(usuario.añadirFunko(funko1)).to.be.eql(false);
    const coleccion = new Coleccion();
    coleccion.añadir(funko1);
    expect(usuario.getFunkos).to.be.eql(coleccion)
  });

  it ("Prueba de modificar un funko", () => {
    const usuario = new Usuario("testUsuario")
    expect(usuario.modificarFunko(funko1_2)).to.be.eql(true);
    expect(usuario.modificarFunko(funko2)).to.be.eql(false);
    const coleccion = new Coleccion();
    coleccion.añadir(funko1_2);
    expect(usuario.getFunkos).to.be.eql(coleccion)
  });

  it ("Prueba eliminarFunko", () => {
    const usuario = new Usuario("testUsuario")
    expect(usuario.eliminarFunkoXID(2)).to.be.eql(false)
    expect(usuario.eliminarFunkoXID(1)).to.be.eql(true)
    expect(usuario.getFunkos).to.be.eql(new Coleccion())
  })

  // it ("Prueba de existeRuta", () => {
  //   const usuario = new Usuario("testUsuario")
  //   expect(usuario.existeRuta("test")).to.be.eql(true)
  //   expect(usuario.existeRuta("ale")).to.be.eql(false)
  // })
});