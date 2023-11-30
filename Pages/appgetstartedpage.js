const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const displayEl = document.querySelector('.display');

//set time
const updateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    
    
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2,'0');
    }
    setInterval(updateTime,1000);
    updateTime();