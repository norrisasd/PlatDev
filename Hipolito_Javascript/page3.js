var text= document.getElementById("text");
var strText="Age Counter!";
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
function clicked(){
    var a=document.getElementById("Name");
    var b=document.getElementById("year");
    var c = parseInt(b.value, 10);
    var d= 2020 - c

    alert("Hi "+a.value +" Your Age is "+d);
}