//로그인
const loginForm = document.querySelector(".login-form")
const loginSubmit = document.querySelector("#id")
const sayHello = document.querySelector("#sayhello")
const hiddenClass = "hidden"
const userName = "username"

function loginSub(event){
    event.preventDefault()
    loginForm.classList.add(hiddenClass)
    const userID = loginSubmit.value
    localStorage.setItem(userName,userID)
    paintGreetings(userID)
}


function paintGreetings(userID){
    sayHello.innerText = `Hello, ${userID}`
    sayHello.classList.remove(hiddenClass)
}

const savedUsername = localStorage.getItem(userName)

if (savedUsername===null){
    loginForm.classList.remove(hiddenClass)
    loginForm.addEventListener("submit",loginSub)
}else{
    paintGreetings(savedUsername)
}

//To do list
const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "toDos"

let toDos=[]

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleteToDo(event){
   const li = event.target.parentElement
   li.remove()
  toDos = toDos.filter((toDo)=>toDo.id !==parseInt(li.id))
  saveToDos()
}

function paintTodo(newTodo){
    const list = document.createElement("li")
    list.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button=document.createElement("button")
    button.innerText="X"
    button.addEventListener("click",deleteToDo)
    list.appendChild(span)
    list.appendChild(button)
    toDoList.appendChild(list)
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo=toDoInput.value;
    toDoInput.value=""
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveToDos()
}



toDoForm.addEventListener("submit",handleToDoSubmit)



const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos =JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintTodo)
}



//clock

const clock = document.querySelector("#clock")


function count(){
    const H = String(new Date().getHours()).padStart(2,"0")
    const M = String(new Date().getMinutes()).padStart(2,"0")
    const S = String(new Date().getSeconds()).padStart(2,"0")

    clock.innerText = `${H}:${M}:${S}`
}

setInterval(count,1000)

//배경 삽입



const pictures = ["1.jpg","2.jpg","3.jpg"]

const randomPictures = pictures[Math.floor(Math.random()*pictures.length)]

const backgroundImage = document.querySelector("#bg")

backgroundImage.src = `${randomPictures}`

document.body.appendChild(backgroundImage)

//날씨

const API_KEY="794575afd5099dd330a45c795ce159b4"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response=>response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText= data.name
        weather.innerText = `${data.weather[0].main} /${data.main.temp}`
    })

}
function onGeoError(){
    alert("Can't find you.No weather for you.")
    
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)


