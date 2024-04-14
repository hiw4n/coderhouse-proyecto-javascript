export class Message {
  error(message) {
    console.error(message);
    console.log(message);
  }
  deleted(arr, where = 'localStorage') {
    console.log(`💥 DELETED 💥 arr ${arr}, in ${where}`);
  }
  noExist(func = '', arr) {
    return `💀 ${func}, NOT EXIST ('${arr}')! 💀`;
  }
}
