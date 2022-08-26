let data = new Date();
let thead = document.getElementById('table_head');
let tbody = document.getElementById('table_body');
let tr = document.createElement("tr");
let weekDys =["Sun","Mon","Tues","Wed","Thur","Fri","Sat"]
for(let i=1;i<=5;i++){
     let count=1;
     if(i==1){
        count=0
     }else{
        count=1;
     }    
    data.setDate(data.getDate()+count);
    let date = data.getDate();
    let month = data.getMonth();
    month=month+1
    let day =  data.getDay();
    let year = data.getFullYear();
    if(day != 0 && day !=6){
        let th = document.createElement("th");
        for(let j=0;j<7;j++){
            if(j==day){
                th.innerText= date+"/"+month+"/"+year+weekDys[j];
            }
            
        }
        
        tr.append(th);
    }
    if(day==0||day==1){
        i--;
    }
    
}


thead.append(tr);
let t = new Date();
let day = t.getDay();
let ghanta=9;
let count=9;
for(i=1;i<=12;i++){
    let tr1 = document.createElement("tr");
   for(let j=1;j<=5;j++){
    let hour = t.getHours();
     if(hour>12){
        hour=hour-12;
     }   
     console.log(hour);
      let td = document.createElement('td');
      if(count<12){
        time="AM";
      }else{
        time="PM";
      }
      if(j==1){
        td.style.textDecoration="line-through";
      }else{
        td.style.backgroundColor="rgb(47, 171, 238)"
        td.addEventListener("click",function(){
                    
           alert("are you sure to book a slot");
           
           td.style.textDecoration="line-through";
        })
      }
      td.innerText=ghanta+"."+"00"+" "+time;
      tr1.append(td);
   }
   ghanta++;
   if(ghanta>12){
    ghanta=1;
   }
   count++;
   tbody.append(tr1);
}

function bookSlot(){
    console.log("Ratikanta Mohnata");
}