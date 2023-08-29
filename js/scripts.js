// Business Logic
function hideResults() {
  document.getElementById("not").setAttribute("class", "hidden");
  document.getElementById("equilateral").setAttribute("class", "hidden");
  document.getElementById("isosceles").setAttribute("class", "hidden");
  document.getElementById("right").setAttribute("class", "hidden");
  document.getElementById("scalene").setAttribute("class", "hidden");
}



// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  const side1 = parseInt(document.querySelector("input#side1").value);
  const side2 = parseInt(document.querySelector("input#side2").value);
  const side3 = parseInt(document.querySelector("input#side3").value);
  hideResults();

  let result;
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    result = "not a triangle";
    document.getElementById("not").removeAttribute("class");
  } else if (side1 === side2 && side2 === side3) {
    result = "equilateral triangle";
    document.getElementById("equilateral").removeAttribute("class");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    result = "isosceles triangle";
    document.getElementById("isosceles").removeAttribute("class");
  } else if (side1 * side1 + side2 * side2 === side3 * side3 || side1 * side1 + side3 * side3 === side2 * side2 || side2 * side2 + side3 * side3 === side1 * side1) {
    result = "scalene and a right triangle";
    document.getElementById("right").removeAttribute("class");
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    result = "scalene triangle";
    document.getElementById("scalene").removeAttribute("class");
  } 

  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("sides");
  form.addEventListener("submit", handleCalculation);
});