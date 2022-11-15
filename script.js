let domhour = document.getElementById("hour");
let dommin = document.getElementById("minute");
let domsec = document.getElementById("second");
let ampm = document.getElementById("ampm");
const print = () => {
   let time = new Date();
   let minute = time.getMinutes();
   let seconds = time.getSeconds();
   let hour = time.getHours();
   if (hour > 12) {
      domhour.innerText = hour - 12;
      ampm.innerText = "PM";
   } else {
      domhour.innerText = hour;
      ampm.innerText = "AM";
   }
   dommin.innerText = minute;
   domsec.innerText = seconds;
   console.log("Printed");
};
setInterval(() => print(), 1000);
