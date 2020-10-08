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
//AGEEEEEEEE
function clicked(){
    var name=prompt("What is your Name?");
    var year=prompt("What is your Year of Birth?");
    var d= 2020 - year
    document.getElementById("Name").innerText=name;
    document.getElementById("year").innerText=year;
    document.getElementById("age").innerText=d;
    document.getElementById("click").innerText="Calculate Again";
    alert("Hi "+a.value +" Your Age is "+d);
}