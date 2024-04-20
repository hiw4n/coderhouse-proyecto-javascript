import productsJSON from '../data/productsOBJ.js';

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
  /* setTimeout(() => {
    
    drawCard.classList.removed('cardHidden');
  }, 500); */
}
function deletedCardMini(id, idName) {
  let data = document.getElementById(idName);
  let person = data.querySelectorAll('.JSCardMini_content');
  person.forEach((e) => {
    if (e.dataset.id == id) {
      e.classList.add('cardHidden');
      setTimeout(() => {
        e.remove('cardHidden');
      }, 500);
    }
  });
  /* let drawCard = document.getElementById(idName); */
}
function personToLocalStorage(data) {
  /* let DataAll = localStorageCall.getAll(productsJSON); */
}
function addDeletedClassHidden(id, idName, deleted = false) {
  let personsAll = document.querySelectorAll(idName);
  personsAll.forEach((e, i) => {
    if (e.dataset.id == id) {
      if (deleted == true) {
        e.classList.remove('cardHidden');
      } else {
        e.classList.add('cardHidden');
      }
    }
  });
}
function personDeleted(id, idName) {
  addDeletedClassHidden(id, idName, true);
  deletedCardMini(id, 'JSCardMini-elements');
}
window.personDeleted = personDeleted; // because the fucntion of module is not call in external files.

function personAdd(id, idName) {
  let data = productsJSON;
  let person = {};
  data.forEach((e) => {
    if (e.id == id) {
      person = e;
    }
  });
  createCardMini(person, 'JSCardMini-elements');
  personToLocalStorage(person);
  addDeletedClassHidden(id, idName, false);
}
window.personAdd = personAdd; // because the fucntion of module is not call in external files.

/* function obtener(data, id) {
  console.log(
    'localStorageCall.getById(data, id);',
    localStorageCall.getById(data, id)
  );
  return localStorageCall.getById(data, id);
} */
