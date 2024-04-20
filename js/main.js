/* import productsJSON from '../data/productsOBJ.js'; */
import fetchData from './connect/fetchData.js';
import { Message } from './connect/message.js';
import { LocalStorageCall } from './connect/Localstorage.js';
/* COMPONENTS */

import { HtmlCard } from './components/HtmlCard.js';
import { HtmlCardMini } from './components/HtmlCardMini.js';
import { HtmlSlider } from './components/HtmlSlider.js';

/* localStorage.setItem('miGato', 'Pepe'); */

/* CLASS */
const message = new Message();
const htmlCard = new HtmlCard();
const htmlCardMini = new HtmlCardMini();
const localStorageCall = new LocalStorageCall();
/* VAR */
const nameBDApp = 'party';
const userBDApp = 'user';

/* API CALL ------------------------------------------ STAR */
const urlApi = '../data/products.json';
const productsJSON = fetchData(urlApi).then((result) => {
  return result;
});
/* API  CALL ------------------------------------------ END */

/* LOCAL STORAGE  ---------------------------- STAR */
/* const BDStg = localStorageCall.getAll(nameBDApp); */

/* LOCAL STORAGE  ---------------------------- END */

/* CARD */
// Insert JSCard
async function createCard(data, idName) {
  let drawCard = document.getElementById(idName);
  let dataJson = await data;
  dataJson.forEach((e) => {
    drawCard.innerHTML += htmlCard.html(e);
  });
}
createCard(productsJSON, 'JSCard-elements');

// JSCardMini
/* Add Product to cart */
function starCardMini(cartName) {
  let data = JSON.parse(cart.getItem(cartName));
}
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

async function personAdd(id, idName) {
  let data = await productsJSON;
  let person = {};
  data.forEach((e) => {
    if (e.id == id) {
      person = e;
      /* console.log('person: ', person); */
    }
  });
  createCardMini(person, 'JSCardMini-elements');
  personToLocalStorage(person);
  addDeletedClassHidden(id, idName, false);
  PushPerson(person, nameBDApp, localStorage);
}
window.personAdd = personAdd; // because the fucntion of module is not call in external files.

function PushPerson(data, cartName, cart) {
  let dataNew = [];
  let dataOld = JSON.parse(cart.getItem(cartName));
  if (!dataOld) {
    dataOld = [];
  } else {
    dataOld.forEach((e) => {
      if (e.id !== data.id) {
        dataNew = [...dataOld];
        dataNew.push(data);
        cart.setItem(cartName, JSON.stringify(dataNew));
      }
    });
  }
}

/* function obtener(data, id) {
  console.log(
    'localStorageCall.getById(data, id);',
    localStorageCall.getById(data, id)
  );
  return localStorageCall.getById(data, id);
} */
