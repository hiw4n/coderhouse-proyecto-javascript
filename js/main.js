import productsJSON from '../data/products.js';
import { Message } from './connect/message.js';
import { LocalStorageCall } from './connect/Localstorage.js';
/* COMPONENTS */

import { HtmlCard } from './components/HtmlCard.js';
import { HtmlCardMini } from './components/HtmlCardMini.js';
import { HtmlSlider } from './components/HtmlSlider.js';
/* localStorage.setItem('miGato', 'Pepe'); */

/* VAR */
const BDLcStg = localStorage;
/* console.log('BDLcStg: ', BDLcStg); */

const nameBDApp = 'invited';
const BDLocal = Object.entries(BDLcStg);

let BD = [];
for (const [key, value] of BDLocal) {
  if (key == nameBDApp) {
    BD = value;
  } else {
    BD = [];
  }
}

/* CLASS */
const message = new Message();
const htmlCard = new HtmlCard();
const htmlCardMini = new HtmlCardMini();
const localStorageCall = new LocalStorageCall();

/* CARD */
// Insert JSCard
function createCard(data, idName) {
  let drawCard = document.getElementById(idName);
  data.forEach((e) => {
    drawCard.innerHTML += htmlCard.html(e);
  });
}
createCard(productsJSON, 'JSCard-elements');

// JSCardMini
/* Add Product to cart */
function createCardMini(data, idName) {
  let drawCard = document.getElementById(idName);
  drawCard.innerHTML += htmlCardMini.html(data);
}

function personToLocalStorage(data) {
  /* let DataAll = localStorageCall.getAll(productsJSON); */
}
/* function personFindCard(id, idName) { */
function personFindCard(id, idName) {
  let personsAll = document.querySelectorAll(idName);
  personsAll.forEach((e, i) => {
    if (e.dataset.id == id) {
      e.className += ' cardHidden';
    }
  });
}

function personAdd(id) {
  let data = productsJSON;
  let person = {};
  data.forEach((e) => {
    if (e.id == id) {
      person = e;
    }
  });
  createCardMini(person, 'JSCardMini-elements');
  personToLocalStorage(person);
  personFindCard(2, '.JSCard_content');
}
window.personAdd = personAdd; // because the fucntion of module is not call in external files.

/* function obtener(data, id) {
  console.log(
    'localStorageCall.getById(data, id);',
    localStorageCall.getById(data, id)
  );
  return localStorageCall.getById(data, id);
} */
