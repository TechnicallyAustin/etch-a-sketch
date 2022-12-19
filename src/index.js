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
                const gridContainerItem = gridContainer.appendChild(document.createElement("div"));
                gridContainerItem.setAttribute("class", "grid-container-item");
            } 

    };
    createGridContainer()


};
sketch()
