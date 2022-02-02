"use strict";


/*

E1
Study the HTML-file in this exercise.

We will now code a function gridMaker() that accepts these arguments (parameters):
- gridContainer: a reference to the HTML-element that is the grid
- R: the number of rows that the grid must have
- C: the number of columns that the grid must have

gridMaker then must update the CSS properties gridTemplateColumns and gridTemplateRows of the gridContainer.
Note that the grid DOES NOT yet need to be filled with divs!


TEST
The call gridMaker( document.querySelector("#grid"), 2, 6 ) should result in the HTML-element
with id "grid" having 2 rows and 6 columns

The call gridMaker( document.querySelector("#grid"), 4, 1 ) should result in the HTML-element
with id "grid" having 4 rows and 1 columns

The HTML-element #grid will however be empty since we have not appended any other elements to it.


*/

function gridMaker(gridContainer, R, C){
    let gridcontainer = document.querySelector(gridContainer);
    let div = document.createElement("div");
    div.style.display = "grid"
    div.style.height = "100vh"
    div.style.backgroundColor = "lightGray";
    div.style.gridTemplateRows = R;
    div.style.gridAutoColumns = C;

    gridcontainer.appendChild(div);
}

gridMaker("#grid", "2", "6")
console.log(gridMaker);