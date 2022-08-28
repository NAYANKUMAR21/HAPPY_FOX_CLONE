let data = new Date();

let thead = document.getElementById("table_head");
let tbody = document.getElementById("table_body");
let tr = document.createElement("tr");

let weekDys = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
for (let i = 1; i <= 7; i++) {
  let count = 1;
  if (i == 1) {
    count = 0;
  } else {
    count = 1;
  }
  data.setDate(data.getDate() + count);
  let date = data.getDate();
  let month = data.getMonth();
  month = month + 1;
  let day = data.getDay();
  let year = data.getFullYear();
  if (day != 0 && day != 6) {
    let th = document.createElement("th");
    for (let j = 0; j < 7; j++) {
      if (j == day) {
        th.innerText = date + "/" + month + "/" + year + weekDys[j];
      }
    }
    tr.append(th);
  }
}
thead.append(tr);
let t = new Date();
let day = t.getDay();
let ghanta = 9;
let count = 9;
let trueMatrix = [];
let matrix = [];
for (let i = 1; i <= 12; i++) {
  let arr = [];
  let boolArr = [];
  for (let j = 1; j <= 5; j++) {
    let hour = t.getHours();
    if (hour > 12) {
      hour = hour - 12;
    }
    if (count < 12) {
      time = "AM";
    } else {
      time = "PM";
    }
    if (j == 1) {
      boolArr.push(true);
    } else {
      boolArr.push(false);
    }
    arr.push(ghanta + "." + "00" + " " + time);
  }
  trueMatrix.push(boolArr);
  matrix.push(arr);
  ghanta++;
  if (ghanta > 12) {
    ghanta = 1;
  }
  count++;
}
let container = document.getElementById("slot_book_info");
let userData = JSON.parse(localStorage.getItem("userdata"));
let tableData = document.getElementById("table_data");
let nam = userData.name;
let emai = userData.email;
function bookSlot(Matrix, i, j) {
  tableData.style.display = "none";
  let h5 = document.createElement("h5");
  let span = document.createElement("span");
  span.innerText = "Your Name: " + "   " + nam;
  h5.append(span);
  let em = document.createElement("h5");
  let spa = document.createElement("span");
  spa.innerText = "Your Email: " + "   " + emai;
  em.append(spa);
  let confirmbtn = document.createElement("button");
  confirmbtn.innerText = "CONFIRM BOOKING";
  confirmbtn.setAttribute("class", "slot_button");
  confirmbtn.addEventListener("click", function () {
    Matrix[i][j] = true;
    localStorage.setItem("values", JSON.stringify(Matrix));
    location.href = "./confirmSlot.html";
  });
  let cancelbtn = document.createElement("button");
  cancelbtn.innerText = "CANCEL";
  cancelbtn.setAttribute("class", "slot_button");
  cancelbtn.addEventListener("click", function () {
    location.reload();
  });
  container.append(h5, em, confirmbtn, cancelbtn);
}

let boolMatrix = JSON.parse(localStorage.getItem("values")) || trueMatrix;

for (let i = 0; i < matrix.length; i++) {
  let arr = matrix[i];
  let tr1 = document.createElement("tr");
  for (let j = 0; j < arr.length; j++) {
    let td = document.createElement("td");
    if (boolMatrix[i][j] == true) {
      td.style.textDecoration = "line-through";
    } else {
      td.style.backgroundColor = "rgb(47, 171, 238)";
      td.addEventListener("click", function () {
        bookSlot(boolMatrix, i, j);
      });
    }
    td.innerText = matrix[i][j];
    tr1.append(td);
  }
  tbody.append(tr1);
}
