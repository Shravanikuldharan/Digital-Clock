let time = document.getElementById("time");
let day = document.getElementById("day");
let midday = document.getElementById("midday");
let dateElement = document.getElementById("date"); // Add this line

let clock = setInterval(
    function calcTime(){
        let date_now = new Date();
        let hr = date_now.getHours();
        let min = date_now.getMinutes();
        let sec = date_now.getSeconds();
        let middayValue = "AM"
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
        let months = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

        day.textContent = days[date_now.getDay()];
        let dateString = months[date_now.getMonth()] + " " + date_now.getDate() + ", " + date_now.getFullYear();
        dateElement.textContent = dateString;

        middayValue = (hr >= 12) ? "PM" : "AM";

        if(hr == 0){
            hr = 12;
        }
        else if(hr > 12){
            hr -= 12;
        }

        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        time.textContent = hr + ":" + min + ":" + sec;
        midday.textContent = middayValue;
    }, 1000
);
