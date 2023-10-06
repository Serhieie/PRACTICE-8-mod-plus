import { random } from 'lodash';
import Notiflix from 'notiflix';

const start = document.querySelector('.js-start');
const container = document.querySelector('.js-container');

// const combinaton = [];
// const winnerCombo = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// start.addEventListener('click', onStart);

// function onStart() {
//   let isActive;
//   const result = [];
//   [...container.children].forEach(box => {
//     box.textContent = '';
//   });
//   [...container.children].forEach((box, i) => {
//     createPromise(i)
//       .then(smile => {
//         box.textContent = smile;
//         result.push('1');
//       })
//       .catch(smile => (box.textContent = smile))
//       .finally(() => {
//         setTimeout(() => {
//           combinaton.push(i);
//           console.log(i);
//           console.log(combinaton);
//           if (i === container.children.length - 1) {
//             if (!result.length || result.length === 3) {
//               Notiflix.Notify.success('Winner!');
//               if (
//                 container.children[0].textContent ===
//                   container.children[1].textContent &&
//                 container.children[1].textContent ===
//                   container.children[2].textContent
//               ) {
//                 Notiflix.Notify.success('SUPER STRICK');
//               }
//             } else {
//               Notiflix.Notify.failure('Lost money');
//             }
//           }
//         });
//       });
//   });
// }

// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();
//       const first = Math.floor(Math.random() * 4);
//       const WinnerCombo = ['🤑', '🤘', '⭐️', '🥳'];
//       const LoseCombo = ['👾', '👻', '😈', '☠️'];
//       if (random > 0.5) {
//         res(`${WinnerCombo[first]}`);
//       } else {
//         rej(`${LoseCombo[first]}`);
//       }
//     }, 700 * delay);
//   });
// }

start.addEventListener('click', onStart);

function onStart() {
  let counter = 0;
  [...container.children].forEach(box => {
    box.textContent = '';
  });
  const promises = [...container.children].map((_, i) => createPromise(i));
  Promise.allSettled(promises).then(items => {
    items.forEach((item, i) => {
      setTimeout(() => {
        if (item.status === 'fulfilled') {
          counter += 1;
        }
        container.children[i].textContent = item.value || item.reason;
        if (container.children.length - 1 === i) {
          if (counter === container.children.length || !counter) {
            Notiflix.Notify.success('Winner!');
          } else {
            Notiflix.Notify.failure('Lost money');
          }
        }
      }, i * 600);
    });
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();
    const first = Math.floor(Math.random() * 4);
    const WinnerCombo = ['🤑', '🤘', '⭐️', '🥳'];
    const LoseCombo = ['👾', '👻', '😈', '☠️'];
    if (random > 0.5) {
      res(`${WinnerCombo[first]}`);
    } else {
      rej(`${LoseCombo[first]}`);
    }
  });
}

let raceCount = 0;
const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
  startBtn: document.querySelector('.js-race-btn'),
  winner: document.querySelector('.winner'),
  progress: document.querySelector('.progress'),
  tableBody: document.querySelector('.js-result-table > tbody'),
};

refs.startBtn.addEventListener('click', () => {
  const promises = horses.map(race);
  raceCount += 1;

  updateWinnerField(``);
  updateProgressField(` 🤘 Заїзд розпочався, ставки не приймаються`);
  determineWinner(promises);
  endOfRace(promises);
});

function race(horse) {
  const time = getRandomTime(2000, 3500);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ horse, time });
    }, time);
  });
}

function determineWinner(horses) {
  Promise.race(horses).then(({ horse, time }) => {
    updateWinnerField(`⭐️ Першим прийшов ${horse}, фінішував за ${time} часу`);
    updateResultTable({ horse, time, raceCount });
  });
}

function endOfRace(horses) {
  Promise.all(horses).then(x => {
    updateProgressField(`🫡 Заїзд закінчився, ставки приймаються`);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateWinnerField(text) {
  refs.winner.textContent = `${text}`;
}
function updateProgressField(text) {
  refs.progress.textContent = `${text}`;
}

function updateResultTable({ horse, time, raceCount }) {
  const tr = `<tr><td>${raceCount}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}
