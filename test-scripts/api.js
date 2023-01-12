function sketchv3() {
  function title() {
    // creates title element
    // set title text content
    // set title attributes
    const title = document.body.appendChild(document.createElement("h1"));
    title.setAttribute("class", "title");
    title.setAttribute("id", "title");
    title.textContent = "Technically Sketch";
  }

  // title call
  title();

  function interface() {
    // creates interface div
    // sets div attributes
    const interface = document.body.appendChild(document.createElement("div"));
    interface.setAttribute("id", "interface");
    interface.setAttribute("class", "interface");

    function grid() {
      // creates grid div
      // sets grid attributes
      const gridContainer = interface.appendChild(
        document.createElement("div")
      );
      gridContainer.setAttribute("class", "grid-container");

      const grid = gridContainer.appendChild(document.createElement("div"));
      grid.setAttribute("class", "grid");
      grid.setAttribute("id", "grid");
      grid.setAttribute("value", "off");
    }
    grid();

    function controls() {
      // creates  control div
      // creates control div sub div
      const controlContainer = interface.appendChild(
        document.createElement("div")
      );
      controlContainer.setAttribute("class", "control-container");

      const controlMenu = controlContainer.appendChild(
        document.createElement("div")
      );
      controlMenu.setAttribute("class", "controls");
      controlMenu.setAttribute("id", "controls");

      const controlLabel = controlMenu.appendChild(
        document.createElement("h2")
      );
      controlLabel.textContent = "Controls";
      controlLabel.setAttribute("id", "control-label");

      const controlMenuDiv = controlMenu.appendChild(
        document.createElement("div")
      );
      controlMenuDiv.setAttribute("class", "control-menu-div");
      controlMenuDiv.setAttribute("id", "control-menu-div");

      const colors = () => {
        //creates color control div - child of control div sub div
        // set's div attributes
        const colorsDiv = controlMenuDiv.appendChild(
          document.createElement("div")
        );
        colorsDiv.setAttribute("class", "color-control");
        colorsDiv.setAttribute("id", "color-control");

        // creates color div h3
        // sets color div attributes
        // sets color div h3 text content
        const colorLabel = colorsDiv.appendChild(document.createElement("h3"));
        colorLabel.textContent = "Colors";
        colorLabel.setAttribute("class", "color-label");
        colorLabel.setAttribute("id", "color-label");

        // creates colorChoices div
        const colorChoices = colorsDiv.appendChild(
          document.createElement("div")
        );
        colorChoices.setAttribute("class", "color-choices");
        colorChoices.setAttribute("id", "color-choices");

        const colorPicker = colorChoices.appendChild(document.createElement("input"))
        colorPicker.setAttribute("type", "color")
        colorPicker.setAttribute("value", "#000000")
        colorPicker.setAttribute("class", "color-input")

        const colorPickerLabel = colorChoices.appendChild(document.createElement("label"))
        colorPickerLabel.setAttribute("class", "color-input")
        colorPickerLabel.setAttribute("name", "grid-color")
        
      };

      // color call
      colors();

      const gridSize = () => {
        const grid = controlMenuDiv.appendChild(document.createElement("div"));
        grid.setAttribute("id", "grid-control");
        grid.setAttribute("class", "grid-control");

        const gridLabel = grid.appendChild(document.createElement("h3"));
        gridLabel.setAttribute('id', 'grid-label')
        gridLabel.setAttribute('class', 'grid-label')
        gridLabel.textContent = "Grid Size";

        const size = grid.appendChild(document.createElement("input"));
        size.setAttribute("id", "grid-size-input");
        size.setAttribute("class", "grid-size-input");
        size.setAttribute("placeholder", "Enter a size 17-100");
      };
      // grid size call
      gridSize();

      const eraser = () => {
        const erase =  controlMenuDiv.appendChild(document.createElement("div"))
        erase.setAttribute('id', 'erase-control')
        erase.setAttribute("class", "erase-control");

        const eraseLabel = erase.appendChild(document.createElement("h3"))
        eraseLabel.textContent = "Eraser";
        eraseLabel.setAttribute("id","erase-label")
        eraseLabel.setAttribute("class","erase-label");

        const eraseInput = erase.appendChild(document.createElement("checkbox"));
        eraseInput.setAttribute("id", "erase-input");
        eraseInput.setAttribute("class", "erase-input");

         
      }; eraser()

      const dodger = () => {
          const dodge = controlMenuDiv.appendChild(document.createElement("div"));
          dodge.setAttribute('id', 'dodge-control');
          dodge.setAttribute('class', 'dodge-control');

          const dodgeLabel = dodge.appendChild(document.createElement("h3"));
          dodgeLabel.textContent = "lighten";
          dodgeLabel.setAttribute("id", "dodge-label");
          dodgeLabel.setAttribute("class", "dodge-label");

           const dodgeInput = dodge.appendChild(
             document.createElement("checkbox")
           );
           eraseInput.setAttribute("id", "dodge-input");
           eraseInput.setAttribute("class", "dodge-input");
      }; dodger()

        const rainbow = () => {
          const rainb = controlMenuDiv.appendChild(document.createElement("div"));
          rainb.setAttribute('id', 'rain-control')
          rainb.setAttribute('class', "rain-control")

          const rainbowLabel = rainb.appendChild(document.createElement("h3"));
           rainbowLabel.textContent = "Rainbow"
          rainbowLabel.setAttribute("id", "rain-label");
          rainbowlabel.setAttribute("class", "rain-label");

        const rainInput = rainb.appendChild(document.createElement("checkbox"));
        rainInput.setAttribute("id", "rain-input");
        rainInput.setAttribute("class", "rain-input");

      }; rainbow()

      const burner = () => {
          const burn = controlMenuDiv.appendChild(document.createElement("div"));
          burn.setAttribute('id', 'burn-control')
          burn.setAttribute('class', "burn-control")

          const burnLabel = burn.appendChild(document.createElement("h3"));
           burnLabel.textContent = "Darken"
          burnLabel.setAttribute("id", "burn-label");
          burnlabel.setAttribute("class", "burn-label");

          const burnInput = burn.appendChild(
            document.createElement("checkbox")
          );
          burnInput.setAttribute("id", "burn-input");
          burnInput.setAttribute("class", "burn-input");
      }; burner()

      const reset = () => {
        // creates reset control div -- child of control div sub div
        // create reset button
        // set reset button attributes
        const resetDiv = controlMenuDiv.appendChild(
          document.createElement("div")
        );
        const resetLabel = resetDiv.appendChild(document.createElement("h3"));
        resetLabel.textContent = "Reset";
        resetDiv.setAttribute("id", "reset-control");
        resetDiv.setAttribute("class", "reset-control");

        const button = resetDiv.appendChild(document.createElement("button"));
        button.setAttribute("id", "reset");
        button.setAttribute("class", "reset");
        button.setAttribute("value", "reset");
        button.textContent = "Reset Grid";
      };

      // reset call
      reset();
    }
    // control call
    controls();
  }
  // interface call
  interface();
}
// sketch call
sketchv3();
