/*
    For modular, it is enough that the file has the extension ".js",
    but the V8 engine, which runs in the browsers, recommends using
    the extension ".mjs".
    -This is useful because it is clear which file is a module
    and which is not.
    -It ensures that module files are treated as such by
    the Babel or Node.js extension.

 *//*
these functions can be considered secret or inaccessible cus
the class use them, but we cannot access to them or modify
from the import file. */
function videoPlay(id) {
    const secretUrl = 'https://platziultrasecretomasquelanasa.com/' + id
    console.log("It's playing from "+ secretUrl);
}
function videoPause(id) {
    const secretUrl = 'https://platziultrasecretomasquelanasa.com/' + id
    console.log("It's pausing from "+ secretUrl);
}

// the export at the beginning of the declaration
 export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name
        this.videoID = videoID
    }

    play(){
        videoPlay(this.videoID)
    }
    pause() {
        videoPause(this.videoID)
    }
}
// the export in only one declaration at the end of the module archive.
// export {PlatziClass}