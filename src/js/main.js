const xhr = new XMLHttpRequest();
xhr.open("GET", "../src/json/main.json");
let main = document.querySelector(".main");

xhr.onload = function () {
  if (this.status === 200) {
    const data = JSON.parse(this.responseText);
    data.forEach((element) => {
      let container = document.createElement("div");
      container.classList.add("container");
      container.innerHTML = `
    <div class="header-1">
    <img src="./img/${element.src}" alt="" />
  </div>
  <div class="services">
    <h3>
      <a href="">${element.title}</a>
    </h3>
    <p>${element.text}</p>
  </div>`;
      main.appendChild(container);
    });
  }
  mouseMove();
};
xhr.send();

function mouseMove() {
  const count = document.querySelectorAll(".container");
  count.forEach((element) => {
    element.addEventListener("mousemove", () => {
      count.forEach((card) => {
        card.classList.remove('active')
      });
      element.classList.add('active')
    });
  });
}
