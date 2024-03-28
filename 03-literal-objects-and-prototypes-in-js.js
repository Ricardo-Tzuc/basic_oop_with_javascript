
// Here is a Literal Object
const natalia = {
    name: 'Natalia',
    age: 20,
    approvedCourses: ['Definitive HTML & CSS Course'],
    //approveCourse: function() {}
    approveCourse (newCourse) {
        //use of 'this' to refers to this object
        this.approvedCourses.push(newCourse)
    }
}
// The way we add a method to an literal object:
natalia.approveCourse('Css Grid Course')
console.log(natalia);
/*
{ name: 'Natalia',
  age: 20,
  approvedCourses: [ 'Definitive HTML & CSS Course', 'Css Grid Course' ],
  approveCourse: [Function: approveCourse]
}
 */
// Changes in literal object only affect to itself


// Here we create a Prototype, also known as Constructor Function
function Student(name, age, approvedCourses) {
    this.name = name
    this.age = age
    this.approvedCourses = approvedCourses
    //the code comment below makes a reference of how to create methods
    // this.approveCourse = function (newCourse) {
    //     this.approvedCourses.push(newCourse)
    // }
}

//Remember the prototype keyword is necessary to add new properties and methods to Prototypes.
Student.prototype.approveCourse = function (newCourse) {
    this.approvedCourses.push(newCourse)
}
//Creation of an instance called juanita from Student prototype.
const juanita = new Student('Juanita Alejandra', 15, ['VideoGames Production Intro Course', 'Character Design Course'])
console.log(juanita);
/*
Student {
  name: 'Juanita Alejandra',
  age: 15,
  approvedCourses: [ 'VideoGames Production Intro Course', 'Character Design Course' ]
}
 */
//Methods are hidden in the __proto__ property.

// approveCourse() method was added, so we can use it.
juanita.approveCourse('Unreal Engine Course')
console.log(juanita); 
/*
Student {
  name: 'Juanita Alejandra',
  age: 15,
  approvedCourses: [
    'VideoGames Production Intro Course',
    'Character Design Course',
    'Unreal Engine Course'
  ]
}
*/
