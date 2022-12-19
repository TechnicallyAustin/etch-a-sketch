const sketch = () => {
  const createTitle = () => {
    const title = document.body.appendChild(document.createElement("h1"));
    title.textContent = "Technically Sketch";
    //console.log("This function creates the title")
  };
  createTitle();

  const createControls = () => {
    const createGridContainer = () => {
      const gridContainer = document.body.appendChild(
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

          let gridContainerSubItem = gridContainerItem.appendChild(
            document.createElement("div")
          );
          gridContainerSubItem.setAttribute("class", "grid-container-sub-item");

          //console.log("this function creates the Divs")
        }
      };
      createGridItems();
    };
    createGridContainer();
  };
  createControls()
};
sketch();
