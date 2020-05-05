const secondHand = document.querySelector('.second-hand'),
      minHand = document.querySelector('.min-hand'),
      hourHand = document.querySelector('.hour-hand'),
      digitalClock = document.querySelector('.digital-clock');

const clickHour = () => {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegree = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = ((min / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  digitalHour = hour < 10 ? '0' + hour.toString() : hour;
  digitalMin = min < 10 ? '0' + min.toString() : min;
  digitalSecond = second < 10 ? '0' + second.toString() : second;
  digitalClock.innerHTML = `<h1>${digitalHour}:${digitalMin}:${digitalSecond}</h1>`;
}

setInterval(clickHour, 1000)
