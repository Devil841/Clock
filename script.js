let domhour = document.getElementById("hour");
let dommin = document.getElementById("minute");
let domsec = document.getElementById("second");
let ampm = document.getElementById("ampm");

const print = () => {
   let time = new Date();
   let hour = time.getHours();
   let minute = time.getMinutes();
   let seconds = time.getSeconds();
   if (time.getHours() > 12) {
      domhour.innerText = hour - 12;
      ampm.innerText = "PM";
   } else {
      domhour.innerText = hours;
   }
   dommin.innerText = minute;
   domsec.innerText = seconds;
};
setInterval(() => print(), 1000);
