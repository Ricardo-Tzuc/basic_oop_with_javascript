/*
    - The Polymorphism in JS:
    It allows our subclasses to change or override the behaviors of
    the methods and attributes of the parent prototype,
    of the parent class. Although it inherits the properties,
    polymorphism allows to change its behavior. 

    -Inclusion Polymorphism (JS): The ability to completely
    redefine the method of a superclass in a subclass.
 */
class Comment {
    constructor({
        content, 
        studentName,
        studentRole = 'student',
    }){
        this.content = content
        this.studentName = studentName
        this. studentRole = studentRole
        this.likes = 0
    }

    post() {
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`);
        console.log(this.content);
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
    // Creating an instance from a prototype method
    postComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.post()
    }
}
/* Applying inheritance creating a Subclass based on the Class Student,
using the keyword super we get the properties from the parent class*/
class TeacherStudent extends Student {
    constructor(props) {
        super(props)
    }
    // this method is added in this Subclass
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
    /* However, this class is applying polymorphism by redefining the
    method created in the parent class.
    */
    postComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'professor',
        })
        comment.post()
    }

}

const freddy = new TeacherStudent ({
    name: 'Freddy Vega',
    username: 'freddier',
    email: 'f@gep.com',
    instagram: 'freddier',
})
console.log(freddy);
/*TeacherStudent {
  name: 'Freddy Vega',
  email: 'f@gep.com',
  username: 'freddier',
  socialMedia: { twitter: undefined, instagram: 'freddier', facebook: undefined },
  approvedCourses: [],
  learningPaths: [] }*/
freddy.postComment('Excelente, me encanta esta clase :)')
/* Freddy Vega (professor)
0 likes
Excelente, me encanta esta clase :) */