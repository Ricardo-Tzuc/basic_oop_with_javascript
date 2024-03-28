// Prototypes with Classes sintaxis.

// we use the keyword 'class' to use this sintaxis.
class Student {
    // the constructor is the methods that is executed once a instance is request. 
    constructor (name, age, approvedCourses) {
        this.name = name
        this.age = age
        this.approvedCourses = approvedCourses
        //the properties works pretty much the same.
    }
    //the methods are inside the class but out of the constructor
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
        //this. keeps making reference to this object.
    }
}
// It is just a modern sintaxis but it keeps the same prototypes principles.

// Creation of an instance from Student Class (Prototype)
const miguelito = new Student(
    'Miguel',
    28,
    [
        'Business Analysis for Data Science Course',
        'Principles of Data Visualization for BI Course'
    ]
)

miguelito.approveCourse('Tableau Course')
console.log(miguelito);
/*
Student {
  name: 'Miguel',
  age: 28,
  approvedCourses: [
    'Business Analysis for Data Science Course',
    'Principles of Data Visualization for BI Course',
    'Tableau Course'
  ]
}
 */



// What if we have many parameters?
/*
    We can use the RORO pattern.
    RORO => Receive an object, return an object.

    -It helps us when we have many parameters in our constructor,
    since when using an object, it is easy to deconstruct to obtain
    what we want, making the call to the keys without worrying about
    the order.
    
    -It is necessary to keep in mind that it must send the 
    information in object form.
    
    -A plus would be to add values by default in the classes,
    in case that when instantiating they are not provided.


source: https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/    
*/

class Student2 {
    //here we set an object as a parameter with default assigns to the variables.
    constructor ({
        name, 
        age, 
        approvedCourses = [],
        email = 'example@mail.com'} = {}) {
        this.name = name
        this.age = age
        this.email = email
        this.approvedCourses = approvedCourses
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

const nath = new Student2({
    name:'Natalia',
    age:24,
    approvedCourses:[
        'Business Analysis for Data Science Course',
        'Principles of Data Visualization for BI Course'
    ]
})

nath.approveCourse('Tableau Course')
console.log(nath);
/*
Student2 {
  name: 'Natalia',
  age: 28,
  email: 'example@mail.com',
  approvedCourses: [
    'Business Analysis for Data Science Course',
    'Principles of Data Visualization for BI Course',
    'Tableau Course'
  ]
}
 */


