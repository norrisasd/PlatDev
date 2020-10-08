var x =0;
var next=document.getElementById("right");
var prev=document.getElementById("left");
var pic=document.getElementById("pic");

next.addEventListener('click',()=>{
    
x++;
if(x > 2){
    x=0;
}
if(x == 0){
    pic.style.animation="transitionIn 0.4s";
    pic.src="Images/logo.png";
    pic.style.animation="none";
}else if(x == 1){
    pic.style.animation="transitionIn 0.4s";
    pic.src="Images/panda1.png";
    pic.style.animation="none";
    
}else if(x == 2){
    pic.style.animation="transitionIn 0.5s";
    pic.src="Images/panda2.png";
    }
});
prev.addEventListener('click',()=>{
x--;

if(x < 0){
    x=2;
}
if(x == 0){
    pic.style.animation="transitionIn 0.4s";
    pic.src="Images/logo.png";
    pic.style.animation="none";
}else if(x == 1){
    pic.style.animation="transitionIn 0.4s";
    pic.src="Images/panda1.png";
    
}else if(x == 2){
    pic.style.animation="transitionIn 0.5s";
    pic.src="Images/panda2.png";
    }
});