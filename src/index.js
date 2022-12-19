const sketch = () => {

    const createTitle = () => {
        const title = document.body.appendChild(document.createElement('h1'));
        title.textContent = "Technically Sketch"
    }
    createTitle();


  const createGridContainer = () => {
        const main = document.getElementById("main")
        const gridContainer = main.appendChild(document.createElement("div"))
        gridContainer.setAttribute("class", "grid-container");

            const createGridItems = () => {
                for (let i = 0; i < 16; i++) {
                    let gridContainerItem = gridContainer.appendChild(document.createElement("div"));
                    gridContainerItem.setAttribute("class", "grid-container-item");
                }
            };
            createGridItems()
    };
    createGridContainer()


};
sketch()
