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
class Class {
    constructor({
        id,
        name,
    }) {
        this.id = id
        this.name = name
    }
}
const classWebIntro1 = new Class({id:1, name: 'Class 1'})
const classWebIntro2 = new Class({id:2, name: 'Class 2'})
const classAIcourse1 = new Class({id:1, name: 'Class 1'})
const classAIcourse2 = new Class({id:2, name: 'Class 2'})


class Course {
    constructor({
        name, 
        classes = [],
    }){
        this.name = name
        this.classes = classes
    }
}

const webIntroductionCourse = new Course({
    name:'',
    classes: [classWebIntro1, classWebIntro2],
})
const artificialIntelligenceCourse = new Course({
    name:'',
    classes: [classAIcourse1, classAIcourse2],
})
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

const juan1 = new Student({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juanito@juanito.com',
    twitter: 'fjuandc',
    learningPaths: [webSchool, dataSchool]
})
console.log(juan1.learningPaths[0].courses[0]);
