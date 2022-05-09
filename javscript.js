const date24 = document.querySelector(".date24");
const date12 = document.querySelector(".date12");
const hours24 = document.querySelector(".hours24");
const hours12 = document.querySelector(".hours12");

const timeIn12Hours = document.querySelector(".timeIn12Hours");
const timeIn24Hours = document.querySelector(".timeIn24Hours");


const setTimeOf24 = () => {
    let now = new Date();
    let sec = now.getSeconds()
    let min = now.getMinutes();
    let hours = now.getHours();
    let date = now.toDateString(); 
  
       const clock = `
       <div class="date12">
         ${date}
       </div>
       <div class="hours12">
          ${hours}  : ${min}  : ${sec} 
       </div>
       `
       timeIn24Hours.innerHTML = clock
}
setInterval(setTimeOf24, 50)      
const setTimeOf12 = () => {
  let now = new Date();
  let sec = now.getSeconds()
  let min = now.getMinutes();
  let hours = now.getHours();
  let date = now.toDateString(); 
  let pmam = "am";


  if(hours == 0){
    hours = "12";
    }

    if(hours > 12){
        hours = hours - 12;
        pmam = "pm"
    }
    if(min < 10) {
        min = `0${min}`
    }
    if(sec < 10 ){
         sec = `0${sec}`
    }

     const clock = `
     <div class="date12">
       ${date}
     </div>
     <div class="hours12">
       ${hours} : ${min}  : ${sec} ${pmam}
     </div>
     `
     timeIn12Hours.innerHTML = clock
}

setInterval(setTimeOf12, 50)
    