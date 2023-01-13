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
          column.setAttribute("value", `${i}`)
          for (let j = 0; j < n; j++) {
            let rowItem = column.appendChild(document.createElement("div"));
            rowItem.setAttribute("class", "grid-container-item row");
            rowItem.setAttribute("value", `${j}`)
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
             gridSelector.setAttribute("style", "border: 10px solid green")
             draw();
           } else {
             gridSelector.setAttribute("value", "off");
             gridSelector.setAttribute("style", "border: 10px solid red")
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

          const eraseAction = (evt) => {
            evt.target.setAttribute("style", "background-color:white")

             for (let i = 0; i < gridCol.length; i++) {
               let col = gridCol[i];
               let rows = col.children;
               for (let j = 0; j < rows.length; j++) {
                 let row = rows[j];
                 removeGridEventListeners()
               }
             }
          };

          const createEraseEvents = () => {
            for (let i = 0; i < gridCol.length; i++) {
              let col = gridCol[i];
              let rows = col.children;
              for (let j = 0; j < rows.length; j++) {
                let row = rows[j];
                row.addEventListener("click", eraseAction);
              };
            };
          };

          const removeEraseEvents = () => {
             for (let i = 0; i < gridCol.length; i++) {
               let col = gridCol[i];
               let rows = col.children;
               for (let j = 0; j < rows.length; j++) {
                 let row = rows[j];
                 row.removeEventListener("click", eraseAction);
               };
             };
          };

          const eraserToggle = () => {
                    const start = eraseBox.getAttribute("value");
                    console.log("eraser-toggle", start);
                    if (start === "off") {
                      eraseBox.setAttribute("value", "on");
                      eraseBox.setAttribute("style", "background-color:green")
                      createEraseEvents()
                    } else {
                      eraseBox.setAttribute("value", "off");
                      eraseBox.setAttribute("style", "background-color:red")
                      removeEraseEvents()
                    }
                  };
          

                function eraserToggleEvent() {
            
                      eraseBox.addEventListener("click", () => {
                        console.log("eraser toggle clicked");
                        eraserToggle();
                      });
                }; eraserToggleEvent()
              }; eraser()

        function rainbow() {
            const rainBox = document.getElementById("rain-input");
          const value = rainBox.getAttribute("value");
          console.log(value);

          const rainAction = (evt) => {
            //evt.target.setAttribute("style", "background-color:white")

             for (let i = 0; i < gridCol.length; i++) {
               let col = gridCol[i];
               let rows = col.children;
               for (let j = 0; j < rows.length; j++) {
                 let row = rows[j];
                 removeGridEventListeners()
               }
             }
          };

          const createRainEvents = () => {
            for (let i = 0; i < gridCol.length; i++) {
              let col = gridCol[i];
              let rows = col.children;
              for (let j = 0; j < rows.length; j++) {
                let row = rows[j];
                row.addEventListener("click", rainAction);
              };
            };
          };

          const removeRainEvents = () => {
             for (let i = 0; i < gridCol.length; i++) {
               let col = gridCol[i];
               let rows = col.children;
               for (let j = 0; j < rows.length; j++) {
                 let row = rows[j];
                 row.removeEventListener("click", rainAction);
               };
             };
          };

          const rainToggle = () => {
                    const start = rainBox.getAttribute("value");
                    console.log("rain-toggle", start);
                    if (start === "off") {
                      rainBox.setAttribute("value", "on");
                      rainBox.setAttribute("style", "background-color:green")
                      createRainEvents()
                    } else {
                      rainBox.setAttribute("value", "off");
                      rainBox.setAttribute("style", "background-color:red")
                      removeRainEvents()
                    }
                  };
          

                function rainToggleEvent() {
            
                      rainBox.addEventListener("click", () => {
                        console.log("Rain toggle clicked");
                        rainToggle();
                      });
                }; rainToggleEvent()
        }; rainbow()


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
          };
          resetEvents()
        };
        reset()
      };
      controls()
    };
    grid()
  };
  interface()
};
sketch()
