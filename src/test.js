function techSketch() {

  function title() {

    const titleDiv = document.body.appendChild(document.createElement("div"));
    const title = titleDiv.appendChild(document.createElement("h1"));
    titleDiv.setAttribute("class", "title");
    title.textContent = "Technically Sketch";

  } title()

  function interface() {

    function interfaceComponents() {

      const interface = document.body.appendChild(document.createElement("div"));
      interface.setAttribute("class", "interface");

      function grid() {

        const gridContainer = () => {
          const gridContainer = interface.appendChild(document.createElement("div"));
          gridContainer.setAttribute("class", "grid-container");

          const gridContainerItem = (number = 16) => {
            for (let i = 0; i < number; i++) {
              let gridContainerItem = gridContainer.appendChild(document.createElement("div"));
              gridContainerItem.setAttribute("class", "grid-container-item row");
                for (let j = 0; j < number; j++) {
                  let gridContainerItemColumn = gridContainerItem.appendChild(document.createElement("div"));
                  gridContainerItemColumn.setAttribute("class", "grid-container-item col");
                }
            }

            const addGridEvents = () => {
              const gridBoxes = document.getElementsByClassName("col");
                for (let i = 0; i < gridBoxes.length; i++) {
                  let boxSelector = gridBoxes[i];
                  gridBoxes[i].addEventListener("mouseover", function eventAdder() {
                    boxSelector.setAttribute("class", "grid-container-item hovered col");
                    console.log("I was clicked");
                  }
                );
              }

            }; addGridEvents()

          }; gridContainerItem()

        }; gridContainer()

      } grid()

      function controls() {

        function controlDiv() {
          const controlDiv = interface.appendChild(document.createElement("div"));
          controlDiv.setAttribute("class", "control-div");
          const controlDivLabel = controlDiv.appendChild(document.createElement("h2"));
          controlDivLabel.textContent = "Controls";

          function controlDivList() {
            const controlList = controlDiv.appendChild(document.createElement("div"));
            controlList.setAttribute("id", "control-list-div");

            const color = () => {
              const colorChoice = controlList.appendChild(document.createElement("div"));
              colorChoice.setAttribute("id", "color-choice-div");
              const colorChoiceLabel = colorChoice.appendChild(document.createElement("h3"));
              colorChoiceLabel.textContent = "pick a Color";
              const colorMenu = colorChoice.appendChild(document.createElement("select"));
              const colorMenuItem = colorMenu.appendChild(document.createElement("option"));
              colorMenuItem.textContent = "Pick a color!";
            }; color();

            const gridSize = () => {
              const grid = controlList.appendChild(document.createElement("div"));
              grid.setAttribute("id", "grid-choice-div");
              const gridLabel = grid.appendChild(document.createElement("h3"));
              gridLabel.textContent = "Grid Size";
              const gridSetting = grid.appendChild(document.createElement("input"));
              gridSetting.setAttribute("id", "grid-size-input");
              gridSetting.setAttribute("placeholder", "17- 100");
              const submitGrid = grid.appendChild(document.createElement("button"));
              submitGrid.setAttribute("type", "submit");

              const deleteGrid = () => {
                const gridBoxes = document.getElementsByClassName("col");
                for (let i = 0; i > gridBoxes.length; i ++){
                  gridBoxes[i].remove()
                }
              }; deleteGrid()


              const changeGrid = () => {
              gridSetting.addEventListener('click', () => {
                deleteGrid()
                let input = prompt('Enter a grid size please')
                gridContainerItem(input)
              })
            }; changeGrid()
            }; gridSize()
              
          
            const resetGrid = () => {
              const createReset = () => {
                const reset = controlList.appendChild(
                  document.createElement("div")
                );
                reset.setAttribute("id", "reset-choice-div");
                const resetLabel = reset.appendChild(
                  document.createElement("h3")
                );
                resetLabel.textContent = "Reset sketch";
                const resetButton = reset.appendChild(
                  document.createElement("button")
                );
                resetButton.textContent = "Reset Sketch";
                resetButton.setAttribute("id", "reset-sketch");

                const actionReset = () => {
                  const gridBoxes = document.getElementsByClassName("col");
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
                // grid functions
                actionReset()
              }; createReset()
            }; resetGrid()
            // control functions
          }; controlDivList()
        }; controlDiv()
      }; controls()
      // interface functions
    }; interfaceComponents();
  }; interface();
  // game functions
}; techSketch();
