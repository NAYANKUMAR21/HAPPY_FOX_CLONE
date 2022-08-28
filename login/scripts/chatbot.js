let login = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  if (email == "") {
    alert("Please enter your email");
  } else if (password == "") {
    alert("Please enter password");
  } else if (email != "" && password != "") {
    alert("Logged in successfully!");
    window.location.href = "../index/index.html";
  }
};
