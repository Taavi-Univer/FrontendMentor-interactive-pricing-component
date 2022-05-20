let views = document.getElementById("viewsCount");
let priceRange = document.getElementById("priceRange");
let price = document.querySelector(".price");
console.log(views.textContent);

priceRange.addEventListener("click", (e) => {
  level = e.target.value;
  // console.log(level);

  if (level <= 20) {
    views.textContent = "10K";
    price.textContent = "$8";
  } else if (level <= 40) {
    views.textContent = "50K";
    price.textContent = "$12";
  } else if (level <= 60) {
    views.textContent = "100K";
    price.textContent = "$16";
  } else if (level <= 80) {
    views.textContent = "500K";
    price.textContent = "$24";
  } else {
    views.textContent = "1M";
    price.textContent = "$36";
  }
});
