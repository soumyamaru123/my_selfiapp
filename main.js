var SpeechRecognition = window.webkitSpeechRecognition;
var reognition = new SpeechRecognition() ;

function start()
{
 document.getElementById("textbox").innerHTML="";
 reognition.start();   
}

reognition.onresult = function(event){

    console.log(event);

var Content = event.results[0][0].transcript;
    
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if(Content=="take my selfie"){
        console.log("taking selfie------");
        speak();  
    }
        
    
}

function speak(){
    var synth = window.speechSynthesis;

    speek_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(spreak_data);

    synth.speak(utterThis);
    setTimeout(function(){},5000);

    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();


}