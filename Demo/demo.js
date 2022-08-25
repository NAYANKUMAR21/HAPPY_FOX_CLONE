let form_button = document.getElementById("form_submit");
form_button.addEventListener("click", () => {
  validateData();
});

function validateData() {
  let name = document.querySelector(".form_input").value;
  let email = document.querySelector(".form_input1").value;
  let phone = document.querySelector(".form_input2").value;
  let company = document.querySelector(".form_input3").value;
  let select1 = document.getElementById("company_size").value;
  let select2 = document.getElementById("industry_name").value;
  let select3 = document.getElementById("agentCount").value;
  let select4 = document.getElementById("clientRegion").value;
 
  if(name !== null && email !== null && phone !== null && company !== null && select1 != -1
    && select3 != -1 && select2 != -1 && select4 != -1){
        location.href="./slot.html";
  }else{
    document.querySelector(".form_input").style.border="1px solid red";
    document.querySelector(".form_input1").style.border="1px solid red";
    document.querySelector(".form_input2").style.border="1px solid red";
    document.querySelector(".form_input3").style.border="1px solid red";
    document.getElementById("company_size").style.border="1px solid red";
    document.getElementById("industry_name").style.border="1px solid red";
    document.getElementById("agentCount").style.border="1px solid red";
    document.getElementById("clientRegion").style.border="1px solid red";
  }
 
}
