const title = document.querySelector('h1:first-child');

function htClick() {
    const clickedClass = 'active'
    // if(title.classList.contains(clickedClass)){
    //     title.classList.remove(clickedClass);
    // }
    // else {
    //     title.classList.add(clickedClass);
    // }

    // 위코드와 똑같은 기능
    title.classList.toggle(clickedClass);
} 

title.addEventListener("click", htClick);
