let logInButton = document.getElementById("login");
let users = JSON.parse(localStorage.getItem("users")) || []
logInButton.addEventListener("click", (e) => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email == "" || password == "") {
        alert("fill the data!");
        return;
    } else {
        let acceptUser = users.filter((user) => user.email == email && user.password == password)
            // console.log(acceptUser[0])
        if (acceptUser.length > 0) {
            // alert("email and password are already exist!");
            localStorage.setItem("logInName", JSON.stringify(acceptUser[0]))
            window.location.replace("./notes.html");
            return;
        } else {
            alert("Email or Password is not correct!");
        }
    }
    e.preventDefault();
})