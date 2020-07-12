const hour = document.querySelector('#hour-hand');
const minute = document.querySelector('#minute-hand');
const second = document.querySelector('#second-hand');

let s = 0;
let m = 0;
let h = 0;

const initialTime = 3 * 3600 + 15 * 60 + 15;  
const currentTime = new Date();
const currentSeconds = currentTime.getSeconds() + currentTime.getHours() % 12 * 3600 + currentTime.getMinutes()*60;

h = (currentSeconds - initialTime) * 0.008;
m = (currentSeconds - initialTime) * 0.1;
s = (currentSeconds - initialTime) * 6;

hour.style.transform = `rotate(${h}deg)`;
second.style.transform = `rotate(${s}deg)`;
minute.style.transform = `rotate(${m}deg)`;

setInterval(() => {
    s += 6;
    m = (Number(m) + 0.1).toFixed(2) ; 
    h = (Number(h) + 0.008).toFixed(3);
    second.style.transform = `rotate(${s}deg)`
    minute.style.transform = `rotate(${m}deg)`
    hour.style.transform = `rotate(${h}deg)`
}, 1000)

