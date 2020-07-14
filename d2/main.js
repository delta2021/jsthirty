const hour = document.querySelector('#hour-hand');
const minute = document.querySelector('#minute-hand');
const second = document.querySelector('#second-hand');
const hands = document.querySelectorAll('.clock__hand');

function setTime(){
    const now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let sDegree;
    let mDegree;
    let hDegree;

    hands.forEach(hand => {
        hand.classList.add('hand--transition');
    })

    if (seconds === 0) second.classList.remove('hand--transition');
    if (minutes === 0) minute.classList.remove('hand--transition');
    if (hours === 0) hour.classList.remove('hand--transition');
    

    sDegree = (seconds / 60) * 360 - 90;
    mDegree = (minutes / 60) * 360 - 90;
    hDegree = (hours % 12 / 12) * 360 - 90;
   
    second.style.transform= `rotate(${sDegree}deg)`;
    minute.style.transform= `rotate(${mDegree}deg)`;
    hour.style.transform= `rotate(${hDegree}deg)`;
}


setInterval(setTime, 1000)

