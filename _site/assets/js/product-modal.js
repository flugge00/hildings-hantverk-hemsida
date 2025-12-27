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

// Wait for catalog to load 
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

// Fade in new card
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".product-card");

  if (!("IntersectionObserver" in window)) {
    cards.forEach(card => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const card = entry.target;

        if (entry.isIntersecting) {
          // Determine direction
          const isFromTop = entry.boundingClientRect.top < 0;

          card.classList.remove("from-top", "from-bottom");

          if (isFromTop) {
            card.classList.add("from-top");
          } else {
            card.classList.add("from-bottom");
          }

          card.classList.add("is-visible");
        } else {
          //card.classList.remove("is-visible", "from-top", "from-bottom");
          card.classList.remove("from-top", "from-bottom");
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "100px 0px -100px 0px"
    }
  );

  cards.forEach(card => observer.observe(card));
});

// Loading event for gallery
document.addEventListener("DOMContentLoaded", async () => {
  console.log("Gallary load js")
  const gallery = document.getElementById("gallery");
  const loading = document.getElementById("gallery-loading");

  if (!gallery || !loading) return;

  const items = gallery.querySelectorAll(".gallery-item");
  const images = gallery.querySelectorAll("img");

  /* ---------- Initial load (same as catalog) ---------- */

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

  await Promise.race([
    Promise.all(decodePromises),
    new Promise(resolve => setTimeout(resolve, 800))
  ]);

  loading.style.display = "none";
  gallery.classList.remove("is-hidden");
  console.log("Is hidden is removed")

  /* ---------- Scroll animation (separate concern) ---------- */

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle(
          "is-visible",
          entry.isIntersecting
        );
      });
    },
    {
      rootMargin: "100px 0px -100px 0px",
      threshold: 0.05
    }
  );

  items.forEach(item => observer.observe(item));
});
