// What is an object in JavaScript?



/* literal Object
literal objects !== instances <- Not at all

Literal objects are distinguished from OOP objects because 
they are not instances of a prototype created by the developer.

However, literal objects are instances of the Object prototype 
created by default in JavaScript. .

*/
const natalia = {
    name: 'Natalia',
    age: 20,
    rank: 2000
}
console.log(natalia);

/*
    A prototype is a code structure from which objects
     are created,since it stores the attributes and 
     methods that can later be inherited by its instances.
     We can think of it as a "mold" of objects.
 */

function Student() {
    this.name = 'Name'
    this.age = 18
    this.points = 750
}

const juanita = new Student()
console.log(juanita);

/*
    Attribute __proto__
    This is the name given to the attribute where
    the methods that data structures have by default
    in JavaScript are stored.
    
    The __proto__ attribute is inherited from the JavaScript 
    default prototypes for each particular data structure,
    for example from the Object and Array prototypes.
    
    The __proto__ attribute is also inherited to objects, 
    since they are both instances of some prototype
    created by the developer and the Object prototype. 

*/
const arraysito = new Array()
console.log(arraysito);
const objetito = new Object()
console.log(objetito);

/*
    Then, when we talk about Object in JS, we can refer to 
    different things depending of the context, 
    it can refers to:
    - Literal Objects
    - Prototype Instances
    - Arrays
    - Prototype Object() 
 */