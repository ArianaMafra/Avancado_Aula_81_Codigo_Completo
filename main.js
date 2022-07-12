canvas = document.getElementById("myCanvas");
desenhando = canvas.getContext("2d");
color="red";

desenhando.beginPath();
desenhando.strokeStyle = color;
desenhando.lineWidth = 2;
desenhando.arc(200,200,40,0,2*Math.PI);
desenhando.stroke();

canvas.addEventListener("mousedown",myMouseDown);

function myMouseDown(e){

    color = document.getElementById("color").value;
    console.log(color);

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    console.log("X = "+ mouseX +",Y = " + mouseY);
    circle(mouseX,mouseY);
}

function circle(mouseX,mouseY){
    desenhando.beginPath();
    desenhando.strokeStyle = color;
    desenhando.lineWidth = 2;
    desenhando.arc(mouseX,mouseY,40,0,2*Math.PI);
    desenhando.stroke();
}

function limparArea(){
    desenhando.clearRect(0,0,canvas.width,canvas.height);
}



