
var a =document.getElementById("text");
var b = a;

var x = "Welcome";
var y = "TO MY";
var z = "Very Special Page";
var splitx=x.split("");
var splity=y.split("");
var splitz=z.split("");
for(let i=0;i<splitx.length;i++){
    a.innerHTML+= "<span>" + splitx[i]+"</span>";
}
a.innerHTML+="<br>";
for(let i =0;i<splity.length;i++){
    a.innerHTML+="<span style='margin-top:100px;margin-bottom: 0px;font-family:arial;font-size:50px;font-weight:900;letter-spacing: 4px;'>"+splity[i]+"</span>";
}
a.innerHTML+="<br><br>";
for(let i =0 ;i<splitz.length;i++){
    a.innerHTML+="<span>"+splitz[i]+"</span>";
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