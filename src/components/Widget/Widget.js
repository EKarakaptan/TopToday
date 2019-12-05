class Widget extends HTMLElement {
  constructor() {
    super();
    let wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    this.picture = document.createElement("img");
    this.setPicture(
      "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg"
    );
    wrapper.appendChild(this.picture);
    this.picture.angle = 0;
    this.button = document.createElement("button");
    this.button.innerText = "ROTATE";
    this.button.onclick = this.rotatePicture.bind(this);
    wrapper.appendChild(this.button);

    let style = document.createElement("style");
    style.textContent = `
            .wrapper {
                background-color: #ddddee;
            }
            img {
                width:200px;
                margin: 20%;
                border: dotted 1px #555;
                transition: all 1s;
            }
        `;

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(style);
    this.shadow.appendChild(wrapper);
  }
  setPicture(url) {
    this.picture.src = url;
  }
  rotatePicture() {
    this.picture.angle += this.picture.angle < 270 ? 90 : -270;
    this.picture.style.transform = `rotate(${this.picture.angle}deg)`;
  }
}

customElements.define("sample-element", Widget);
let elem = document.createElement("sample-element");
document.body.appendChild(elem);
console.log("widget");
