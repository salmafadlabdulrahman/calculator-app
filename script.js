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
  "Del",
];

const operationsContainer = document.getElementsByClassName(".operations");
let toggleInput = document.getElementsByTagName("input")[0];
let toggleLabel = document.getElementsByClassName("toggle-label")[0];
let toggleSwitch = document.getElementsByClassName("toggle-switch")[0];



document.addEventListener("DOMContentLoaded", function () {});

let curTheme = 1;
toggleInput.addEventListener("change", function() {
  toggleLabel.classList.remove("theme-one", "theme-two", "theme-three");
  if (curTheme === 1) {
    toggleLabel.classList.add("theme-two");
    curTheme = 2
  } else if (curTheme === 2) {
    toggleLabel.classList.add("theme-three");
    curTheme = 3
  } else {
    curTheme = 1;
    toggleLabel.classList.add("theme-one");
  }

  

  console.log(toggleLabel);
  console.log(curTheme)
})
