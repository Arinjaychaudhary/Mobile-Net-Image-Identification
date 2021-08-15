Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 100,
});

var camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = `<img id=photo src=${data} />`
    });
}

console.log("ML5 version"+ml5.version);

classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function identify(){
img=document.getElementById("photo");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if (error) {
    console.error(error);
} else {
 document.getElementById("object_name").innerHTML=results[0].label;
 console.log(results)   
}

}
