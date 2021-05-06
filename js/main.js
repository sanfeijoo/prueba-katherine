/*Products*/
const products = document.getElementById('products');

function data(){
  fetch('./products.json')
  .then(res => res.json())
  .then(datos => {
    for(let i of datos["products"]){
        console.log(i.name);
        const row = document.createElement('div');
        row.innerHTML += `
        <li>
          <img src="${i.img}" alt = "Imagen del producto" />
            <p>${i.name}</p>
            <p>${i.description}</p>
            <p>$ ${i.price}</p>
        </li>
          <button>Agregar</button>
        `;
        products.appendChild(row);
    }
});
}
data();


/*Modal*/
const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openModal) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeModal) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});