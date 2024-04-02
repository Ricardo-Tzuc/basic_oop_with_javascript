/*
    Encapsulation:
     It is the way to protect, encapsulate, store, limit,
     hide access to certain attributes and properties of
     our objects.
    
    -This allows us to create private methods and attributes.
    Only methods and attributes inside the class will be 
    able to access this private data.
    - We can prevent the overwriting or alteration of methods
    and attributes, classes, objects, or even prototypes,
    i.e. the instances created. 

    Encapsulation in JS:
    - We cannot hide methods and attributes, all in JS is public.
    - We can implement encapsulation to deny the modification
    of methods and attributes.

    Ways to Do it:
    - Getters & Setters
    - Namespaces
    - Object.defineProperties
    - Modules of ES6
*/


class Course {
    /* In ES2020 the syntax private fields was introduced in the classes.
    It makes use of a numeral as a prefix of the variable name.
    What would be the advantage of using this? 
    That there is no possibility of someone modifying
    the private variable from the instance unless
    they use the setter we gave them. */
    #name
    constructor({
        name,
        classes = []
    }) {
        this.#name = name // other nomenclature is using underscore '_'
        // By using underscore is easy to access to the property,
        // with numeral that is not possible.
        this.classes = classes
    }
    /* A function that gets a value from a property is called a getter
    and one that sets the value of a property is called a setter.
     */
    get name() {
        return this.#name
    }
    set name(newName){
        if (newName === 'Bad Programming Course') {
            console.error('Name no available');
        } else {
            this.#name = newName
        }
    }
}
// Instance from Class
const programmingBasicCourse = new Course({name: 'Free Programming Basic Course',
    classes: []})

console.log(programmingBasicCourse.name);
// Free Programming Basic Course

console.log(programmingBasicCourse.name = 'Bad Programming Course'
);
/* Name no available
Bad Programming Course */

programmingBasicCourse.name = 'Free Basic Course'
console.log(programmingBasicCourse.name);
// Free Basic Course

// console.log(programmingBasicCourse.#name); 
// SyntaxError: Private field '#name' must be declared in an enclosing class