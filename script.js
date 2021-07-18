const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const clock1 = document.getElementById('clock1');
const clock2 = document.getElementById('clock2');
const clock3 = document.getElementById('clock3');
const clock4 = document.getElementById('clock4');
const clock5 = document.getElementById('clock5');
const clock6 = document.getElementById('clock6');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    clock2.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    clock3.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    clock4.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    clock5.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    clock6.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    clock2.querySelector('.min-hand').style.transform = `rotate(${minsDegrees}deg)`;
    clock3.querySelector('.min-hand').style.transform = `rotate(${minsDegrees}deg)`;
    clock4.querySelector('.min-hand').style.transform = `rotate(${minsDegrees}deg)`;
    clock5.querySelector('.min-hand').style.transform = `rotate(${minsDegrees}deg)`;
    clock6.querySelector('.min-hand').style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    clock2.querySelector('.hour-hand').style.transform = `rotate(${(((hour + 5) / 12) * 360) + ((mins / 60) * 30) + 90}deg)`;
    clock3.querySelector('.hour-hand').style.transform = `rotate(${(((hour - 7) / 12) * 360) + ((mins / 60) * 30) + 90}deg)`;
    clock4.querySelector('.hour-hand').style.transform = `rotate(${(((hour + 6) / 12) * 360) + ((mins / 60) * 30) + 90}deg)`;
    clock5.querySelector('.hour-hand').style.transform = `rotate(${(((hour - 1) / 12) * 360) + ((mins / 60) * 30) + 90}deg)`;
    clock6.querySelector('.hour-hand').style.transform = `rotate(${(((hour - 2) / 12) * 360) + ((mins / 60) * 30) + 90}deg)`;

}

setInterval(setDate, 1000);

setDate();