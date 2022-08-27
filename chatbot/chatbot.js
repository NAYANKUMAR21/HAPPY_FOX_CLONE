let chatBot = document.querySelector("#chatbot_icon");
let messenger = document.getElementById("outer_box");
let messagebox = document.getElementById("inner_box");
let messageIcon = document.getElementById("message_icon");
let arrow = document.getElementById("downward_arrow");
let click = 0;
chatBot.addEventListener("click",(event)=>{
 
  if(click%2==0){
    messenger.style.display="block";
    arrow.style.display="block"
    messageIcon.style.display="none"
  }else{
    messenger.style.display="none";
    arrow.style.display="none"
    messageIcon.style.display="block"
  }    
 
  click++;
});
let bot_img = document.createElement("img");

function salesQue(){
  console.log("I have a sales ques");
}


