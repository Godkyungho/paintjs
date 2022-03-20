const clockTitle = document.querySelector("#clock")
const christmas = new Date(new Date().getFullYear(),11,25).getTime()


function Merry(){
    const today = new Date().getTime()
    const diff = christmas-today
    const ddayD = String(Math.floor(diff/(1000*60*60*24))).padStart(2,"0")
    const ddayH = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,"0")
    const ddayM = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0")
    const ddayS = String(Math.floor((diff % (1000*60)/1000))).padStart(2,"0")
    clockTitle.innerText =`${ddayD}d ${ddayH}h ${ddayM}m ${ddayS}s`
}

setInterval(Merry,1000)
