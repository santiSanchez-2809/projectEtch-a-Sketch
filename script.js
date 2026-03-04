const container = document.querySelector(".container");

let pencilApplied = false; 

document.addEventListener("click", (e) => {
    if(e.button === 0 && e.target.classList.contains("square")) pencilApplied = !pencilApplied;
});

function random(num){
    return Math.floor(Math.random() * num);
}

container.addEventListener("mouseover", (e) =>{
    if(pencilApplied && e.target.classList.contains("square")){
        e.target.style.backgroundColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
    }
})


function generateGrid(rows, columns){
    container.innerHTML = "";

    for(let i = 0; i < rows * columns; i++){
        let div = document.createElement("div"); 
        div.classList.add('square'); 
    
        div.style.flexBasis = `calc(100% / ${columns})`; 
        div.style.height = `calc(100% / ${rows})`; 

        container.appendChild(div); 
    }

}

generateGrid(16, 16);


let gridConfigurationButton = document.querySelector("#gridConfiguration");
gridConfigurationButton.addEventListener("click", () =>{
    let rows = Math.max(Math.min(prompt("Enter the number of rows", 16), 100), 16); 
    let columns = Math.max(Math.min(prompt("Enter the number of rows", 16), 100), 16);

    generateGrid(rows, columns);
    pencilApplied = false;
})


