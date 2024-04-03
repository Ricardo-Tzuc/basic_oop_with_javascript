/*
Inheritance allows us to create "base molds" to create other
prototypes from the parent class.

In the new prototype we can inherit from the parent class
all the attributes and methods that we defined there.
The reserved word to achieve this is extends.
*/
class Course {
    constructor({
        name,
        classes = [],
        isFree  = false,
        lang = 'spanish',
    }){
        this._name = name
        this.classes = classes
        this.isFree = isFree
        this.lang = lang
    }
}

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name
        this.email = email
        this.username = username
        this.socialMedia = {
            twitter,
            instagram,
            facebook

        }
        this.approvedCourses = approvedCourses
        this.learningPaths = learningPaths
    }
}
/* The classes below inherit the prototype Student
We define new methods that can fit each prototype
depending on the prototype chosen the methods
contains different logic to Work, in that way
it is possible to share common characteristics
and also have specific ones for each extended class/prototype */
class FreeStudent extends Student {
    constructor(props) {
        super(props)
    }
    
    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`We sorry ${this.name}, You only can take free courses`);
        }
    }
}
class BasicStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourse(newCourse) {
        if(newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`We sorry ${this.name}, You can't take english courses`);
        }
    }

}
class ExpertStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse)
    }
}



const basicProgrammingCourse = new Course({
    name: 'Basic Programming Free Course',
    isFree: true,
    lang: 'spanish'
})
const HtmlPracticeCourse = new Course({
    name: 'HTML & CSS Practice Course',
    isFree: false,
    lang: 'english'
})



const juan = new FreeStudent ({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juanito@juanito.com',
    twitter: 'fjuandc',
    learningPaths: [],


})
const miguelito = new BasicStudent ({
    name: 'Miguelito',
    username: 'miguelitofeliz',
    email: 'miguelito@juanito.com',
    twitter: 'miguelito_feliz',
    learningPaths: [],

})
juan.approveCourse(basicProgrammingCourse)
console.log(juan.approvedCourses);
/* [Course {
    _name: 'Basic Programming Free Course',
    classes: [],
    isFree: true,
    lang: 'spanish'
  }
]*/
juan.approveCourse(HtmlPracticeCourse)
// We sorry JuanDC, You only can take free courses

miguelito.approveCourse(basicProgrammingCourse)
console.log(miguelito.approvedCourses)
/* [Course {
    _name: 'Basic Programming Free Course',
    classes: [],
    isFree: true,
    lang: 'spanish'
  }
]*/
miguelito.approveCourse(HtmlPracticeCourse)
//We sorry Miguelito, You can't take english courses
