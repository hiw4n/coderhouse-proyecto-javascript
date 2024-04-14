import productsJSON from '../data/products.js';
import { Message } from './connect/message.js';
const message = new Message();
import { HtmlCard } from './html/HtmlCard.js';
import { HtmlCardMini } from './html/HtmlCardMini.js';
import { HtmlSlider } from './html/HtmlSlider.js';
import { LocalStorageCall } from './connect/Localstorage.js';
const localStg = new LocalStorageCall();

console.log('hola');
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
localStorage.setItem('miGato', 'Pepe');
/* localStorage.removeItem('miGato');
console.log('localStorage real', localStorage); */

const All = localStg.getAll('invitados');
console.log('All', All);

localStg.deleteAllBy('miGato');
