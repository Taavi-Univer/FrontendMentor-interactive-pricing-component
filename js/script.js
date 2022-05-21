let views = document.getElementById("viewCount");
let priceRange = document.getElementById("priceRange");
let price = document.getElementById("price");
let checkBox = document.getElementById("checkBox");

function printViewsAndPrices(value) {
  if (value <= 20) {
    views.textContent = "10K";
    price.textContent = 8;
  } else if (value <= 40) {
    views.textContent = "50K";
    price.textContent = 12;
  } else if (value <= 60) {
    views.textContent = "100K";
    price.textContent = 16;
  } else if (value <= 80) {
    views.textContent = "500K";
    price.textContent = 24;
  } else {
    views.textContent = "1M";
    price.textContent = 36;
  }
}

priceRange.addEventListener("input", (e) => {
  printViewsAndPrices(e.target.value);
});

priceRange.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
    value +
    "%, #eaeefb " +
    value +
    "%, #eaeefb 100%)";

  checkBox.checked = false;
};

checkBox.addEventListener("input", (e) => {
  let value = parseInt(price.innerHTML);

  if (checkBox.checked == true) {
    console.log("discount");

    let discount = value * 0.25;

    price.textContent = value - discount;
  } else {
    console.log("no discount");

    printViewsAndPrices(priceRange.value);
  }
});
