const database = firebase.database().ref();

database.on("child_added",showUsers)
//submitButton.addEventListener("click",showUsers)
function showUsers(data){
    data = data.val()
    let names= document.querySelector("#names")
    names.style.display = "block"
    if (!data.hasOwnProperty("message")) {
    let name = data.NAME
    let p = document.createElement("p")
    p.innerText= name
    names.appendChild(p)
    }
}