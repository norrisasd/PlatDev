var x = 0;
var y = 0;
var text= document.getElementById("text");
var strText="Psychoanalysis!";
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
    var z = 1
    msg=prompt("Input Message:");
    div=document.getElementById("box");
    z=document.getElementById("zz");
    z.innerText="Reply Conversation with AI";
    m=msg;
    div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 7% 1%;border-radius:50px 20px; background-color:#121212;color:white;word-wrap:break-word;'>" + msg+ "</div>";
    if(m.toLowerCase() === "hello" || m.toLowerCase() === "hi"){
        div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "Good Day!, How are you doing ?"+ "</div>";
        y=1;
     }
     if(m.toLowerCase() === "sad" || m.toLowerCase() === "im sad" ){
         if(y===1){
            div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "I'm sorry to hear that, Interested in a little joke ?"+ "</div>";
            x = 1;
         }
        
     }
     //CONTINUE OF SAD
     if(m.toLowerCase() === "yes" || m.toLowerCase() === "okay"){
         if(x == 1){
        div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "Why shouldn't you write with a broken pencil?"+ "</div>";
        div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "Because it's pointless"+ "</div>";
        x = 2;
        }
     }
     if(m.toLowerCase() === "haha"|| m.toLowerCase() === "hahaha"){
         if(x==2){
            div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "Good to see you laughing!"+ "</div>";
            x=0;
         }
     }
     if(m.toLowerCase() === "im feeling down" || m.toLowerCase() === "down" || m.toLowerCase() === "feeling down"){
        if(y===1){
            div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "It's perfectly normal to feel that way, Don't worry time has a way of healing and you will be happy in no time !"+ "</div>";
        }
        
     }
     if(m.toLowerCase() === "im fine"|| m.toLowerCase() === "fine" ||m.toLowerCase() === "im good"|| m.toLowerCase() === "good"){
        if(y===1){
            div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "Okay, that's good to hear. I hope things are going well for you."+ "</div>";
        }
        
     }
     if(m.toLowerCase() === "im happy"|| m.toLowerCase() === "happy" ){
        if(y===1){
            div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "That's wonderful to hear! Keep feeling happy."+ "</div>";
        }
        
     }
     if(m.toLowerCase() === "thanks"|| m.toLowerCase() === "thank you" ){
        if(y===1){
            div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "My Pleasure!"+ "</div>";
        }
        
     }
     if(m.toLowerCase() === "bye"|| m.toLowerCase() === "good bye" ){
        if(y===1){
            div.innerHTML = div.innerHTML + "<div style='width:25%;text-align:justify;font-family:arial; padding:25px;margin:1% 65% 1%;border-radius:20px 50px; background-color:#3c89d0;color:white;word-wrap:break-word;'>" + "Good Bye! Have a Nice Day!"+ "</div>";
        }
        y=0;
        x=0;
        
     }
    updateScroll();
    
}

function boxClear(){
    // document.getElementById("box").value="";
    document.getElementById(elementID).innerHTML = "";
}

function updateScroll(){
    var element = document.getElementById("box");
    element.scrollTop = element.scrollHeight;
}