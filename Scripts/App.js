//Justin He
//7
//11/30/2022

/*Provide a description about what this program does here*/
//Creates a christmas card that can be opened that plays music and has a little message from a cat


//Creates and styles the background 
var background = document.getElementById("4");
background.style.width = "0px";
background.style.height = "0px";
background.style.borderWidth = "200px"
background.style.borderStyle = "solid"
background.style.borderColor = "RGB(112, 157, 230)"
background.style.borderRadius = "10%"
background.style.position = "absolute"
background.style.left = "35%"
background.style.top = "5%"

//Creates and styles cats left side whiskers 
var LeftWhisker1 = document.getElementById("19");
LeftWhisker1.style.width = "75px";
LeftWhisker1.style.height = "0px";
LeftWhisker1.style.borderWidth = "4px"
LeftWhisker1.style.borderStyle = "solid"
LeftWhisker1.style.borderColor = "RGB(0, 0, 0)"
LeftWhisker1.style.borderRadius = "10%"
LeftWhisker1.style.position = "absolute"
LeftWhisker1.style.left = "38.5%"
LeftWhisker1.style.top = "27%"
var LeftWhisker2 = document.getElementById("14");
LeftWhisker2.style.width = "75px";
LeftWhisker2.style.height = "0px";
LeftWhisker2.style.borderWidth = "4px"
LeftWhisker2.style.borderStyle = "solid"
LeftWhisker2.style.borderColor = "RGB(0, 0, 0)"
LeftWhisker2.style.borderRadius = "10%"
LeftWhisker2.style.position = "absolute"
LeftWhisker2.style.left = "38%"
LeftWhisker2.style.top = "30%"
var LeftWhisker3 = document.getElementById("15");
LeftWhisker3.style.width = "75px";
LeftWhisker3.style.height = "0px";
LeftWhisker3.style.borderWidth = "4px"
LeftWhisker3.style.borderStyle = "solid"
LeftWhisker3.style.borderColor = "RGB(0, 0, 0)"
LeftWhisker3.style.borderRadius = "10%"
LeftWhisker3.style.position = "absolute"
LeftWhisker3.style.left = "39%"
LeftWhisker3.style.top = "33%"

//Creates and styles cats right side whiskers 
var RightWhisker1 = document.getElementById("18");
RightWhisker1.style.width = "75px";
RightWhisker1.style.height = "0px";
RightWhisker1.style.borderWidth = "4px"
RightWhisker1.style.borderStyle = "solid"
RightWhisker1.style.borderColor = "RGB(0, 0, 0)"
RightWhisker1.style.borderRadius = "10%"
RightWhisker1.style.position = "absolute"
RightWhisker1.style.left = "50%"
RightWhisker1.style.top = "27%"
var RightWhisker2 = document.getElementById("17");
RightWhisker2.style.width = "75px";
RightWhisker2.style.height = "0px";
RightWhisker2.style.borderWidth = "4px"
RightWhisker2.style.borderStyle = "solid"
RightWhisker2.style.borderColor = "RGB(0, 0, 0)"
RightWhisker2.style.borderRadius = "10%"
RightWhisker2.style.position = "absolute"
RightWhisker2.style.left = "50%"
RightWhisker2.style.top = "30%"
var RightWhisker3 = document.getElementById("16");
RightWhisker3.style.width = "75px";
RightWhisker3.style.height = "0px";
RightWhisker3.style.borderWidth = "4px"
RightWhisker3.style.borderStyle = "solid"
RightWhisker3.style.borderColor = "RGB(0, 0, 0)"
RightWhisker3.style.borderRadius = "10%"
RightWhisker3.style.position = "absolute"
RightWhisker3.style.left = "49%"
RightWhisker3.style.top = "33%"

//creates and styles cats left ear
var lEar = document.getElementById("2")
lEar.style.borderBottom = "70px"
lEar.style.borderLeft = "40px"
lEar.style.borderRight = "70px"
lEar.style.width = "0px"
lEar.style.height = "0px";
lEar.style.borderStyle = "solid"
lEar.style.borderColor = "transparent";  
lEar.style.borderBottomColor = "RGB(230, 211, 131)"
lEar.style.position = "absolute"
lEar.style.left = "40.5%"
lEar.style.top = "14%"

//creates and styles cats right ear 
var rEar = document.getElementById("3")
rEar.style.borderBottom = "70px"
rEar.style.borderLeft = "70px"
rEar.style.borderRight = "40px"
rEar.style.width = "0px"
rEar.style.height = "0px";
rEar.style.borderStyle = "solid"
rEar.style.borderColor = "transparent";  
rEar.style.borderBottomColor = "RGB(230, 211, 131)"
rEar.style.position = "absolute"
rEar.style.left = "46.5%"
rEar.style.top = "14%"

//creates circle for cat face 
var face = document.getElementById("1");
face.style.width = "0px";
face.style.height = "0px";
face.style.borderWidth = "100px"
face.style.borderStyle = "solid"
face.style.borderColor = "RGB(255, 236, 169)"
face.style.borderRadius = "50%"
face.style.position = "absolute"
face.style.left = "41%"
face.style.top = "17.5%"

//creates and styles left cat eye
var rEye = document.getElementById("5");
rEye.style.width = "0px";
rEye.style.height = "0px";
rEye.style.borderWidth = "7.5px"
rEye.style.borderStyle = "solid"
rEye.style.borderColor = "RGB(0, 0, 0)"
rEye.style.borderRadius = "100%"
rEye.style.position = "absolute"
rEye.style.left = "48.75%"
rEye.style.top = "25%"


//creates and styles right cat eye
var lEye = document.getElementById("6");
lEye.style.width = "0px";
lEye.style.height = "0px";
lEye.style.borderWidth = "7.5px"
lEye.style.borderStyle = "solid"
lEye.style.borderColor = "RGB(0, 0, 0)"
lEye.style.borderRadius = "100%"
lEye.style.position = "absolute"
lEye.style.left = "43.75%"
lEye.style.top = "25%"

//creates and styles nose of cat
var nose = document.getElementById("10")
nose.style.borderBottom = "10px"
nose.style.borderLeft = "10px"
nose.style.borderRight = "10px"
nose.style.width = "0px"
nose.style.height = "0px";
nose.style.borderStyle = "solid"
nose.style.borderColor = "transparent";  
nose.style.borderBottomColor = "RGB(250, 142, 247)"
nose.style.position = "absolute"
nose.style.left = "46%"
nose.style.top = "28%"

//creates and styles singing mouth of cat
var mouth = document.getElementById("8");
mouth.style.width = "0px";
mouth.style.height = "0px";
mouth.style.borderWidth = "30px"
mouth.style.borderStyle = "solid"
mouth.style.borderColor = "RGB(0, 0, 0)"
mouth.style.borderRadius = "50%"
mouth.style.position = "absolute"
mouth.style.left = "45%"
mouth.style.top = "31%"

//creates and styles hat of the cat 
var hat = document.getElementById("7")
hat.style.borderBottom = "80px"
hat.style.borderLeft = "50px"
hat.style.borderRight = "50px"
hat.style.width = "0px"
hat.style.height = "0px";
hat.style.borderStyle = "solid"
hat.style.borderColor = "transparent";  
hat.style.borderBottomColor = "RGB(250, 0, 0)"
hat.style.position = "absolute"
hat.style.left = "44%"
hat.style.top = "10%"

//creates and styles pompom of the hat 
var pompom = document.getElementById("11");
pompom.style.width = "0px";
pompom.style.height = "0px";
pompom.style.borderWidth = "20px"
pompom.style.borderStyle = "solid"
pompom.style.borderColor = "RGB(255, 255, 255)"
pompom.style.borderRadius = "50%"
pompom.style.position = "absolute"
pompom.style.left = "45.5%"
pompom.style.top = "07%"

//creates and styles left inside of the cat ear 
var Linside = document.getElementById("13")
Linside.style.borderBottom = "30px"
Linside.style.borderLeft = "30px"
Linside.style.borderRight = "30px"
Linside.style.width = "0px"
Linside.style.height = "0px";
Linside.style.borderStyle = "solid"
Linside.style.borderColor = "transparent";  
Linside.style.borderBottomColor = "RGB(250, 142, 247)"
Linside.style.position = "absolute"
Linside.style.left = "41.65%"
Linside.style.top = "17%"

//creates and styles right inside of the cat ear 
var Rinside = document.getElementById("12")
Rinside.style.borderBottom = "30px"
Rinside.style.borderLeft = "30px"
Rinside.style.borderRight = "30px"
Rinside.style.width = "0px"
Rinside.style.height = "0px";
Rinside.style.borderStyle = "solid"
Rinside.style.borderColor = "transparent";  
Rinside.style.borderBottomColor = "RGB(250, 142, 247)"
Rinside.style.position = "absolute"
Rinside.style.left = "48%"
Rinside.style.top = "17%"

