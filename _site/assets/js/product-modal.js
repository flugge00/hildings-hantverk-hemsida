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

document.addEventListener("DOMContentLoaded", async () => {
  const catalog = document.getElementById("catalog");
  const loading = document.getElementById("catalog-loading");

  if (!catalog || !loading) return;

  const images = catalog.querySelectorAll("img");

  const decodePromises = [];

  images.forEach(img => {
    if (img.complete) {
      decodePromises.push(img.decode().catch(() => {}));
    } else {
      decodePromises.push(
        new Promise(resolve => {
          img.addEventListener("load", () => {
            img.decode().catch(() => {}).finally(resolve);
          });
          img.addEventListener("error", resolve);
        })
      );
    }
  });

  // Never block forever
  await Promise.race([
    Promise.all(decodePromises),
    new Promise(resolve => setTimeout(resolve, 800))
  ]);

  loading.style.display = "none";
  catalog.classList.remove("is-hidden");
  catalog.classList.add("is-ready");
});
