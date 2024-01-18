const minSlider = document.getElementById("minRange");
const maxSlider = document.getElementById("maxRange");
const minInput = document.getElementById("minPrice");
const maxInput = document.getElementById("maxPrice");
const priceSlider = document.querySelector(".priceSlider");

let priceDiffer = 500;

minSlider.addEventListener("input", (e) => {
  // console.dir(e.target.valueAsNumber)
  // console.log(typeof e.target.valueAsNumber)
  result(e);
});
maxSlider.addEventListener("input", (e) => {
  result(e);
  // console.dir(e.target.valueAsNumber)
  // console.log(typeof e.target.valueAsNumber)
});
minInput.addEventListener("input", (e) => {
  result(e);
});
maxInput.addEventListener("input", (e) => {
  result(e);
});

function result(event) {
  if (
    event.target.className == "minPrice" ||
    event.target.className == "maxPrice"
  ) {
    let minValue = minInput.valueAsNumber;
    let maxValue = maxInput.valueAsNumber;
    let diff = maxValue - minValue;
    if (minValue < 0) {
      alert("Minimum price cannot be less than 0");
      minInput.value = 0;
      minValue = 0;
    } else if (maxValue > 10000) {
      alert("Maximum price cannot be greater than 10000");
      maxInput.value = 10000;
      maxValue = 10000;
    } else if (minValue > maxValue - priceDiffer) {
      minInput.value = maxValue - priceDiffer;
      minValue = maxValue - priceDiffer;
      if (minValue < 0) {
        minInput.value = 0;
        minValue = 0;
      }
    }

    diff = maxValue - minValue;

    if (diff >= priceDiffer && maxValue <= maxSlider.max) {
      if (event.target.className === "minPrice") {
        minSlider.value = minValue;
        let value1 = minSlider.max;
        priceSlider.style.left = `${(minValue / value1) * 100}%`;
      } else {
        maxSlider.value = maxValue;
        let value2 = maxSlider.max;
        priceSlider.style.right = `${100 - (maxValue / value2) * 100}%`;
      }
    }
  }
else{
    let minValue = minSlider.valueAsNumber;
    let maxValue = maxSlider.valueAsNumber;
    let diff = maxValue - minValue;
    console.log(minValue)
    console.log(maxValue)
    console.log(diff)
    
    if (diff < priceDiffer) {
        if (event.target.className === "minRange") {
      minSlider.value = maxValue - priceDiffer;
    } else {
      maxSlider.value = minValue + priceDiffer;
    }
  } else {
      minInput.value = minValue;
      maxInput.value = maxValue;
      priceSlider.style.left = `${(minValue / minSlider.max) * 100}%`;
      priceSlider.style.right = `${100 - (maxValue / minSlider.max) * 100}%`;
    }
}
}
