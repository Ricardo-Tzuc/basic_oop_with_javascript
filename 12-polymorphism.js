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
        console.log(`${this.studentName} (${this.content})`);
    }
}