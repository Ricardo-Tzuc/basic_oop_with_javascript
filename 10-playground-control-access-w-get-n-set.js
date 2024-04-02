/*
    In this challenge given the following class:

    export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {

  }

  set name(nuevoNombrecito) {

  }
}

    Using the set of the property name validates the
    following whenever you want to assign a value to it:

That it is of type string.
If it is string it converts the first letter of each word
of the name in upper case.
If it is not a string, the value of the name property
is not changed.
The solution should have an input and output like the following:

Input:
    const courseName = "curso de programación básica"
    const nombreMaysuculas = new Course({
        name: courseName,
    })
    nombreMayusculas.name

Output: 
'Curso De Programación Básica'
 */
class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = '';
      this.name = name;
      this. classes = classes;
    }
  
    get name() {
      return this._name
    }
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito === 'string') {
        nuevoNombrecito.trim()
        if (nuevoNombrecito.length > 0) {
          const separatedWords = nuevoNombrecito.split(' ')
          const upperWords = separatedWords.map(word => word[0].toLocaleUpperCase() + word.slice(1))
          const upperName = upperWords.join(' ')
          this._name = upperName
  
        }
      } else {
        return this._name
      }
    }
  }
  const courseName = 'curso de programación básica'
  const nombreMayusculas = new Course({ name: courseName })
  console.log(nombreMayusculas); // Curso De Programación Básica
