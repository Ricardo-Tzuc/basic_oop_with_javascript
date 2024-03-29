/*
Given the following classes:

    Class "Banda" with properties:
        name - string
        genres - Array
        members - Array
    Create a class called "Integrante" with the properties:
        name - string
        instrument - string
Write the logic to add members to the class "Banda"
in the function addIntegrante. In this function 
it should not allow to add more than one drummer,
that is to say it is necessary to validate that 
only one member with instrument "Batería" can be added.

The solution should have an input and output like the following:
Input:
    const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
Output:
  {
  "nombre":"Los Jacks",
  "generos":["rock","pop","post-punk"],
  "integrantes":[
    {"nombre":"Erik","instrumento":"Guitarra"},
    {"nombre":"Paul","instrumento":"Bateria"}
  ]}
*/

class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
  
      if (this.integrantes.length > 0) {
        const existInstrumento = this.integrantes.some(integrante => integrante.instrumento === integranteNuevo.instrumento)
        existInstrumento ? console.log('This instrument exist') : this.integrantes.push(integranteNuevo)
      } else {
        this.integrantes.push(integranteNuevo)
      }
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    constructor({ nombre, instrumento }) {
      this.nombre = nombre;
      this.instrumento = instrumento;
    }
  }
  

  /*
  export {
    Banda,
    Integrante,
  }
  */