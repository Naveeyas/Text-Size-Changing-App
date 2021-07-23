noseX = 0;
noseY = 0;
difference = 0;
LeftWristX = 0;
RightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    document.getElementById("square_side").innerHTML = "Width and Height of square will be = " + difference + "px";
    background('#808080');
    fill('#FF0000');
    stroke('#FF0000');
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("LeftWristX = " + LeftWristX +" RightWristX = " + RightWristX);
    }
}