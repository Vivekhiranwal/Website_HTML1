let flag = 0;
function controller(x){
    flag = flag + x;
    slideImage(flag)
}
function slideImage(num) {
    let slides = document.getElementsByClassName("slide")
    if (num == slides.length) {
        flag = 0;
        num = 0;
    } 
    if (num <0) {
        flag = slides.length -1;
        num = slides.length - 1;    
    }
    for (const i of slides) {
        i.style.display = "none"
    }
    slides[num].style.display = "block"
}
slideImage(flag)












