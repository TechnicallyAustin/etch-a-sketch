function sketch() {

    function interface(){

        function grid() {
            const gridSelector = document.querySelector(".grid")

            function controls(){

                function colors() {

                    function draw(){} // contains logic to fill grid boxes with color on mouse enter
                    function stopDraw() {} // removes/change event listeners so that boxes will not be drawn in
                    function toggle() {} // toggles between draw() and stopDraw() given a mouse click

                }  // controls color options on the grid

                function size() {
                    function deleteGrid() {} // rmeoves thee grid

                    function newGridSize() {} // given the input creates the desired grid size

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