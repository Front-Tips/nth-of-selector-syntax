document
  .querySelector("form")
  .addEventListener("submit", (e) => e.preventDefault());

document.querySelectorAll("select").forEach(($select) => {
  $select.addEventListener("change", () => {
    updateCSS();
  });
});

/* ------------------------ */
/*         updateCSS        */
/* ------------------------ */
const updateCSS = () => {
  const selector =
    document.querySelector("#nth-selector").value;
  const count = document.querySelector("#nth-count").value;
  const ov = document.querySelector("#nth-of").value;
  const cssRule = `.fruit:${selector}(${count} of ${ov}) {
    border: 5px solid #f700ff;

    &::after {
      background-color: #f700ff;
    }
  }`;

  document.querySelector("#output").innerText = cssRule;

  updateFruitsOpacity(selector, count, ov);
};

/* ------------------------ */
/*    updateFruitsOpacity   */
/* ------------------------ */
const updateFruitsOpacity = (selector, count, ov) => {
  const fruits = document.querySelectorAll(".fruit");
  fruits.forEach((fruit) => {
    fruit.style.opacity = "1"; // Set default opacity to 1
  });

  const specialSelector = `.fruit:${selector}(${count} of ${ov})`;
  const specialfruits =
    document.querySelectorAll(specialSelector);

  // Set opacity to 0.4 for all fruits except the special ones
  fruits.forEach((fruit) => {
    if (!fruit.matches(specialSelector)) {
      fruit.style.opacity = "0.4";
    }
  });
};

updateCSS();
