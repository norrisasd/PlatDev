var text= document.getElementById("text");
var strText="The Paragraph!";
var splitText=strText.split("");

for(let i =0;i<splitText.length;i++){
    text.innerHTML+="<span>"+splitText[i]+"</span>";
}

let char =0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
}

function changeRed(){
    var a =document.getElementById("dropbtn");
    a.innerText="Red";
   var c = document.getElementById("box");
   var d =document.getElementById("txt");
    c.style.backgroundColor="red";
    d.style.color="white";
}
function changeGreen(){
    var a =document.getElementById("dropbtn");
    a.innerText="Green";
    var c = document.getElementById("box");
    var d =document.getElementById("txt");
     c.style.backgroundColor="green";
     d.style.color="white";
 }
 function changeDefault(){
    var a =document.getElementById("dropbtn");
    a.innerText="Default";
    var c = document.getElementById("box");
    var d =document.getElementById("txt");
     c.style.backgroundColor="rgba(38, 50, 56, 0.4)";
     d.style.color="white";
 }
 function changeWhite(){
    var a =document.getElementById("dropbtn");
    a.innerText="White";
    var c = document.getElementById("box");
    var d =document.getElementById("txt");
     c.style.backgroundColor="white";
     d.style.color="black";
 }
 function changeBlue(){
    var a =document.getElementById("dropbtn");
    a.innerText="Blue";
    var c = document.getElementById("box");
    var d =document.getElementById("txt");
     c.style.backgroundColor="skyblue";
     d.style.color="black";
 }
 function changeYellow(){
    var a =document.getElementById("dropbtn");
    a.innerText="Yellow";
    var c = document.getElementById("box");
    var d =document.getElementById("txt");
     c.style.backgroundColor="yellow";
     d.style.color="black";
 }
 function changeBlack(){
    var a =document.getElementById("dropbtn");
    a.innerText="Black";
    var c = document.getElementById("box");
    var d =document.getElementById("txt");
     c.style.backgroundColor="Black";
     d.style.color="White";
 }
 