const operations = [
  ".",
  "0",
  "/",
  "x",
  "1",
  "2",
  "3",
  "-",
  "4",
  "5",
  "6",
  "+",
  "7",
  "8",
  "9",
  "Del"
];

const operationsContainer = document.getElementsByClassName(".operations");
document.addEventListener("DOMContentLoaded", function() {
    
    operationsContainer.innerHTML = <p></p>
    console.log(operations.map((operation) => operation))
})

