const buttons = document.getElementsByTagName("button");

const display = document.getElementById("display");

const buttonsArray = Array.from(buttons);

buttonsArray.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.textContent) {
      case "=": 
        display.innerHTML = eval(display.textContent)
        break
      case "C":
        display.innerHTML = ""
        break  
      default:
        display.innerHTML += event.target.textContent;
    }
  });
});
