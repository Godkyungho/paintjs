const format=document.querySelector("#format")
const userRange = document.querySelector("#userRange")
const valuesubmit=document.querySelector("#valuesubmit")
const string=document.querySelector("#string")
const judgement=document.querySelector("#judgement")

function update(){
    valuesubmit.max=userRange.value
}

setInterval(update,1000)


function handleTosubmit(event){
    event.preventDefault()
    const userInputNumber = parseInt(valuesubmit.value);
    const randomNumber = Math.round(Math.random()*userRange.value)
    string.innerText=`You chose:${userInputNumber} ,the machine chose: ${randomNumber}`
    
    if (randomNumber===userInputNumber){
        judgement.innerText = "You won!"}
    else{
        judgement.innerText ="You lost!"
    }


}


format.addEventListener("submit",handleTosubmit)




