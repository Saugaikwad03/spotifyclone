
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let song = [
    {
        songname: "o mahi o mahi", filepath: "song/1.mp3", coverpath: "image/cover1.jpg"
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    {
        songname: "Salame-e-ishq", filepath: "", coverpath: ""
    },
    
]
// audioelement.play();


//handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
myprogressbar.addEventListener('timeupdate', ()=>{
    console.log("timeupdate");
    // update seekbar
})