let views = document.getElementById("viewsCount");
let priceRange = document.getElementById("priceRange");
let price = document.querySelector(".price");
// console.log(views.textContent);

priceRange.addEventListener("input", (e) => {
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

priceRange.oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
    value +
    "%, #eaeefb " +
    value +
    "%, #eaeefb 100%)";
};
