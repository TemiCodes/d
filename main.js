Webcam.set({
    width: 350,
    height: 350,
    image_format:"png",
    png_quality: 90

});


camera = document.getElementById("cam")
Webcam.attach(camera)
function take_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML = "<img id='result' src= " + data_uri + ">"

    })

}
console.log("ml5.version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3Ub9Gdzg2/model.json",model_loaded)
function model_loaded() {
    console.log("model loaded!")
}

function identify_picture() {
    img=document.getElementById("result")
    classifier.classify(img, gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("Object_Name").innerHTML = results[0].label
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}
