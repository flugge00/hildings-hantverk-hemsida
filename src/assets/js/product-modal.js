window.openModal = function (image, name, price, shortDesc, longDesc) {
  document.getElementById("modal-image").src = image;
  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-price").textContent = price;
  document.getElementById("modal-description").textContent = shortDesc;
  document.getElementById("modal-long-description").textContent = longDesc;

  document.getElementById("product-modal").classList.add("is-open");
};

window.closeModal = function () {
  document.getElementById("product-modal").classList.remove("is-open");
};
