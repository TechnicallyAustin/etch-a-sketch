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
      };
      createGrid();

      const gridStart = (evt) => {
        const colorInput = document.querySelector(".color-input");
        let color = colorInput.value; 
        evt.target.setAttribute("class", `grid-container-item row ${color}`);
        evt.target.setAttribute("style", `background-color:${color}`);
        console.log(color);
      };

      const gridEventListeners = () => {
        for (let i = 0; i < gridCol.length; i++) {
          let col = gridCol[i]; 
          let rows = col.children

          for (let j = 0; j < rows.length; j++) {
            let row = rows[j]
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

       function draw() {
         console.log("drawing");
         gridEventListeners();
       }

       function stopDraw() {
         console.log("Stop Drawing");
         removeGridEventListeners();
       }


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
         } 

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

      function controls() {
        function size() {
          const gridSizeInput = document.getElementById("grid-size-input");
          function deleteGrid() {
            while (gridSelector.firstElementChild) {
              gridSelector.lastElementChild.remove();
            }
          }

          const gridInputs = () => {
            const input = document.getElementById("grid-size-input");

            gridSizeInput.addEventListener("mouseup", () => {
              console.log(input.value);
              deleteGrid();
              createGrid(input.value);
              toggleEvent();
            });
          };
          gridInputs();
        }
        size();

        function eraser() {
          const eraseBox = document.getElementById("erase-input");
          const value = eraseBox.getAttribute("value");
          console.log(value);
          
          eraseBox.addEventListener("click", () => {});
          if (eraseBox.checked)
            for (let i = 0; i < gridCol.length; i++) {
              let col = gridCol[i];
              let rows = col.children;
              for (let j = 0; j < rows.length; j++) {
                let row = rows[j];
                row.addEventListener();
              }
            }
        } // removes a drawn grid box

        function dodge() {
          const dodgeBox = document.getElementById("dodge-input");
          const value = dodgeBox.getAttribute("value");
          console.log(value)
          for (let i = 0; i < gridCol.length; i++) {
            let col = gridCol[i];
            let rows = col.children;
            for (let j = 0; j < rows.length; j++) {
              let row = rows[j];
              // code block
            }
          }
        } // ligthens the a drawn in grid box

        function burn() {
          const burnBox = document.getElementById("burn-box");
          const value = burnBox.getAttribute("value");
          console.log(value);

          for (let i = 0; i < gridCol.length; i++) {
            let col = gridCol[i];
            let rows = col.children;
            for (let j = 0; j < rows.length; j++) {
              let row = rows[j];
              // code block
            }
          }
        } // darkens a drawn in grid box

        function rainbow() {
          const rainBox = document.getElementById("rain-input");
          const value = rainBox.getAttribute("value");
          console.log(value);

          for (let i = 0; i < gridCol.length; i++) {
            let col = gridCol[i];
            let rows = col.children;
            for (let j = 0; j < rows.length; j++) {
              let row = rows[j];
              // code block
            }
          }
        } // paints with the colors of the rainbow

        function sample() {
          const sampler = document.getElementById("sample-box");
          const value = sampler.getAttribute("value");
          console.log(value);

          for (let i = 0; i < gridCol.length; i++) {
            let col = gridCol[i];
            let rows = col.children;
            for (let j = 0; j < rows.length; j++) {
              let row = rows[j];
              // code block
            }
          }
        } // copies a previous drawn color on the grid

        function reset() {
          const resetButton = document.getElementById("reset");

          function clearGrid() {
            for (let i = 0; i < gridCol.length; i++) {
              let col = gridCol[i];
              let rows = col.children;
              for (let j = 0; j < rows.length; j++) {
                let row = rows[j];
                row.setAttribute("style", "background-color:white");
              }
            }
          }

          function resetEvents() {
            resetButton.addEventListener("click", () => {
              clearGrid();
            });
          }
          resetEvents();
        }
        reset();
      }
      controls();
    }
    grid();
  }
  interface();
}
sketch();
