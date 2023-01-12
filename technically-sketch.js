function sketch() {
  function interface() {
    function grid() {
      const gridSelector = document.getElementById("grid");
      gridSelector.setAttribute("value", "off");
      const gridCol = gridSelector.children;

      function createGrid(n = 16) {
        for (let i = 0; i < n; i++) {
          let column = gridSelector.appendChild(document.createElement("div"));
          column.setAttribute("class", "grid-container-item col");
          for (let j = 0; j < n; j++) {
            let rowItem = column.appendChild(document.createElement("div"));
            rowItem.setAttribute("class", "grid-container-item row");
          }
        }
      }
      createGrid();



      const gridStart = (evt) => {
        const colorInput = document.querySelector(".color-input");
        let color = colorInput.value; // gets the hex code for the color
        evt.target.setAttribute("class", `grid-container-item row ${color}`);
        evt.target.setAttribute("style", `background-color:${color}`);
        console.log(color);
      };

      const gridEventListeners = () => {
        for (let i = 0; i < gridCol.length; i++) {
          let col = gridCol[i]; // parent Column
          let rows = col.children

          for (let j = 0; j < rows.childElementCount; j++) {
            let row = rows[j]
            console.log(row)
            row.addEventListener("mouseenter", gridStart);
          }
        }
      };

      const removeGridEventListeners = () => {
        for (let i = 0; i < gridCol.length; i++) {
          let col = gridCol[i];
          let rows = col.children;
          for (let j = 0; j < rows.length; j++) {
            let row = rows[j];
            row.removeEventListener("mouseenter", gridStart);
          }
        }
      };

      function controls() {
        function colors() {
          function draw() {
            gridEventListeners();
          } // continous draw logic

          function stopDraw() {
            removeGridEventListeners();
          }
          // removes/change event listeners so that boxes will not be drawn in mouseup

          function toggle() {
            const start = gridSelector.getAttribute("value");
            console.log(start);
            if (start === "off") {
              gridSelector.setAttribute("value", "on");
              draw();
            } else {
              gridSelector.setAttribute("value", "off");
              stopDraw();
            }
          } // toggles between draw() and stopDraw() given a mouse click

          function toggleEvent() {
            for (let i = 0; i < gridCol.length; i++) {
              let col = gridCol[i];
              let rows = col.children;
              for (let j = 0; j < rows.length; j++) {
                let row = rows[j];
                row.addEventListener("click", () => {
                  console.log("toggle clicked");
                  toggle();
                });
              }
            }
          }
          toggleEvent();
        }
        colors(); // controls color options on the grid

        function size() {
          const gridSizeInput = document.getElementById("grid-size-input");
          function deleteGrid() {
            while (gridSelector.firstElementChild) {
              gridSelector.lastElementChild.remove();
            }
          } // rmeoves the grid

          function changeSize() {
            const gridInputs = () => {
              gridSizeInput.addEventListener("click", () => {
                let input = prompt("eneter a grid size");
                console.log(input);
                deleteGrid();
                createGrid(input);
                toggle();
              });
            };
            gridInputs(); // return grid size input
          }
          changeSize(); // adds event listeners to the grid
        }
        size(); // controls the size of the grid

        function eraser() {} // removes a drawn grid box

        function rainbow() {} // paints with the colors of the rainbow

        function dodge() {} // ligthens the a drawn in grid box

        function burn() {} // darkens a drawn in grid box

        function reset() {
          const resetButton = document.getElementById("reset");

          function clearGrid() {
            console.log("clear Grid");
            gridCol.forEach((col) => {
              col.childNodes.forEach((item) => {
                item.setAttribute("style", "background-color:white");
              });
            });
          }

          function resetEvents() {
            resetButton.addEventListener("click", () => {
              clearGrid();
            });
          }
          resetEvents();
        }
        reset(); // resets all grid boxes
      }
      controls();
    }
    grid();
  }
  interface();
}
sketch();
