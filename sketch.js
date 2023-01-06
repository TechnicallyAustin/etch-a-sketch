function sketchActions() {
  const gridSelector = document.getElementById("grid");
  const gridBoxesSelector = document.getElementsByClassName("row");

  function gridSize() {
    const inputSelector = document.getElementById("grid-size-input");

    

    // adds grid box event listeneres
    const gridBoxesEvents = () => {
      for (let i = 0; i < gridBoxesSelector.length; i++) {
        let box = gridBoxesSelector[i];
        // adds a click based event listenerr to all boxes
        box.addEventListener("click", () => {
          for (let j = 0; j < gridBoxesSelector.length; j++) {
            let box = gridBoxesSelector[j];
            // changes grid boxes event listener to mouse enter after a box is clicked
            box.addEventListener("mouseenter", () => {
              box.setAttribute("class", "grid-container-item row blue"); // this needs to take the output from color event listeners
              // changes the grird boxes event back to a click to stop drawing in boxes
                box.addEventListener('click', () => {
                  // once clicked this should remove the event listeners from the grid
                    // after a color has been clicked, add event listeners to the grid for that color
                  box.setAttribute('class', "grid-container-item row")
                  console.log("toggle")
                  
                })
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

        //return input
      });
    };
    gridInputs();

    const changeSize = (input) => {
      
      const deleteGrid = () => {
        const grid = document.getElementById("grid");
        const gridColumns = document.getElementsByClassName(
          "grid-container-item col"
        );
        for (let i = 0; i > gridColumns.length; i++) {
          let child = gridColumns[i];
          grid.removeChild(child);
        }
      };
      deleteGrid();





    }; changeSize


  }
  gridSize();

  function gridColor() {
    const colorsSelector = document.getElementsByClassName("color-boxes");
    // adds event listeners for each color button, returns the id of the color
    const colorEvents = () => {
      for (let i = 0; i < colorsSelector.length; i++) {
        let color = colorsSelector[i];
        color.addEventListener("click", () => {
          for (let j = 0; j < gridBoxesSelector.length; j++){
            let box = gridBoxesSelector[j];
            box.addEventListener("mouseenter", () => {
            box.setAttribute("class", `grid-container-item row ${color.id}`)
            })
          }
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
    const clearGrid = () => {
       reset.addEventListener("click", () => {
         for (let k = 0; k < gridBoxesSelector.length; k++) {
           let box = gridBoxesSelector[k];
           box.setAttribute("class", "grid-container-item row");
         }
       });
    }; clearGrid()

    // adds reset button event listeners
    const resetEvents = () => {
      resetSelector.addEventListener("click", () => {
        clearGrid()
      });
    };
    resetEvents();
  }
  resetGrid();
}
sketchActions();
