let addButton = document.getElementById("add")
let users = JSON.parse(localStorage.getItem("users")) || [];
addButton.addEventListener("click", (e) => {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let rePassword = document.getElementById("rePassword").value
        // console.log("Test");
    if (firstName == "" || lastName == "" || phone == "" || email == "" || password == "" || rePassword == "") {
        alert("fill all Data");
        return;
    }

    if (password != rePassword) {
        alert("password ist not equle a repassword!");
        return;
    } else {
        let userExist = users.filter((user) => user.email == email);
        if (userExist.length > 0) {
            alert("this Email is already exist!");
            return;
        }
        let user = { firstName, lastName, phone, email, password }
        users.push(user);
    }

    localStorage.setItem("users", JSON.stringify(users));
    window.location.replace("./index.html");
    console.log(users);
    e.preventDefault();
})