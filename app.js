const controls = document.querySelectorAll(".controls");
const control = document.querySelectorAll(".control");

function pageTransitions(){
    //remove the activebutton class on the buttons that are not selected
    for(let i = 0; i<control.length; i++){
        control[i].addEventListener("click",function(){
            let curActiveBtn = document.querySelectorAll(".active-btn");
            curActiveBtn[0].className = curActiveBtn[0].className.replace("active-btn","");
            this.className += ' active-btn';
        });
    }
}

pageTransitions();