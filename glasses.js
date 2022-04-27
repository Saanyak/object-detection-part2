status = "";
glasses_image = "";

function preload() {
    glasses_image = loadImage("glasses.jpg");
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
    object_detector.Detect(glasses_image,gotResults);
}

function gotResults(results,error) {
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(glasses_image,0,0,350,550);
}