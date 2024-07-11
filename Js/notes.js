console.log("Hi")
let addButton = document.getElementById("add")
let notesDiv = document.getElementById("notes")
let notes = JSON.parse(localStorage.getItem("note")) || []
let userNameDiv = document.getElementById("userName")
let user = JSON.parse(localStorage.getItem("logInName"))
userNameDiv.innerHTML = `Welcome ${user.firstName}`
addButton.addEventListener("click", (e) => {
    console.log("Hallo")
    let dateOfNote = document.getElementById("dateOfNote").value
    let myNote = document.getElementById("myNote").value
    notes.push({
        myNote,
        dateOfNote,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`
    })
    localStorage.setItem("note", JSON.stringify(notes))
    e.preventDefault()
    display();
});
const display = () => {
    console.log(userName)

    notesDiv.innerHTML = ""
    notes.map((note) => {
        console.log(note.name)
        notesDiv.innerHTML += `
        <div>
        ${note.myNote} <<<<<< ${note.dateOfNote}<<<<<< ${note.name}
        </div>
        `
    })
    console.log(notes)

}
display()