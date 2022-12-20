const sketch = () => {
  const createTitle = () => {
    const titleDiv = document.body.appendChild(document.createElement("div"));
    const title = titleDiv.appendChild(document.createElement("h1"));
    titleDiv.setAttribute("class", "title");
    title.textContent = "Technically Sketch";
    //console.log("This function creates the title")
  };
  createTitle();

  const createInterface = () => {
    const interface = document.body.appendChild(document.createElement("div"));
    interface.setAttribute("class", "interface");

    const createControls = () => {
      const controlDiv = interface.appendChild(document.createElement("div"));
      controlDiv.setAttribute("class", "control-div");
      const controlDivLabel = controlDiv.appendChild(
        document.createElement("h2")
      );
      controlDivLabel.textContent = "Controls";

      const controlOptions = () => {
        const controlList = controlDiv.appendChild(
          document.createElement("div")
        );
        controlList.setAttribute("id", "control-list-div");

        const createColorChoice = () => {
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
        };
        createColorChoice();

        const createGridSizeOption = () => {
          const grid = controlList.appendChild(document.createElement("div"));
          grid.setAttribute("id", "grid-size");
          const gridLabel = grid.appendChild(document.createElement("h3"));
          gridLabel.textContent = "Pick a Grid Size";
          
        };
        createGridSizeOption();

        const createReset = () => {
          const reset = controlList.appendChild(document.createElement("div"));
          reset.setAttribute("id", "reset-choice-div");
          const resetLabel = reset.appendChild(document.createElement("h3"));
          resetLabel.textContent = "Reset sketch";
          const resetButton = reset.appendChild(
            document.createElement("button")
          );
          resetButton.textContent = "Reset Sketch";
          resetButton.setAttribute("id", "reset-sketch");
        };
        createReset();

        
      };
      controlOptions();

      const createGridContainer = () => {
        const gridContainer = interface.appendChild(
          document.createElement("div")
        );
        gridContainer.setAttribute("class", "grid-container");

        //console.log("This function creates the grid container")
        const createGridItems = () => {
          for (let i = 0; i < 16; i++) {
            let gridContainerItem = gridContainer.appendChild(
              document.createElement("div")
            );
            gridContainerItem.setAttribute("class", "grid-container-item row");
            for (let j = 0; j < 16; j++) {
              let gridContainerItemColumn = gridContainerItem.appendChild(
                document.createElement("div")
              );
              gridContainerItemColumn.setAttribute(
                "class",
                "grid-container-item col"
              );

              //console.log("this function creates the Divs")
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

            const createControlActions = () => {
              const colorPicker = () => {
                // lets the user pick a color to fill the grid with
                console.log("you picked a new color!");
              };
              const resetGrid = () => {
                // Changes the class of the grid items to remove hovered
                const resetButton = document.getElementById("reset-sketch");

                resetButton.addEventListener("click", () => {
                  for (let i = 0; i < gridBoxes.length; i++) {
                    gridBoxes[i].setAttribute(
                      "class",
                      "grid-container-item col"
                    );
                  }
                });
              };
              resetGrid();
            };
            createControlActions();
          };
          addGridEventListeners();
        };
        createGridItems();
      };
      createGridContainer();
    };
    createControls();
  };
  createInterface();
};
sketch();
