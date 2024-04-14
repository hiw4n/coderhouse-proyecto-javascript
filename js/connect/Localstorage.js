import { Message } from './message.js';
const message = new Message();

export class LocalStorageCall {
  constructor(party, connect) {
    this.party = party;
    this.connect = localStorage;
  }

  getAll(arr) {
    try {
      const value = this.connect.getItem(arr);
      if (value) {
        return value;
      } else {
        throw new Error(
          `💀 class LocalStorageCall.getAll, there isn't ('${element}')! 💀`
        );
      }
    } catch (err) {
      message.error(err);
    }
  }
  getBy(arr) {
    /*    this.localStg.forEach((e) => {
      console.log(e);
    }); */
  }

  deleteAllBy(element) {
    try {
      const value = this.connect.getItem(element);
      if (value) {
        this.connect.removeItem(element);
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
