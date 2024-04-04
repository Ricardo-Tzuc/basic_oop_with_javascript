/*
Within this challenge you will find the "Student" and "Comment"
classes with a code base, remember to check them out
in the filesystem.

Your challenge consists of:
Make the "TeacherStudent" class inherit from "Student".
Add an Array property called "skills" to the "TeacherStudent" class.
Override the method "publicarComentario" inside "TeacherStudent". 

You must add the array of skills in the "studentRole" property
of the "Comment" class.
The string should look like this "profesor de skill1,skill2".

Input:
const skills = ["js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

const profesor = new TeacherStudent(props, skills)
profesor.publicarComentario('Mi primer comentario')

Output:
{
  "studentName":"Erik Ochoa (profesor de js,python,mongodb)",
  "likes":"0 likes",
  "content":"Mi primer comentario"
}
*/
class Comment {
    constructor({
      content,
      studentName,
      studentRole = "estudiante",
    }) {
      this.content = content;
      this.studentName = studentName;
      this.studentRole = studentRole;
      this.likes = 0;
    }
  
    publicar() {
      const comentario = {
        studentName: this.studentName + " (" + this.studentRole + ")",
        likes: this.likes + " likes",
        content: this.content
      }
      return comentario
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
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    return comment.publicar();
  }
}

//inheritance application
class TeacherStudent extends Student {
  constructor(props, skills =[]) {
    super(props)
    this.skills = skills
  }
  // polymorphism application
  publicarComentario(commentContent) {
    const role = `profesor de ${this.skills.join(',')}`
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: role,
    });
    return comment.publicar();
  }
  }
// Test with instances
const skills = ["js", "python", "mongodb"]
const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

const profesor = new TeacherStudent(props, skills)
console.log(profesor.publicarComentario('Mi primer comentario'));
/*
{
  studentName: 'Erik Ochoa (profesor de js,python,mongodb)',
  likes: '0 likes',
  content: 'Mi primer comentario'
}
 */