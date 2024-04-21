export class HtmlCard {
  constructor(json) {
    this.json = json;
    /* this.json = localStorage; */
  }

  html(data) {
    const { name, id, description, img, avatar } = data;
    let html = `
      <div class="JSCard_content"  data-id="${id}" data-pepi="${id}">
        <div class="JSCard_content-image">
            <img src="./image/${img}" alt="${name}" >
        </div>
        <div class="JSCard_content-info">
            <div class="JSCard_content-info-inner">
                <h3 class="JSCard_content-info-name">${name}</h3>
                <div class="JSCard_content-info-description">
                    <p>${description}</p>
                </div>
                <!-- <div class="JSCard_content-info-valor">
                    {heart}
                    <span class="card-star">
                        <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                    </span>
                </div> -->
            </div>
        </div>
        <div class="JSCard_content-button">
          <button onclick="personAdd(${id}, '.JSCard_content')" class=" btn btn-primary  ">
          Invitar
            <i class="fa-normal fa-solid fa-heart"></i>
            <i class="fa-hover fa-regular fa-heart"></i>
          </button>
        </div>
        <div class="JSCard_content-invited">
          <div class="JSCard_content-invited-image">
            <img src="./image/${avatar}" alt="${name}" >
          </div>
          <h5 class="JSCard_content-invited-name">${name}</h5>
          <p> <i>Is invited</i></p>
          <button onclick="personDeleted(${id}, '.JSCard_content')" class=" btn btn-primary  ">
            Borrar
            <i class="fa-normal fa-regular fa-trash-can"></i>
            <i class="fa-hover fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      
    `;
    return html;
  }
}
