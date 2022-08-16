const title = document.querySelector('#title');

function htClick() {
    const clickedClass = 'active'
    if(title.className === clickedClass){
        title.className = "";
    }
    else {
        title.className = clickedClass;
    }
} 

title.addEventListener("click", htClick);
