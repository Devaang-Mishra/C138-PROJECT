img=""
status=""
objects=[]

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status:true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function preload(){
    img=loadImage("cellphone.jpg");

}

function draw(){
    if(status !=""){

    }

    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Camera" , 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 100, 300);
    fill("#FF0000");
    text("Cell Phone", 320,120);
    noFill();
    stroke("#FF0000");
    rect(300, 60, 80, 150);
    
}