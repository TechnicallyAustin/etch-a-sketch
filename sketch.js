function sketchActions() {
  const gridSelector = document.getElementById("grid");
  const gridBoxesSelector = document.getElementsByClassName("row");

  function gridSize() {
    const inputSelector = document.getElementById("grid-size-input");

    // adds grid box event listeneres
    //const gridBoxesEvents = () => {
    //  for (let i = 0; i < gridBoxesSelector.length; i++) {
    //    let box = gridBoxesSelector[i];
    //    // adds a click based event listenerr to all boxes
    //    box.addEventListener("click", function gridBoxClick() {
    //      for (let j = 0; j < gridBoxesSelector.length; j++) {
    //        let box = gridBoxesSelector[j];
    //        // changes grid boxes event listener to mouse enter after a box is clicked
    //        box.addEventListener("mouseenter", function gridBoxEnter() {
    //          console.log("mouse enter");
    //          box.setAttribute("class", "grid-container-item row blue"); // this needs to take the output from color event listeners
    //          // changes the grird boxes event back to a click to stop drawing in boxes
    //        });
    //      }
    //    });
    //  }
    //};
    //gridBoxesEvents();

    const gridEventsv2 = () => {
      const gridBoxes = document.getElementsByClassName("row");

      const toggle = () => {
        if ("ON") {
          // draw
        }
        else {
          // turn draw off

        }
      }

      const draw = () => {
        for (let i = 0; i < gridBoxes.length; i++){
          let box = gridBoxes[i]
          box.addEventListener("mouseenter", () => {
            box.setAttribute("class", "grid-container-item row default")
          })
        }
      }

      const stopDraw = () => {
        for (let i = 0; i < gridBoxes.length; i++){
          let box = gridBoxes[i];
          box.removeEventListener("mouseenter",() =>{
            console.log("removed Draw")
          })
        }

      }

      const gridEnter = () => {
        // sets a mouse enter event on each box
        //for (let i = 0; i < gridBoxes.length; i++) {
        //  let box = gridBoxes[i];
        //  box.addEventListener("mouseenter", draw() )
        //}
      }; // sets mouse enter events

      const gridStart = () => {
        // sets a click even on each box
        for (let i = 0; i < gridBoxes.length; i++) {
          let box = gridBoxes[i];
          box.addEventListener("click", () => {
            draw()
            console.log("Grid Start start draw")
          });
        }
      };
      gridStart();



      const gridStop = () => {
        for (let i = 0; i < gridBoxes.length; i++) {
          let box = gridBoxes[i];
          // removes the grid start event on each box
        }
      };
    }; gridEventsv2()

    const deleteGrid = () => {
      // selects the grid
      const grid = document.getElementById("grid");
      // selects grid children
      const gridChildren = grid.childNodes;

      while (grid.lastElementChild) {
        grid.firstElementChild.remove();
      }
    };

    const newGridSize = (number) => {
      const grid = document.getElementById("grid");
      for (let i = 0; i < number; i++) {
        let column = grid.appendChild(document.createElement("div"));
        column.setAttribute("class", "grid-container-item col");
        for (let j = 0; j < number; j++) {
          let row = column.appendChild(document.createElement("div"));
          row.setAttribute("class", "grid-container-item row");
        }
      }
    };

    // adds grid size input evenet listeners

    const changeSize = () => {
      const gridInputs = () => {
        inputSelector.addEventListener("click", () => {
          input = prompt("Enter a size 17 - 100");
          deleteGrid();
          newGridSize(input);
          gridEventsv2()
          //return input
        });
      };
      gridInputs();

      //const deleteGrid = () => {
      //  const grid = document.getElementById("grid");
      //  for (let i = 0; i < gridBoxesSelector.length; i++) {
      //    gridBoxesSelector[i].remove()
      //
      //
      //
      //  }
      //};
      //
    };
    changeSize();
  };
  gridSize();

  function gridColor() {
    const colorsSelector = document.getElementsByClassName("color-boxes");
    // adds event listeners for each color button, returns the id of the color
    const colorEvents = () => {
      for (let i = 0; i < colorsSelector.length; i++) {
        let color = colorsSelector[i];
        color.addEventListener("click", () => {
          for (let j = 0; j < gridBoxesSelector.length; j++) {
            let box = gridBoxesSelector[j];
            box.addEventListener("mouseenter", () => {
              box.setAttribute("class", `grid-container-item row ${color.id}`);
            });
          }
        });
      }
    };
    colorEvents();
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
    };
    clearGrid();

    // adds reset button event listeners
    const resetEvents = () => {
      resetSelector.addEventListener("click", () => {
        clearGrid();
      });
    };
    resetEvents();
  }
  resetGrid();
}
sketchActions();
