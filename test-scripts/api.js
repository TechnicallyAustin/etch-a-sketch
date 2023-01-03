function sketchv3() {

    function title() {
        // creates title element
        // set title text content
        // set title attributes
        const title = document.body.appendChild(document.createElement("h1"))
        title.setAttribute("class", "title")
        title.setAttribute("id", "title")
        title.textContent = "Technically Sketch"
    };

    // title call
    title()

    function interface() {
      // creates interface div
      // sets div attributes
      const interface = document.body.appendChild(
        document.createElement("div")
      );
      interface.setAttribute("id", "interface");
      interface.setAttribute("class", "interface");

      function grid() {
        // creates grid div
        // sets grid attributes
        const gridContainer = interface.appendChild(document.createElement("div"))
        gridContainer.setAttribute("class", "grid-container")

        const grid = gridContainer.appendChild(document.createElement("div"));
        grid.setAttribute("class", "grid");
        grid.setAttribute("id", "grid");

        function createGrid(n = 16) {
            //const gridDiv = document.getElementById("grid")
            //for (let i = 0; i < 16; i++){
            //    let gridItem = gridDiv.appendChild(document.createElement("div"))
            //    gridItem.setAttribute("class", "col")
//
            //    for (let j = 0; j < 16; j++){
            //    let col = gridItem.appendChild(document.createElement("div"));
            //    col.setAttribute("class", "row");
            //    }
            //}


             for (let i = 0; i < n; i++) {
               let gridDiv = grid.appendChild(
                 document.createElement("div")
               );
               gridDiv.setAttribute(
                 "class",
                 "grid-container-item col"
               );
               for (let j = 0; j < n; j++) {
                 let gridContainerItemColumn = gridDiv.appendChild(
                   document.createElement("div")
                 );
                 gridContainerItemColumn.setAttribute(
                   "class",
                   "grid-container-item row"
                 );

                 //console.log("this function creates the Divs")
               }
             }

            
        }

        //creaete grid call
        createGrid()




      };

      // grid call
      grid();

      function controls() {
        // creates  control div
        // creates control div sub div
        const controlContainer = interface.appendChild(document.createElement("div"))
        controlContainer.setAttribute("class", "control-container")


        const controlMenu = controlContainer.appendChild(
          document.createElement("div")
        );
        controlMenu.setAttribute("class", "controls");
        controlMenu.setAttribute("id", "controls");
        
        const controlLabel = controlMenu.appendChild(document.createElement("h2"))
        controlLabel.textContent = "Controls"
        controlLabel.setAttribute("id", "control-label")

        const controlMenuDiv = controlMenu.appendChild(
          document.createElement("div")
        );
        controlMenuDiv.setAttribute("class", "control-menu-div");
        controlMenuDiv.setAttribute("id", "control-menu-div");

        const colors = () => {
          const colorsArray = [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "indigo",
            "violet",
          ];

          //creates color control div - child of control div sub div
          // set's div attributes
          const colorsDiv = controlMenuDiv.appendChild(
            document.createElement("div")
          );
          colorsDiv.setAttribute("class", "color-control");
          colorsDiv.setAttribute("id", "color-control");

          // creates colorChoices div
          const colorChoices = colorsDiv.appendChild(
            document.createElement("div")
          );
          colorChoices.setAttribute("class", "color-choices");
          colorChoices.setAttribute("id", "color-choices");

          // creates color div h3
          // sets color div attributes
          // sets color div h3 text content
          const colorLabel = colorsDiv.appendChild(
            document.createElement("h3")
          );
          colorLabel.textContent = "Colors";
          colorLabel.setAttribute("class", "color-label");
          colorLabel.setAttribute("id", "color-label");

          // creates color checkboxes
          // set color checkbox attributes
          colorsArray.forEach((color) => {
            let button = colorChoices.appendChild(
              document.createElement("checkbox")
            );
            button.setAttribute("id", `${color}`);
            button.setAttribute("class", `${color} color-boxes`);
          });
        };

        // color call
        colors();

        const gridSize = () => {
          // creates gridZSize control div -- child of control div sub div
          // create input element
          // set input attributes
          const grid = controlMenuDiv.appendChild(document.createElement("div"))
          const gridLabel = grid.appendChild(document.createElement("h3"))
          gridLabel.textContent = "Grid Size"
          grid.setAttribute("id", "grid-control")
          grid.setAttribute("class", "grid-control")

          const size = grid.appendChild(document.createElement("input"))
          size.setAttribute("id", "grid-size-input")
          size.setAttribute("class", "grid-size-input")
          size.setAttribute("placeholder", "Enter a size 17-100")
        };

        // grid size call
        gridSize()

        const reset = () => {
          // creates reset control div -- child of control div sub div
          // create reset button
          // set reset button attributes
          const resetDiv = controlMenuDiv.appendChild(document.createElement("div"))
          const resetLabel = resetDiv.appendChild(document.createElement("h3"))
          resetLabel.textContent = "Reset"
          resetDiv.setAttribute("id", "reset-control")
          resetDiv.setAttribute("class", "reset-control")

          const button = resetDiv.appendChild(document.createElement("button"))
          button.setAttribute("id", "reset")
          button.setAttribute("class", "reset")
          button.setAttribute("value", "reset")
          button.textContent = "Reset Grid"
        };

        // reset call
        reset()


      }
      // control call
      controls();

    }
    // interface call
    interface();
}
// sketch call
sketchv3()