const sketch = () => {
  const createTitle = () => {
    const titleDiv= document.body.appendChild(document.createElement("div"));
    const title = titleDiv.appendChild(document.createElement("h1"));
    titleDiv.setAttribute("class", "title")
    title.textContent = "Technically Sketch";
    //console.log("This function creates the title")
  };
  createTitle();


  const createInterface = () => {
    const interface = document.body.appendChild(document.createElement("div"))
    interface.setAttribute("class", "interface")

  const createControls = () => {
    const controlDiv = interface.appendChild(document.createElement("div"))
    controlDiv.setAttribute("class", "control-div")
    
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
}
createInterface();
};
sketch();
