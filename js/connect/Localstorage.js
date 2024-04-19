import { Message } from './message.js';
const message = new Message();

export class LocalStorageCall {
  constructor(party, connect) {
    this.party = party;
    this.connect = localStorage;
  }

  getAll(data) {
    try {
      const value = this.connect.getItem(data);
      if (value) {
        return value;
      } else {
        throw new Error(
          `💀 class LocalStorageCall.getAll, there isn't ('${data}')! 💀`
        );
      }
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
