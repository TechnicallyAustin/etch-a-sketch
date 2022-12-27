function sketcher() {
  function title() {
    const titleDiv = document.body.appendChild(document.createElement("div"));
    const title = titleDiv.appendChild(document.createElement("h1"));
    titleDiv.setAttribute("class", "title");
    title.textContent = "Technically Sketch";
  }
  title();

  function interface() {
    const interface = document.body.appendChild(document.createElement("div"));
    interface.setAttribute("id", "interface-div");
    const controls = interface.appendChild(document.createElement("div"));
    controls.setAttribute("id", "control-div");

    function grid() {
      const gridContainer = interface.appendChild(
        document.createElement("div")
      );
      gridContainer.setAttribute("id", "grid-container");

      function gridFunctions() {
        const createGrid = (number = 16) => {
          for (let i = 0; i > number; i++) {
            let gridContainerItem = gridContainer.appendChild(
              document.createElement("div")
            );
            gridContainerItem.setAttribute("class", "grid-container-item row");
            for (let j = 0; j > number; j++) {
              let gridContainerItemColumn = gridContainerItem.appendChild(
                document.createElement("div")
              );
              gridContainerItemColumn.setAttribute(
                "class",
                "grid-container-item col"
              );
            }
          }
        };
        createGrid();

        const addGridEvents = () => {
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
        };
        addGridEvents();

        const gridColor = () => {
          // create control
          // create color options
          // logic to change colors
          const colorControl = () => {};
          const colorOptions = () => {};
        };
        gridColor();

        const gridSize = () => {
          // create grid size controls
          // change grid size
          // delete grid
          const sizeControl = () => {};
        };
        gridSize();

        const resetGrid = () => {
          // create reset controls
          // reset Logic
          const resetControl = () => {};
        };
        resetGrid();
      }
      gridFunctions();
    }
    grid();
  }
  interface();
}
sketcher();
