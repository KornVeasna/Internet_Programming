//play and pause button display
var playing = true;
document.getElementById("buttonPlay").addEventListener("click", playPause);

function playPause(){
    if(playing){
        playing = false;
        document.getElementById("buttonPlay").addEventListener("click", loop);
        document.getElementById("buttonPlay").innerHTML = "Play";
    }else{
        playing = true;
        document.getElementById("buttonPlay").innerHTML = "Pause";
        document.getElementById("buttonPlay").addEventListener("click",clearImage)
        // document.getElementById("canvasVideo").style.backgroundColor = "white";
    }
}

//access the camera
var video = document.createElement("video");
video.autoplay = true;

navigator.mediaDevices.getUserMedia({
    audio:false, video:true
}).then((stream) => {
    video.srcObject = stream;
}).catch((err) => {
    console.log("navigator.MediaDevices.getUerMedia error: ", err.message, err.name);
});

//loop drawing
var canvas = document.getElementById('canvasVideo');
var ctx = canvas.getContext('2d');
var canvasProject = document.getElementById('canvasVideoProject');
var ctxProject = canvasProject.getContext('2d');

function loop(){
    if(playing){
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // console.log(canvas.width);
        // console.log(canvas.height);
        ctxProject.drawImage(video, 0, 0, 213, 240, 0, 0, 99, 74);
        ctxProject.drawImage(video, 213, 0, 213, 240, 100, 0, 99, 74);
        ctxProject.drawImage(video, 426, 0, 213, 240, 200, 0, 100, 74);
        ctxProject.drawImage(video, 0, 240, 213, 240, 0, 75, 99, 75);
        ctxProject.drawImage(video, 213, 240, 213, 240, 100, 75, 99, 75);
        ctxProject.drawImage(video, 426, 240, 213, 240, 200, 75, 100, 75);
        setTimeout(loop, 1000/30); //video 30fps
    }
}
function clearImage(){
    if(!playing){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctxProject.clearRect(video, 0, 0, 213, 240, 0, 0, 99, 74);
        ctxProject.clearRect(video, 213, 0, 213, 240, 100, 0, 99, 74);
        ctxProject.clearRect(video, 426, 0, 213, 240, 200, 0, 100, 74);
        ctxProject.clearRect(video, 0, 240, 213, 240, 0, 75, 99, 75);
        ctxProject.clearRect(video, 213, 240, 213, 240, 100, 75, 99, 75);
        ctxProject.clearRect(video, 426, 240, 213, 240, 200, 75, 100, 75);
    }
}