export class HtmlCard {
  constructor(json) {
    this.json = json;
    /* this.json = localStorage; */
  }

  html(data) {
    const { name, id, description, img } = data;
    let html = `
      <div class="JSCard_content">
        <div class="JSCard_content-image" data-id="${id}">
            <img src="./image/${img}" alt="${name}" >
        </div>
        <div class="JSCard_content-info">
            <div class="JSCard_content-info-inner">
                <h3 class="JSCard_content-info-name">${name}</h3>
                <div class="JSCard_content-info-description">
                    <p>${description}</p>
                </div>
                <div class="JSCard_content-info-valor">
                    {heart}
                    <span class="card-star">
                        <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="JSCard_content-button">
          <button onclick="personAdd(${id})" class=" btn btn-primary  ">
          Invitar
            <i class="fa-solid fa-heart"></i>
              <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      
    `;

    return html;
  }
}
