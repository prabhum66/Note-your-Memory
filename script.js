//selecting popupbox ,popup-overlay,popup-button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupbutton = document.getElementById("add-popup-button")

    popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancel = document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//container.add,title,Note
var container = document.querySelector(".container")
var add = document.getElementById("add")
var title = document.getElementById("title")
var Note = document.getElementById("Note")

add.addEventListener("click",function(event){
   event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","Book-Container")
    div.innerHTML=
    `<h2>${title.value}</h2>
            <h5></h5>
            <p>${Note.value}</p>
            <button onclick="deletenote(event)">Delete</button>
            `
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletenote(event)
{
event.target.parentElement.remove()
}