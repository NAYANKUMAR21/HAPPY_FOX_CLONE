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
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      error.innerHTML = "Please enter a valid email";
      return false;
    }
    error.innerText = "";
    return alert("signup Sucessfull");
  };

  // let videoPlay=document.getElementById('playVideo');
  // videoPlay.onclick=(event)=>{
  //   playVideo();
  // }

//  let playVideo=()=>{
//   // videoPlay.innerHTML="";

//   //   let iframe=document.getElementById('iframe')
//   //   videoPlay.innerHTML=iframe;

    
//     // player.innerHTML= 
// console.log("play")
//   }



document.querySelector("#carousel-custom-dots")