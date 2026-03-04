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

function random(num){
    return Math.floor(Math.random() * num);
}

const container = document.querySelector(".container");

generateGrid(16, 16);

let gridConfigurationButton = document.querySelector("#gridConfiguration");
gridConfigurationButton.addEventListener("click", () =>{
    let rows = Math.max(Math.min(prompt("Enter the number of rows", 16), 100), 16); 
    let columns = Math.max(Math.min(prompt("Enter the number of rows", 16), 100), 16);

    generateGrid(rows, columns);
    pencilApplied = false;
})

let paintBlack = true;
let randomizeColor = false;
let progresivelyDarken = false;

let paintOptions = [3];

let paintBlackButton = document.querySelector("#blackPaint");
paintBlackButton.addEventListener("click", () => {
    paintBlack = true;
    randomizeColor = false;
    progresivelyDarken = false;
    
})

let colorRandomizerButton = document.querySelector("#colorRandomizer");
colorRandomizerButton.addEventListener("click", () => {
    randomizeColor = true
    paintBlack = false;
    progresivelyDarken = false;
})

let progresivelyDarkenButton = document.querySelector("#progressiveDarkener"); 
progresivelyDarkenButton.addEventListener("click", () => {
    progresivelyDarken = true; 
    paintBlack = false; 
    randomizeColor = false; 
})

let pencilApplied = false; 

document.addEventListener("click", (e) => {
    if(e.button === 0 && e.target.classList.contains("square")) pencilApplied = !pencilApplied;
});


container.addEventListener("mouseover", (e) =>{
    if(pencilApplied && e.target.classList.contains("square")){

        if(paintBlack){
            e.target.style.backgroundColor = "black";
            return; 
     
        }else if(randomizeColor){
            e.target.style.backgroundColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
            return
            
        }else{
            let currentOpacity = e.target.dataset.opacity || 0; 
            currentOpacity = Math.min(Number(currentOpacity) + 0.1, 1); 

            e.target.dataset.opacity = currentOpacity; 
            e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`; 
        }

        e.target.dataset.opacity = currentOpacity;
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
        
    }
}); 




