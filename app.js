const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")

const INITIAL_COLOR = "#2c2c2c"

canvas.width = 700
canvas.height = 700






//default
ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;


function stopPainting(){
    painting = false;
}

function startPainting(){
    if(filling===false){
        painting=true;
    }
}

function onMouseMove(event){
    const x =event.offsetX
    const y =event.offsetY
    if(!painting){
        ctx.beginPath()
        ctx.moveTo(x,y)
    }else{
        ctx.lineTo(x,y)
        ctx.stroke()
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


Array.from(colors).forEach(potato =>potato.addEventListener("click",handleColorClick))

function handleRangeChange(event){
    const size = event.target.value
    ctx.lineWidth =size
}

function handleModeClick(){
    if(filling===false){
        filling=true;
        mode.innerText ="PAINT"
    }else{
        filling=false;
        mode.innerText="FILL"
    }
    console.log(filling)
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,700,700)
    }
}

if(range){
    range.addEventListener("input",handleRangeChange)
}

if(mode){
    mode.addEventListener("click",handleModeClick)
}



if(canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown",startPainting)
    canvas.addEventListener("mouseup",stopPainting)
    canvas.addEventListener("mouseleave",stopPainting)
    canvas.addEventListener("click",handleCanvasClick)
}