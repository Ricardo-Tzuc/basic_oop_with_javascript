/*
    Abstraction: 
    By doing this we reduce complexity and allow us an 
    implementation and efficient design of the data.

    Advantages:
    - Avoiding duplicated code, the code is reusable.
    - Creation of multiple instances with only one abstraction.
    - Changes in classes can be inherited.

    Abstraction is a process or mental operation that aims
    to isolate the essential properties and functions 
    in a class that serves as a mold to create other 
    objects (instances) that share the same properties 
    and functions and can be customized.
*/

// PROTOTYPE: CLASS
class Class {
    constructor({
        id,
        name,
        professor
    }) {
        this.id = id
        this.name = name
        this.professor = professor
    }
}
// Instances from Class
const classWebIntro1 = new Class({id:1, name: 'Class 1', professor:'Diego De Granda'})
const classWebIntro2 = new Class({id:2, name: 'Class 2', professor:'Diego De Granda'})
const classAIcourse1 = new Class({id:1, name: 'Class 1', professor: 'Freddy Vega'})
const classAIcourse2 = new Class({id:2, name: 'Class 2', professor: 'Freddy Vega'})


// PROTOTYPE: COURSE
class Course {
    constructor({
        name, 
        classes = [],
    }){
        this.name = name
        this.classes = classes
    }
}
// Instances from Course
const webIntroductionCourse = new Course({
    name:'Web Introduction Course',
    classes: [classWebIntro1, classWebIntro2],
})
const artificialIntelligenceCourse = new Course({
    name:'Artificial Intelligence Course',
    classes: [classAIcourse1, classAIcourse2],
})


// PROTOTYPE: LEARNING PATH
class LearningPath {
    constructor ({
        routeName,
        id,
        courses,

    }){
        this.routeName = routeName
        this.id = id
        this.courses = courses
    }
}
// Instances from Learning Path
const webSchool = new LearningPath({routeName: 'Web School',
    id:'webSchool-001',
    courses:[webIntroductionCourse,
            'Programming Basic Course',
            'Git & Github Course']})
const dataSchool = new LearningPath({routeName: 'Data Science School',
id:'dataScienceSchool-001',
courses:[artificialIntelligenceCourse,
        'AI & ML Fundaments Course',
        'Guide to Start in Data Science Course']})
const businessSchool = new LearningPath({
    routeName: 'Data Science School',
    id:'businessSchool-001',
    courses:['Business Metrics Course',
        'Business Serie Course',
        'Business Model Course']})


// PROTOTYPE: STUDENT
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourse = [],
        learningPaths = [],
    }) {
        this.name = name
        this.email = email
        this.username = username
        this.twitter = twitter
        this.instagram = instagram
        this.facebook = facebook
        this.approvedCourse = approvedCourse
        this.learningPaths = learningPaths
    }
}
// Instance from Student
const juan1 = new Student({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juanito@juanito.com',
    twitter: 'fjuandc',
    learningPaths: [webSchool, dataSchool]
})
console.log(juan1.learningPaths[0].courses[0]);
/*
    Structure:
       STUDENT: Student has learning paths...
            LEARNING PATH: Learning path has courses...
                COURSE: Course has classes..
                    CLASS: Class has more properties that 
                    comes from other properties.. 
                    like professors that can comes from
                    other prototype, or a extension 
                    from a bigger prototype.
*/