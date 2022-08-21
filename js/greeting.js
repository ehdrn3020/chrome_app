const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLogSubmit(event) {
    // submit event시 새로고침되는 기본 기능을 막기
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");

    // username 저장
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText=`Hellow ${username}`;
    greeting.classList.remove("hidden");
}
const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLogSubmit);
} else {
    paintGreeting(saveUsername);
}