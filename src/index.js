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
          const colorChoiceLabel = controlList.appendChild(
            document.createElement("h3")
          );
          colorChoiceLabel.textContent = "pick a Color";
        };
        createColorChoice();

        const createReset = () => {
          const reset = controlList.appendChild(document.createElement("div"));
          reset.setAttribute("id", "reset-choice-div");
          const resetLabel = controlList.appendChild(
            document.createElement("h3")
          );
          reset.textContent = "Reset the sketch";
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
            gridContainerItem.setAttribute("class", "grid-container-item");
            for (let j = 0; j < 16; j++) {
              let gridContainerItemColumn = gridContainer.appendChild(
                document.createElement("div")
              );
              gridContainerItemColumn.setAttribute(
                "class",
                "grid-container-item"
              );

              //console.log("this function creates the Divs")
            }
          }
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
