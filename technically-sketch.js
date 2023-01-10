function sketch() {

    function interface() {

        function grid() {
            const gridSelector = document.querySelector(".grid")
            const gridCol = gridSelector.childNodes
            const gridItem = () => {
                for (let i = 0; i < gridCol.length; i++){
                    let gridBox = gridCol[i].childNodes
                    console.log(gridBox)
                }
            }

            function controls() {

                function colors() {
                    const colorInput = document.querySelector(".color-input")
                    let color = colorInput.value // gets the hex code for the color
                   
                    function draw() {
                        gridItem()
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
            }

        }
    }
}