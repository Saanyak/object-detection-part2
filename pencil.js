status = "";
pencil_image = "";

function preload() {
    pencil_image = loadImage("pencil.jpg");
}

function setup() {
    canvas = createCanvas(350,550);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    object_detector.Detect(pencil_image,gotResults);
}

function gotResults(results,error) {
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(pencil_image,0,0,350,550);
}