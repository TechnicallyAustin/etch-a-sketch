function sketchv3() {

    function title() {
        // creates title element
        // set title text content
        // set title attributes
        const title = document.body.appendChild(document.createElement("h1"))
        title.setAttribute("class", "title")
        title.setAttribute("id", "title")
        title.textContent = "Technically Sketch"
    } 
    title()

    function interface() {
        // creates interface div
        // sets div attributes
        const interface = document.body.appendChild(document.createElement("div"))
        interface.setAttribute("id", "interface")
        interface.setAttribute("class", "interface")
    }
    interface()

    function grid() {
        // creates grid div
        // sets grid attributes
        const grid = interface.appendChild(document.createElement("div"))
        grid.setAttribute("class", "grid")
        grid.setAttribute("id", "grid")
    }
    grid()

    function controls(){
        // creates  control div
        // creates control div sub div
        const controlMenu = interface.appendChild(document.createElement("div"))
        controlMenu.setAttribute("class", "control-menu")
        controlMenu.setAttribute("id", "control-menu")
        const controlMenuDiv = controlMenu.appendChild(document.createElement("div"))
        controlMenuDiv.setAttribute("class", "control-menu-div")
        controlMenuDiv.setAttribute("id", "control-menu-div")

        const colors = () => {
            const colorsArray = [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue",
                "Indigo",
                "Violet"
            ]

            //creates color control div - child of control div sub div
            // set's div attributes
            const colorsDiv = controlMenuDiv.appendChild(document.createElement("div"))
            colorsDiv.setAttribute("class", "color-control")
            colorsDiv.setAttribute("id", "color-control")

            // creates colorChoices div
            const colorChoices = colorsDiv.appendChild(document.createElement("div"))
            colorChoices.setAttribute("class", "color-choices")
            colorChoices.setAttribute("id", "color-choices")

                // creates color div h3
                    // sets color div attributes
                    // sets color div h3 text content
                    const colorLabel = colorsDiv.appendChild(document.createElement("div"))
                    colorLabel.textContent = "Colors"
                    colorLabel.setAttribute("class", "color-label")
                    colorLabel.setAttribute("id", "color-label")


                // creates color checkboxes
                    // set color checkbox attributes
                    colorsArray.forEach(color => {
                        let button = colorChoices.appendChild(document.createElement("checkbox"))
                        button.setAttribute("id",`${color}`)
                        button.setAttribute("class", `${color}`)
                    })


        }
        colors()



        const gridSize = () => {
            // creates gridZSize control div -- child of control div sub div
                // create input element
                // set input attributes
        }
        const reset = () => {
            // creates reset control div -- child of control div sub div
                // create reset button
                // set reset button attributes
        }
     } 
     controls()
} 
sketchv3()