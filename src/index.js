const sketch = () => {
  const createGridContainer = () => {
    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("class", "grid-container");

    const createGridItems = () => {
      const gridContainerItem = gridContainer.appendChild(
        document.createElement("div")
      );
      gridContainerItem.setAttribute("class", "grid-container-item");
      // create 16 div containers
    };
    createGridItems();
  };

  //const squrePrompt = () => {
    //creates an alert
    // ask for # of squares per side of the nes grid.
    // should remove the existing grid and a new grid should be generated
    // limit 100
    // look into button tags asnd running scripts
    // or prrompts
  //};
  createGridContainer();
};
sketch()