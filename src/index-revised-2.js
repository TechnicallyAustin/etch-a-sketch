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
          };
          gridContainerItem();
        };
        gridContainer(); // grid container end
      }
      grid(); // grid end

      function controls() {
        // Control Div
        const controlDiv = () => {}; // control div end
        // Control Div options
        const controlDivList = () => {}; // control div list end
        // Color picker
        const color = () => {
          // add event listeners
        }; // color end
        // Grid size
        const gridSize = () => {
          // add event listeners
        }; // grid size end
        // reset Grid
        const resetGrid = () => {
          // addEventListener
        }; // reset grid end
      } //controls end
    }
    interfaceComponents(); // interfaceComponents end
  }
  interface(); // interface end
}
sketch(); // sketch end
