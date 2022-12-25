function sketch() {
  function title() {
    const titleDiv = document.body.appendChild(document.createElement("div"));
    const title = titleDiv.appendChild(document.createElement("h1"));
    titleDiv.setAttribute("class", "title");
    title.textContent = "Technically Sketch";
  }; title(); // title end

  function interface() {
    const interface = document.body.appendChild(document.createElement("div"));
    interface.setAttribute("class", "interface");

    function interfaceComponents() {
      function grid() {
        const gridContainer = () => {
          const gridContainer = interface.appendChild(
            document.createElement("div")
          );
          gridContainer.setAttribute("class", "grid-container");

          const gridContainerItem = (number = 16) => {
            for (let i = 0; i < number; i++) {
              let gridContainerItem = gridContainer.appendChild(
                document.createElement("div")
              );
              gridContainerItem.setAttribute(
                "class",
                "grid-container-item row"
              );
              for (let j = 0; j < number; j++) {
                let gridContainerItemColumn = gridContainerItem.appendChild(
                  document.createElement("div")
                );
                gridContainerItemColumn.setAttribute(
                  "class",
                  "grid-container-item col"
                );
              }
            }
            const addGridEventListeners = () => {
            const gridBoxes = document.getElementsByClassName("col");
            for (let i = 0; i < gridBoxes.length; i++) {
              let boxSelector = gridBoxes[i];
              gridBoxes[i].addEventListener("mouseover", function eventAdder() {
                boxSelector.setAttribute(
                  "class",
                  "grid-container-item hovered col"
                );
                console.log("I was clicked");
              });
            }

          }; addGridEventListeners() // gird listner
         }; gridContainerItem(); // grid container item end
        }; gridContainer(); // grid container end
      }; grid(); // grid end

      // Controls
      function controls() {
        // Control Div
        const controlDiv = () => {
            const controlDiv = interface.appendChild(
              document.createElement("div")
            );
            controlDiv.setAttribute("class", "control-div");
            const controlDivLabel = controlDiv.appendChild(
              document.createElement("h2")
            );
            controlDivLabel.textContent = "Controls";

        // Control Div options
        const controlDivList = () => {
             const controlList = controlDiv.appendChild(
               document.createElement("div")
             );
             controlList.setAttribute("id", "control-list-div");


        // Color picker
        const color = () => {
          // add event listeners
            const colorChoice = controlList.appendChild(
              document.createElement("div")
            );
            colorChoice.setAttribute("id", "color-choice-div");
            const colorChoiceLabel = colorChoice.appendChild(
              document.createElement("h3")
            );
            colorChoiceLabel.textContent = "pick a Color";
            const colorMenu = colorChoice.appendChild(
              document.createElement("select")
            );
            const colorMenuItem = colorMenu.appendChild(
              document.createElement("option")
            );
            colorMenuItem.textContent = "Pick a color!";
          
        }; color()
      }; controls()
    }
        // Grid size
        const gridSize = () => {
          // add event listeners
        }; gridSize()// grid size end
        // reset Grid
        const resetGrid = () => {
          // addEventListener
        }; resetGrid() // reset grid end
      }; controls() //controls end
    }
    interfaceComponents(); // interfaceComponents end
  }
  interface(); // interface end
}
sketch(); // sketch end
