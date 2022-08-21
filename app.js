const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLogSubmit(event) {
    // submit event시 새로고침되는 기본 기능을 막기
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLogSubmit);