function sketch() {

  function title() {
    // creates the title
    const createTitle = document.body.appendChild(document.createElement("div"));
    const title = createTitle.appendChild(document.createElement("h1"));
    title.setAttribute("class", "title");
    title.textContent = "Technically Sketch";
  }
  title(); // calls the title object


  function createInterface() {
    // creates the general HTML layout for the page
    // creates interface div with id interface
    const createInterface = document.body.appendChild(document.createElement("div"));
    createInterface.setAttribute("class", "interface");

    function interface() {
      // contains interface functions

      function createControls() {
        // creates a div with id controls

        function controlOptions() {
          // creates a div control-options that houses all game controls
        
        const createColorChoice = () => {
          // dropDown or new idea allows user to change color
        };
        const createResetOption = () => {
          // creates a reset button
          // set attributes
          // add event Listeners
          const resetGrid = () => {
            // clears the grid by toggling the hover class
            // add event Listeners
          };
        };
      };

        function createControlEventListeners() {
          // createes event listeners for each control
          // color
          // size
          // reset
        }
      }
      createControls(); // creates the contol area

      function grid() {
        function createGridContainer() {
          // create an html element that houses the grid
          const createGridItems = () => {
            // runs a nested loop to create an n by n grid
          };
          const createGridItemEvent = () => {
            // add's event listeners to each grid item
          };
          const changeGridSize = () => {
            // given the current size of the grid changes size
            // responsive resizing.
            // grid occupies the same amount of space.
          };

          const deleteGrid = () => {
            // to be called after the size change alert
          };
        }
      }
      grid(); // calls the grid() object
    }
    interface(); // calls the interface() object
  }
  createInterface(); // calls the createInterface() object


}
sketch(); // calls the sketch game
