const title = document.querySelector('#title');

function htClick() {
    title.style.color = 'red';
}

function htMouseEnter() {
    title.innerHTML = "HI HI";
}

function htMouseLeave() {
    title.innerHTML = "BYE BYE";
}

function htWindowResize() {
    document.body.style.backgroundColor = "skyblue";
}
console.dir(title);
console.dir(document.body);

title.onclick = htClick ;
title.addEventListener("mouseenter", htMouseEnter);
title.addEventListener("mouseleave", htMouseLeave);
window.addEventListener("resize", htWindowResize);