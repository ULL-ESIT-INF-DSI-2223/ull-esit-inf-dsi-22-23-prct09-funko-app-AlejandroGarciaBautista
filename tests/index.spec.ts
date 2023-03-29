import 'mocha'
import { expect } from "chai"
import {Hello} from "../src/index"

describe ("Test prueba", () => {
  it ("Test", () => {
    expect(Hello()).to.be.eql("Hola Mundo")
  })
});