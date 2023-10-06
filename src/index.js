import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { instruments } from './helper/products';
import { findProduct } from './helper/findProduct';
import { common } from './common';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';
import {
  onClick,
  favoriteArr,
  basketArr,
  basket,
  favorites,
} from './helper/onClick';
import throttle from 'lodash/throttle';

const throttleOnSerach = throttle(onSearch, 600);

const container = document.querySelector('.js-list');
const search = document.querySelector('.js-search');
const favoriteBtn = document.querySelector('.js-favorite');
const basketBtn = document.querySelector('.js-basket');
const deleteFavBtn = document.querySelector('.js-delete-fav');

createMarkup(instruments, container, false, false);
container.addEventListener('click', function (evt) {
  onClick(evt, false, false);
});

container.addEventListener('input', throttleOnSerach);

function onSearch(evt) {
  const valueToLower = evt.target.value.toLowerCase();
  const instrument = instruments
    .filter(instrument => instrument.name.toLowerCase() === valueToLower)
    .join('');
  console.log(valueToLower);
  if (instrument) {
  }
}

//Таймер//Таймер//Таймер//Таймер//Таймер//Таймер//Таймер//Таймер

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockFace: document.querySelector('.js-clockface'),
};

// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getTimeComponents(deltaTime);
//       updClock(time);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init = onTick;
  }

  resetTime() {
    const time = this.getTimeComponents(0);
    this.onTick(0);
  }

  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
      console.log(Date.now());
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60 * 60))
    );
    const mins = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60))
    );
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, 0);
  }
}

const timer = new Timer({
  onTick: updClock,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updClock({ hours, mins, secs }) {
  refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

// const date = new Date();
// const currentDate = Date.now();

// console.log('Date', date);
// console.log('currentDate ', currentDate);

const box = document.querySelector('.js-box');
const spanTimer = document.querySelector('.js-timer');
let counter = 11;
setTimeout(() => {
  box.style.display = 'block';
  box.style.position = 'fixed';
  const id = setInterval(() => {
    console.log(id);
    counter -= 1;
    spanTimer.textContent = counter;
    if (!counter) {
      clearInterval(id);
      box.style.display = 'none';
    }
  }, 1000);
}, 5000);
