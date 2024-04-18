import productsJSON from '../data/products.js';

import { Message } from './connect/message.js';
import { HtmlCard } from './html/HtmlCard.js';
import { HtmlCardMini } from './html/HtmlCardMini.js';
import { HtmlSlider } from './html/HtmlSlider.js';
import { LocalStorageCall } from './connect/Localstorage.js';
/* localStorage.setItem('miGato', 'Pepe'); */

/* VAR */
const BDLcStg = localStorage;
const nameBDApp = 'invitados';
const BDLocal = Object.entries(BDLcStg);
let BD = [];

for (const [key, value] of BDLocal) {
  if (key == nameBDApp) {
    BD = value;
  } else {
    BD = [];
  }
}
/* console.log('BD: ', BD); */

/* CLASS */
const message = new Message();
const htmlCard = new HtmlCard();
const localStg = new LocalStorageCall();

/* console.log('hola'); */

/* CREATE CARD */
/* htmlCard.html(productsJSON); */
function createCard(data, idName) {
  let drawCard = document.getElementById(idName);
  data.forEach((e) => {
    drawCard.innerHTML += htmlCard.html(e);
  });
}
createCard(productsJSON, 'JSCard-elements');

/* console.log('.entries(lcSg) ', Object.entries(lcSg)); */

/* arrParty.forEach((e) => {
  if (e[0] == arrApp) console.log('e', e);
}); */

/* console.log('json', json); */
/* console.log('LocalStorageCall', LocalStorageCall); */
/* LocalStorageCall.hola(); */
/* console.log('localStg', localStg); */
/* const localStorageAll = localStg.getAll(); */
/* console.log('localStorageAll: ', localStorageAll); */
/* console.log('localStorageAll.invitados', localStorageAll.invitados); */
/* localStorageAll.forEach((element) => {
  console.log('hola2');

  console.log('element', element);
}); */

/* localStorage.removeItem('miGato');
console.log('localStorage real', localStorage); */

/* const All = localStg.getAll('invitados');
console.log('All', All);

localStg.deleteAllBy('miGato'); */
