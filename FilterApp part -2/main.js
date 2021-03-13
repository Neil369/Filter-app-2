lipX=0;
lipY=0;
lipX=0;
lipY=0;
webcam.set ({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
    });
    
    camera = document.getElementById("camera");
    wecam.attach('#camera');

function preload() {
mustache_on_the_upper_lip=loadimage('https://jynyhy9vu5r8xz5zy0utww-on.drv.tw/project-C114-C116.com/mustache/projectC114-C116.html')
}

function setup() {
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
}
poseNet=m15.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

function draw() {
}
poseNet=m15.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

function modelLoaded() {
    console.log(modelLoaded);
}

function take_snapshot(){
save('myFilterImage.png')
}
