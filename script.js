function displayTime(){
let monthnames =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
let hours = document.getElementById("hour");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");


let clock = new Date();

hours.innerHTML= (clock.getHours()<10?"0":"")+ clock.getHours();
minutes.innerHTML= (clock.getMinutes()<10?"0":"")+clock.getMinutes();
seconds.innerHTML= (clock.getSeconds()<10?"0":"")+clock.getSeconds();
document.getElementById("date").innerHTML= clock.getDate() + ' '+ monthnames[clock.getMonth()]+" "+ clock.getFullYear();

}
setInterval(displayTime,1000)