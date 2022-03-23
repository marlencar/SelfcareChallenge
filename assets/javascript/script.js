import { products } from "./products.js";

function showProducts() {
  const section = document.getElementById("products");
  const quant = document.querySelector('.quant');
  quant.innerHTML = `${products.length} Produtos`;

  products.forEach((item) => {
    section.innerHTML += `<div class="prod-div"><img class="prod-img" src=${item.img} />
    <h3 class="prod-name">${item.name}</h3>
    <h4 class="prod-price">R$ <span class="green">${item.price}</span></h4></div>`;
  });
}

showProducts();
