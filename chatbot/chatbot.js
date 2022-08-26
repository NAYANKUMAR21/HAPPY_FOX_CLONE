let chatBot = document.querySelector("#chatbot_icon");
let messenger = document.getElementById("outer_box");

let click = 0;
chatBot.addEventListener("click",(event)=>{
  if(click%2==0){
    messenger.style.display="inline";
  }else{
    messenger.style.display="none";
  }    
  click++;
});