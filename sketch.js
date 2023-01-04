function sketchActions() {
  const gridSelector = document.getElementById("grid");
  const gridBoxesSelector = document.getElementsByClassName("row");

  function gridSize() {
    const inputSelector = document.getElementById("grid-size-input");

    const changeSize = () => {};

    // adds grid box event listeneres
    const gridBoxesEvents = () => {
      for (let i = 0; i < gridBoxesSelector.length; i++) {
        let box = gridBoxesSelector[i];
        box.addEventListener("click", () => {
          for (let j = 0; j < gridBoxesSelector.length; j++) {
            let box = gridBoxesSelector[j];
            box.addEventListener("mouseover", () => {
              box.setAttribute("class", "grid-container-item row blue"); // this needs to take the output from color event listeners
              console.log("hovered");
            });
          }
        });
      }
    };
    gridBoxesEvents();

    // adds grid size input evenet listeners
    const gridInputs = () => {
      inputSelector.addEventListener("click", () => {
        input = prompt("Enter a size 17 - 100");
        console.log(input);
        //return input
      });
    };
    gridInputs();
  }
  gridSize();

  function gridColor() {
    const colorsSelector = document.getElementsByClassName("color-boxes");
    // adds event listeners for each color button, returns the id of the color
    const colorEvents = () => {
      for (let i = 0; i < colorsSelector.length; i++) {
        let color = colorsSelector[i];
        color.addEventListener("click", () => {
          //return color.id
          console.log(`${color.id}`);
        });
      }
    };
    colorEvents();

    const changeColor = (color) => {};
    changeColor(colorEvents);
  }
  gridColor();

  // resets the grid back to the starting position
  function resetGrid() {
    const resetSelector = document.getElementById("reset");
    const clearGrid = () => {};

    // adds reset button event listeners
    const resetEvents = () => {
      resetSelector.addEventListener("click", () => {
        console.log("reset clicked");
      });
    };
    resetEvents();
  }
  resetGrid();
}
sketchActions();
