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
async function findPerson(id) {
  let data = await productsJSON;
  let person = {};
  data.forEach((e) => {
    if (e.id == id) {
      person = e;
    }
  });
  return person;
}

/* ONLICK -------------------------------------- STAR --*/
async function personDeleted(id, idName) {
  let person = await findPerson(id, idName);
  addDeletedClassHidden(id, idName, true);
  deletedCardMini(id, 'JSCardMini-elements');
  deletedPerson(person, nameBDApp, localStorage);
}
window.personDeleted = personDeleted; // because the fucntion of module is not call in external files.

async function personAdd(id, idName) {
  let person = await findPerson(id, idName);
  createCardMini(person, 'JSCardMini-elements');
  personToLocalStorage(person);
  addDeletedClassHidden(id, idName, false);
  pushPerson(person, nameBDApp, localStorage);
}
window.personAdd = personAdd; // because the fucntion of module is not call in external files.
/* ONLICK -------------------------------------- END --*/

/* LOCALSTORAGE -------------------------------------- STAR --*/
function iniShowCard(cartName, cart) {
  if (cart) {
    cart = JSON.parse(cart.getItem(cartName));
    cart.forEach((e) => {
      console.log('e', e);
      createCardMini(e, 'JSCardMini-elements');
    });
  }
}
iniShowCard(nameBDApp, localStorage);

function pushPerson(data, cartName, cart) {
  let dataNew = [];
  let dataOld = JSON.parse(cart.getItem(cartName));
  let same = false;

  if (!dataOld) dataOld = [];

  dataOld.forEach((e) => {
    if (e.id == data.id) {
      same = true;
    }
  });

  if (!same) {
    dataNew = [...dataOld];
    dataNew.push(data);
    cart.setItem(cartName, JSON.stringify(dataNew));
  }
}

function deletedPerson(data, cartName, cart) {
  let dataNew = [];
  let dataOld = JSON.parse(cart.getItem(cartName));

  dataOld.forEach((e) => {
    if (e.id !== data.id) {
      dataNew.push(e);
    }
  });

  cart.setItem(cartName, JSON.stringify(dataNew));
}
/* LOCALSTORAGE -------------------------------------- END --*/
