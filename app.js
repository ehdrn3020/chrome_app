const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function onLogSubmit(event) {
    // submit event시 새로고침되는 기본 기능을 막기
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    
    greeting.innerText=`Hellow ${username}`;
    greeting.classList.remove("hidden");

}
loginForm.addEventListener("submit", onLogSubmit);
