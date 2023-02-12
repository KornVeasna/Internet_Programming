let start = document.getElementById("start");
let stop = document.getElementById("stop");
let pause = document.getElementById("pause");

let receivedMediaStream = null;

window.addEventListener('click', function(event){
    var constraints  = {
        video : true,
        audio : false
    };

    if (event.target.id == "start") {
        start.hidden = true;
        stop.hidden = false;
        pause.hidden = false;
        canvasp.hidden = true;
        canvas.hidden = false;

        var constraints  = {
            audio : false,
            video : true
        };

        // require user to open webcam for capture 
        navigator.mediaDevices.getUserMedia(constraints).then((mediaStream)=> {
            var video = document.querySelector('video');
            video.srcObject = mediaStream;
            receivedMediaStream = mediaStream;

            video.onloadedmetadata = function loop() {
                // while video play draw to canvas and loop
                video.play();

                if(video.play) {
                    var canvas = document.getElementById("canvas");
                    canvas.width = 600;
                    canvas.height = 500;

                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0);

                    setTimeout(loop, 1000 / 30); // 30fps quality video

                }
            };
        })
        .catch((err)=> {
            console.log(err.name + ": "+ err.message);
        }); //check for errors at the end

    }
    else if (event.target.id == "stop") {
        start.hidden = false;
        stop.hidden = true;
        canvas.hidden = false;
        canvasp.hidden = true;

        // close webcam

        receivedMediaStream.getTracks().forEach((mediaTrack) => {
            mediaTrack.stop();
        });
    }
    else if (event.target.id == "pause") {
        canvas.hidden = true;
        canvasp.hidden = false;
        start.hidden = true;
        stop.hidden = false;
        
        var video = document.querySelector('video');
        canvasp = document.getElementById('canvasp');

        // draw a pic to a canvas to make it pause
        video.pause();
        canvasp.width = 600;
        canvasp.height = 500;

        var ctx = canvasp.getContext('2d');

        ctx.drawImage(video, 0, 0);

    }
});