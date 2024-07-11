let usEx = localStorage.getItem("logInName");
if(usEx == null){
    alert("you need to login")
    window.location = "./index.html"
}