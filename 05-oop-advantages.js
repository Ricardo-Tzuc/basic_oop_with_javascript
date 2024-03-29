/*
The biggest advantage of working with object oriented programming
is that it saves time and effort to be repeating code and writing 
many lines of code, it may seem that at first it will take more
time, but in the long term its application is indispensable,
as it allows flexible changes in the future in addition 
to systematize and order the code to have it in one place.
 */

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
    courses:['Web Introduction Course',
            'Programming Basic Course',
            'Git & Github Course']})
const dataSchool = new LearningPath({routeName: 'Data Science School',
id:'dataScienceSchool-001',
courses:['Artificial Intelligence Course',
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
console.log(juan1);


const miguelito2 = new Student({
    name: 'Miguelito',
    username: 'miguelitofeliz',
    email:'miguelito@platzi.com',
    instagram: 'miguelito_feliz',
    learningPaths: [webSchool, businessSchool]
})
console.log(miguelito2);