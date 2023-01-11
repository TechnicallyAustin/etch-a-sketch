function sketch() {

    function interface() {

        function grid() {
            const gridSelector = document.querySelector(".grid")
            const gridCol = gridSelector.childNodes
            

            

            function controls() {

                function colors() {
                    const colorInput = document.querySelector(".color-input")
                    let color = colorInput.value // gets the hex code for the color
                    const colorize = () => {}
                    function draw() {

                        gridCol.forEach(col => {
                            let rows = col.childNodes
                            rows.forEach(row => {
                                row.addEventListener("click", () => {
                                        const colorInput = document.querySelector(".color-input");
                                        let color = colorInput.value; // gets the hex code for the color
                                        row.setAttribute("class", `grid-container-item row ${color}`);
                                        row.setAttribute('style', `background-color:${color}`)
                                        console.log(color);
                                    })
                                })
                        })
                    }; draw() // contains logic to fill grid boxes with color on mouse down


                    function stopDraw() {} // removes/change event listeners so that boxes will not be drawn in mouseup
                    function toggle() {} // toggles between draw() and stopDraw() given a mouse click


                    

                }; colors() // controls color options on the grid

                function size() {
                    function deleteGrid() {} // rmeoves thee grid

                    function newGridSize(num) {} // given the input creates the desired grid size

                    function changeSize() {
                        const gridInputs = () => {} // return grid size input

                    } // adds event listeners to the grid

                } // controls the size of the grid

                function eraser() {} // removes a drawn grid box

                function rainbow() {} // paints with the colors of the rainbow

                function dodge() {} // ligthens the a drawn in grid box

                function burn() {} // darkens a drawn in grid box

                function reset() {
                    function clearGrid() {}
                    function resetEvents() {}
                    
                } // resets all grid boxes
            }; controls()

        }; grid()
    }; interface()
}; sketch()