let logoutButto = document.getElementById("logout");
logoutButto.addEventListener("click",(e)=>{
    console.log("Hi")
    localStorage.removeItem('logInName');
    window.location ="./index.html";
    e.preventDefault();
})
