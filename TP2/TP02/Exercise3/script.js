var canvas = document.getElementById('canvasImg');
var ctx = canvas.getContext('2d');
var imageLoader = document.getElementById('uploadImg');
imageLoader.addEventListener('change', handleImg, false);


function handleImg(uploadImgFile) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function(){
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img,0,0);
        }

        img.src = event.target.result;
    }

    reader.readAsDataURL(uploadImgFile.target.files[0]);
}
