let signupBtn = document.getElementById("prefooterButton");
  signupBtn.onclick = (event) => {
    signup();
  };

  let signup = () => {
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");
    if (email === "") {
      return false;
    }
    if (!email.match(/^([\w-+.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)((\w+-?)+\w+\.)+[a-z]{2,})?$/)) {
      error.innerHTML = "Please enter a valid email";
      return false;
    }
    error.innerText = "";
    return alert("signup Sucessfull");
  };

 

  
