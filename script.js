function generateGrid(rows, columns){
    const container = document.querySelector(".container");

    container.innerHTML = "";

    for(let i = 0; i < rows * columns; i++){
        let div = document.createElement("div"); 
        div.classList.add('square'); 
    
        div.style.flexBasis = `calc(100% / ${columns})`; 
        div.style.height = `calc(100% / ${rows})`; 

        container.appendChild(div); 
    }

    document.querySelectorAll(".square").forEach(square =>{
    square.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "grey";
    })
})

}

generateGrid(16, 16);


let gridConfigurationButton = document.querySelector("#gridConfiguration");
gridConfigurationButton.addEventListener("click", () =>{
    let rows = Math.max(Math.min(prompt("Enter the number of rows", 16), 100), 16); 
    let columns = Math.max(Math.min(prompt("Enter the number of rows", 16), 100), 16);

    generateGrid(rows, columns);
})