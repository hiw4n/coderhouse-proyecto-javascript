import { Message } from './message.js';
const message = new Message();

export class LocalStorageCall {
  constructor(party, cart) {
    this.cartName = 'party';
    this.cart = localStorage;
  }

  getAll(nameBDApp, cart = this.cart) {
    try {
      console.log('cart: ', cart);
      console.log('nameBDApp: ', nameBDApp);
      data.every((e) => {
        console - log('e', e);
      });
      /* const value = this.cart.getItem(data);
      console.log('value: ', value);
      if (value) {
        return value;
      } else {
        throw new Error(
          `💀 class LocalStorageCall.getAll, there isn't ('${data}')! 💀`
        );
      } */
    } catch (err) {
      message.error(err);
    }
  }
  getById(data, id) {
    try {
      data.forEach((e) => {
        if (e.id == id) {
          console.log('e', e);
          return e;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  Push(data, cartName = this.party, cart = this.cart) {
    cart.setItem(cartName, []);
  }

  deleteAllBy(element) {
    try {
      const value = this.cart.getItem(element);
      if (value) {
        this.cart.removeItem(element);
        message.deleted(element);
      } else {
        throw new Error(
          message.noExist('class LocalStorageCall.getAll', element)
        );
      }
    } catch (err) {
      message.error(err);
    }
  }
}
