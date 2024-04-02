function videoPlay(id) {
    const secretUrl = 'https://platziultrasecretomasquelanasa.com/' + id
    console.log("It's playing from "+ secretUrl);
}
function videoPause(id) {
    const secretUrl = 'https://platziultrasecretomasquelanasa.com/' + id
    console.log("It's pausing from "+ secretUrl);
}

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