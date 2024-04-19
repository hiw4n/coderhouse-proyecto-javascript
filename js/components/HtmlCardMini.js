export class HtmlCardMini {
  constructor(json) {
    this.json = json;
  }

  html(data) {
    const { name, id, avatar } = data;

    let html = `
    <div class="JSCardMini_content">
      <div class="JSCardMini_content-image" data-id="${id}">
          <img src="./image/${avatar}" alt="${name}" >
      </div>
      <div class="JSCardMini_content-info">
          <h5 class="JSCardMini_content-info-name">${name}</h5>
      </div>
      <div class="JSCardMini_content-button">
          <a onclick="productDeleted(${id})" href="#"
              class="JSCardMini_content-button-invited btn btn-primary ">Borrar<i
                  class="fa-solid fa-heart"></i>
              <i class="fa-regular fa-heart"></i>
          </a>
      </div>
    </div>
    `;

    return html;
  }
}
