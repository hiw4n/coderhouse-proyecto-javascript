/* import HTML from './html.js'; */
/* import './products.js';
console.log('productJson: ', productJson); */
/* products */
/* const productList = productJson;
console.log('productList: ', productList); */

/* VARS */
let cart = [];
const productJson = [
  {
    name: 'Jane Vazquez',
    id: 1,
    img: 'avatar-1.jpg',
    text: 'adipiscing, enim mi tempor lorem, eget mollis lectus pede et',
  },
  {
    name: 'Shelby Flynn',
    id: 2,
    img: 'avatar-2.jpg',
    text: 'pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac,',
  },
  {
    name: 'Ayanna Durham',
    id: 3,
    img: 'avatar-3.jpg',
    text: 'convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc',
  },
  {
    name: 'Arsenio Strickland',
    id: 4,
    img: 'avatar-4.jpg',
    text: 'sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna.',
  },
  {
    name: 'Wynter Bray',
    id: 5,
    img: 'avatar-5.jpg',
    text: 'dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec',
  },
];

/* ----------------------------------
                CODE
-----------------------------------*/

/* CREATE INTERFACE ---------------*/
function drawHTMLProducts(arr, id) {
  let drawCard = document.getElementById(id);
  //reset inner div products
  drawCard.innerHTML = '';
  //redraw inner div products
  arr.forEach((e, i) => {
    drawCard.innerHTML += cardHtml(e.name, e.id, e.img, e.text);
  });
}
function cardHtml(name, id, img, text) {
  return `
<div data-product="${id}" class="card productos-card mt-3" style="width: 18rem;">
    <img src="./img/${img}" class="card-img-top" alt="${name}">
    <div class="card-body">
        <h5 class="product-card-name card-title">${name}</h5>
        <h6>id: <span class="product-card-id">${id}</span></h6>
        <p class="card-text">${text}</p>
        <a onclick="productAdd(${id})" href="#" class="product-card-btn-buy btn btn-primary ">Invitar</a>
    </div>
</div>
`;
}
drawHTMLProducts(productJson, 'products');

/* Añadir invitado ---------------*/

function productAdd(i) {
  let isInvited = false;
  let invitedPerson = {};

  invitedPerson = findPerson(productJson, i);

  if (cart.length == 0) {
    isInvited = true;
  } else {
    isInvited = cart.every((e) => e.id != invitedPerson.id);
  }

  if (isInvited) {
    invitedAction(invitedPerson);
    cartNumber('#cardIcon', cart.length);
  } else {
    alert('ya esta invitado');
  }
  let butonReset = document.querySelector('.product-reset');
  butonReset.classList.add('product-reset-visible');
}
function findPerson(list, id) {
  let person = {};
  list.forEach((e) => {
    if (e.id == id) {
      person = e;
    }
  });
  return person;
}
function invitedAction(e) {
  cart.push(e);
  guardarLocalstorage(cart);
  drawHTMLCardInvited(e);
}
function cartNumber(id, num) {
  const bubble = document.querySelector(id);
  const number = bubble.querySelector('#cart-number');
  number.innerHTML = num;
}
function drawHTMLCardInvited(e) {
  const invited = document.querySelector('#products-list');
  invited.innerHTML += cardInvitedHtml(e.name, e.img);
}
function cardInvitedHtml(name, img) {
  return `
    <div class="card-invited mt-3">
    <div class="card-invited-img">
        <img src="./img/${img}" class="img-fluid rounded-all" alt="${name}"
            title="${name}">
    </div>
    <div class="">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
        </div>
    </div>
</div>`;
}

/* localStore ----------------
--------------------------------*/
function guardarLocalstorage(arr) {
  arr = JSON.stringify(arr);
  console.log('arr : ', arr);
  let cartLocalStorage = localStorage.setItem('invitados', arr);
}

function putLocalStorage(local) {
  let cartLocalGet = JSON.parse(localStorage.getItem(local));
  if (cartLocalGet) {
    cart = cartLocalGet;
  }
}

putLocalStorage('invitados');

function reset() {
  const invited = document.querySelector('#products-list');
  invited.innerHTML = '';
  if (cart.length != 0) {
    cart.forEach((e) => drawHTMLCardInvited(e));
    cartNumber('#cardIcon', cart.length);
  } else {
    invited.innerHTML = 'Invita a alguién a tu fiesta';
  }
}
reset();

function resetStorage() {
  cart = [];
  localStorage.removeItem('invitados');
  let butonReset = document.querySelector('.product-reset');
  butonReset.classList.remove('product-reset-visible');
  reset();
}
