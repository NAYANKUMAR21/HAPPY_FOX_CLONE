let chatBot = document.querySelector("#chatbot_icon");
let messenger = document.getElementById("outer_box");
let messagebox = document.getElementById("inner_box");
let messageIcon = document.getElementById("message_icon");
let arrow = document.getElementById("downward_arrow");
let click = 0;
chatBot.addEventListener("click", (event) => {
  if (click % 2 == 0) {
    messenger.style.display = "block";
    arrow.style.display = "block";
    messageIcon.style.display = "none";
  } else {
    messenger.style.display = "none";
    arrow.style.display = "none";
    messageIcon.style.display = "block";
  }

  click++;
});
let id;
let id1;
let salesque = document.querySelector(".sales");
let msg1 = document.querySelector(".second_message");
let opt1 = document.querySelector(".ask_que1");
function salesQue() {
  salesque.style.display = "block";
  displayMsg1();
  displayopt1();
}

const displayMsg1 = () => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    msg1.style.display = "block";
    msg1.style.display = "flex";
  }, 1000);
};
const displayopt1 = () => {
  if (id1) {
    clearTimeout(id1);
  }
  id1 = setTimeout(function () {
    opt1.style.display = "block";
    opt1.style.display = "grid";
  }, 1500);
};
let id2;
let id3;
let helpDesk = document.querySelector(".helpdesk");
let msg2 = document.querySelector(".third_message");
let form1 = document.getElementById("chat_form");
function helpdesk() {
  helpDesk.style.display = "block";
  displayMsg2();
  displayform1();
}

const displayMsg2 = () => {
  if (id2) {
    clearTimeout(id2);
  }
  id2 = setTimeout(function () {
    msg2.style.display = "block";
    msg2.style.display = "flex";
  }, 1000);
};
const displayform1 = () => {
  if (id3) {
    clearTimeout(id3);
  }
  id3 = setTimeout(function () {
    form1.style.display = "block";
  }, 1500);
};
let msg3 = document.querySelector(".fourth_message");
let form2 = document.getElementById("que_form");
let id4;
let id5;
function form1Submit() {
  displayMsg3();
  displayform2();
}

const displayMsg3 = () => {
  if (id4) {
    clearTimeout(id4);
  }
  id4 = setTimeout(function () {
    msg3.style.display = "block";
    msg3.style.display = "flex";
  }, 800);
};

const displayform2 = () => {
  if (id5) {
    clearTimeout(id5);
  }
  id5 = setTimeout(function () {
    form2.style.display = "block";
  }, 1500);
};

let id6;
let id7;
let msg4 = document.querySelector(".fifth_message");
let opt2 = document.querySelector(".ask_que2");
function questSubmit() {
  displayMsg4();
  displayopt2();
}

const displayMsg4 = () => {
  if (id6) {
    clearTimeout(id6);
  }
  id6 = setTimeout(function () {
    msg4.style.display = "block";
    msg4.style.display = "flex";
  }, 800);
};

const displayopt2 = () => {
  if (id7) {
    clearTimeout(id7);
  }
  id7 = setTimeout(function () {
    opt2.style.display = "block";
    opt2.style.display = "grid";
  }, 1500);
};
let id8;
let id9;
let id10;
let categ = document.querySelector(".categ");
let msg5 = document.querySelector(".sixth_message");
let msg6 = document.querySelector(".seventh_message");
let opt3 = document.querySelector(".ask_que3");
function categories() {
  categ.style.display = "block";
  displayMsg5();
  displayMsg6();
  displayopt3();
}
const displayMsg5 = () => {
  if (id8) {
    clearTimeout(id8);
  }
  id8 = setTimeout(function () {
    msg5.style.display = "block";
    msg5.style.display = "flex";
  }, 1000);
};
const displayMsg6 = () => {
  if (id9) {
    clearTimeout(id9);
  }
  id9 = setTimeout(function () {
    msg6.style.display = "block";
    msg6.style.display = "flex";
  }, 2000);
};
const displayopt3 = () => {
  if (id10) {
    clearTimeout(id10);
  }
  id10 = setTimeout(function () {
    opt3.style.display = "block";
    opt3.style.display = "grid";
  }, 2500);
};
let lastmsg = document.getElementById("conversation_end");
function helpful() {
  lastmsg.style.display = "block";
}
function nothelpful() {
  lastmsg.style.display = "block";
}
