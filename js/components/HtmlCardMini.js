export class HtmlCardMini {
  constructor(json) {
    this.json = json;
  }

  html(data) {
    const { name, id, avatar } = data;

    let html = `
    <div class="JSCardMini_content"  data-id="${id}">
      <div class="JSCardMini_content-image">
          <img src="./image/${avatar}" alt="${name}" >
      </div>
      <!-- <div class="JSCardMini_content-info">
          <h5 class="JSCardMini_content-info-name">${name}</h5>
      </div>-->
      <div class="JSCardMini_content-button">
          <button onclick="personDeleted(${id}, '.JSCard_content')" href="#"
              class="JSCardMini_content-button-invited btn btn-primary ">           
              <i class="fa-normal fa-regular fa-trash-can"></i>
              <i class="fa-hover fa-solid fa-trash-can"></i>
          </button>
      </div>
    </div>
    `;

    return html;
  }
}
