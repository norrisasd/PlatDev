var text= document.getElementById("text");
var strText="Paragraph!";
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
    c.style.backgroundColor="red";
}
function changeGreen(){
    var a =document.getElementById("dropbtn");
    a.innerText="Green";
    var c = document.getElementById("box");
     c.style.backgroundColor="green";
 }
 function changeDefault(){
    var a =document.getElementById("dropbtn");
    a.innerText="Default";
    var c = document.getElementById("box");
    var d =document.getElementById("txt");
     c.style.backgroundColor="rgba(38, 50, 56, 0.4)";
     d.style.color="white";
 }
 function changeYellow(){
    var a =document.getElementById("dropbtn");
    a.innerText="Yellow";
    var c = document.getElementById("box");
     c.style.backgroundColor="yellow";
 }
 function changeBlack(){
    var a =document.getElementById("dropbtn");
    a.innerText="Black";
    var c = document.getElementById("box");
     c.style.backgroundColor="Black";
 }
 function Other(){
    var color= prompt("What Color do you like?");
    var a =document.getElementById("dropbtn");
    a.innerText = color;
    var c = document.getElementById("box");
    var d =document.getElementById("txt");
    c.style.backgroundColor=color;
    var colorTxt=confirm("Do you want to Change the font?");
    if(colorTxt == true){
        color = prompt("What Color do you like?");
        d.style.color=color;
    }
    
 } 