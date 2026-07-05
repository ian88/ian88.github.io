document.addEventListener("DOMContentLoaded", () => {

  // Filtering
  const buttons = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".gallery-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      items.forEach(item => {
        const tags = item.dataset.tags.split(" ");
        if (filter === "all" || tags.includes(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

});
