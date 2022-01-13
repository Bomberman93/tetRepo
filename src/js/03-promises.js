// function convertS(s) {
//   const hours = Math.floor(s / 60 / 60);
//   s = s - 60 * 60 * hours;
//   const minutes = Math.floor(s / 60);
//   s = s - 60 * minutes;
//   const secunds = s;
//   refs.hours.innerHTML = hours.toString().padStart(2, 0);
//   refs.minutes.innerHTML = minutes.toString().padStart(2, 0);
//   refs.secunds.innerHTML = secunds.toString().padStart(2, 0);
// };
// let secund = 0;
// let intervalId;

// const refs = {
//   hours: document.querySelector('#hours'),
//   minutes: document.querySelector('#minutes'),
//   secunds: document.querySelector('#secunds'),
//   targetTimer: document.querySelector('#target-timer'),
//   save: document.querySelector('#save'),
// };

// refs.save.addEventListener('click', e => {
//   imitatedServer('times').then(res => {
//     const times = res === null ? [] : res;
//     times.push(secund);
//     return times;
//   })
//   .then((times) => {
//     return imitatedServer('times', 'SET', times);
//   })
//   .catch(console.log);
// });

// refs.targetTimer.addEventListener('click', onTimerClick);

// function onTimerClick(e) {
//   if (e.target.textContent === 'Stop') {
//     clearInterval(intervalId);
//     e.target.textContent = 'Start';
//   } else {
//     intervalId = setInterval(() => {
//       secund += 1;
//       convertS(secund);
//     }, 1000);
//     e.target.textContent = 'Stop';
//   }
// };

// function printTimestamp(s) {
//   const hours = Math.floor(s / 60 / 60);
//   s = s - 60 * 60 * hours;
//   const minutes = Math.floor(s / 60);
//   s = s - 60 * minutes;
//   const secunds = s;
//   refs.timestamp.insertAdjacentHTML(
//     'beforeend',
//     `<li>${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${secunds
//       .toString()
//       .padStart(2, 0)}</li>`,
//   );
// };

// const imitatedServer = (key, type = 'GET', data = {}) => {
//   const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Math.random() > 0.2) {
//         if (type === 'GET') {
//           res(JSON.parse(localStorage.getItem(key)));
//         } else if (type === 'SET') {
//           localStorage.setItem(key, JSON.stringify(data));
//           res(true);
//         } else {
//           rej('invalid type');
//         }
//       } else rej('oops!!!');
//     }, getRandomInt(1000, 5000));
//   });
// };
/*------------------------------------------------------------*/


const menuList = document.querySelector('.menu__link');
const baseUrl = 'https://rickandmortyapi.com/api';


function getDataServer (url) {
  return fetch (url)
    .then(response => response.json());
}

getDataServer(baseUrl).then(data => {
  const markup = Object.entries(data).map(([key, value]) => 
  `<li><a href="${value}">${key}</a></li>`).join('');
  menuList.innerHTML = markup;
});

 