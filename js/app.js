



date=new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("date-time").innerHTML = month + "/" + day + "/" + year;
    
var day = date.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
document.getElementById("tDay").innerHTML = daylist[day];

