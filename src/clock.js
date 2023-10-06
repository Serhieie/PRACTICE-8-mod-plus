const day = document.querySelector('.date-day');
const date = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const digitalClock = document.querySelector('.digital-clock');
const clockSecArrow = document.querySelector('.clock-seconds__arrow');
const clockMinArrow = document.querySelector('.clock-minutes__arrow');
const clockHoursArrow = document.querySelector('.clock-hours__arrow');
document.body.style.backgroundImage = 'src(/src/images/58330.webp)';

const namesOfMounth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жлвтень',
  'Листопад',
  'Грудень',
];
const namesOfWeak = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П`ятниця',
  'Субота',
];

setInterval(() => {
  const currentTime = new Date();
  const currentDay = namesOfWeak[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = namesOfMounth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const changeArrowSec = (360 / 60) * currentSeconds;
  const changeArrowMin = (360 / 60) * currentMinutes;
  const changeHours =
    (360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes;

  const formatingTime = `${currentHour
    .toString()
    .padStart(2, 0)}:${currentMinutes
    .toString()
    .padStart(2, 0)}:${currentSeconds.toString().padStart(2, '0')}`;

  if (currentHour >= 18) {
    document.body.style.backgroundImage =
      'url(./images/zvezdnoe_nebo_mlechnyj_put_zvezdy_118653_1920x1080.jpeg)';
  }
  if (currentHour === 4) {
    document.body.style.backgroundImage = 'url(/src/images/58330.webp)';
  }

  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonth;
  year.textContent = currentYear;
  digitalClock.textContent = formatingTime;

  clockSecArrow.style.transform = `rotate(${changeArrowSec}deg)`;
  clockMinArrow.style.transform = `rotate(${changeArrowMin}deg)`;
  clockHoursArrow.style.transform = `rotate(${changeHours}deg)`;
}, 1000);
