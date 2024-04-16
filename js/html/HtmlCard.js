export class HtmlCard {
  constructor(json) {
    this.json = json;
    /* this.json = localStorage; */
  }

  html() {
    console.log('this.json', this.json);
    /* this.json.forEach((e, i) => {
      console.log('i', i);
      console.log('e', e);
    }); */

    /* const { name, id, text, img, avatar } = this.json;
    console.log(
      'HTML Class: name, id, text, img, avatar',
      name,
      id,
      text,
      img,
      avatar
    ); */
    /* let html = `
    <div class="JSCard_content"> 
      <ul>
        <li>id: ${id}</li>
        <li>name: ${name}</li>
        <li>text: ${text}</li>
        <li>img: ${img}</li>
        <li>avatar: ${avatar}</li>
      </ul>
    </div>
    `; */
  }
}
