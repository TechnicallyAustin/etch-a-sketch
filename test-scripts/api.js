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
    }; grid();

    function controls() {

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
        const colorsDiv = controlMenuDiv.appendChild(
          document.createElement("div")
        );
        colorsDiv.setAttribute("class", "color-control");
        colorsDiv.setAttribute("id", "color-control");

        const colorLabel = colorsDiv.appendChild(document.createElement("h3"));
        colorLabel.textContent = "Colors";
        colorLabel.setAttribute("class", "color-label");
        colorLabel.setAttribute("id", "color-label");

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
      }; colors();

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
      }; gridSize();

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
           dodgeInput.setAttribute("id", "dodge-input");
           dodgeInput.setAttribute("class", "dodge-input");
      }; dodger()

      const burner = () => {
          const burn = controlMenuDiv.appendChild(document.createElement("div"));
          burn.setAttribute('id', 'burn-control')
          burn.setAttribute('class', "burn-control")

          const burnLabel = burn.appendChild(document.createElement("h3"));
           burnLabel.textContent = "Darken"
          burnLabel.setAttribute("id", "burn-label");
          burnLabel.setAttribute("class", "burn-label");

          const burnInput = burn.appendChild(
            document.createElement("checkbox")
          );
          burnInput.setAttribute("id", "burn-input");
          burnInput.setAttribute("class", "burn-input");
      }; burner()

       const rainbow = () => {
         const rainbower = controlMenuDiv.appendChild(document.createElement("div"));
         rainbower.setAttribute("id", "burn-control");
         rainbower.setAttribute("class", "burn-control");

         const rainLabel = rainbower.appendChild(document.createElement("h3"));
         rainLabel.textContent = "Rainbow";
         rainLabel.setAttribute("id", "rain-label");
         rainLabel.setAttribute("class", "rain-label");

         const rainInput = rainbower.appendChild(document.createElement("checkbox"));
         rainInput.setAttribute("id", "rain-input");
         rainInput.setAttribute("class", "rain-input");
       }; rainbow();


      const reset = () => {
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
      }; reset();
    }; controls();
  }; interface();
}; sketchv3();
