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


//   let option=document.getElementsByClassName('hometab-link')

//    let divItem=document.getElementsByClassName('hometab-content')
// //  console.log('divItem:', divItem)


//  for(let i=0;i<option.length;i++){
//   let ele=option[i];
//   ele.onclick=(event)=>{

//     let showData=divItem[i];
//     showSlide(showData)
//     // console.log('showData:', showData)   
//   }
//  }
 

//  function showSlide(i){
//   console.log(i);
   
//  }

 