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

/* CLASS */
const message = new Message();
const htmlCard = new HtmlCard();
const htmlCardMini = new HtmlCardMini();
const localStgCall = new LocalStorageCall();

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
/* function createCardMini(data, idName) {
  let drawCard = document.getElementById(idName);
  data.forEach((e) => {
    drawCard.innerHTML += htmlCardMini.html(e);
  });
}
createCardMini(productsJSON, 'JSCardMini-elements'); */

/* Add Product to cart */
function personAdd() {
  /* console.log('id', id); */
  console.log('hola');

  /*   let value = localStgCall.getById(data, id);
  drawCard.innerHTML += htmlCardMini.html(value); */
}
