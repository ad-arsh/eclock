const slider = document.getElementsByClassName("slider")[0];
const imageWidth = document.querySelector(".item img").clientWidth;
const imageCount = document.querySelectorAll(".item img").length;

console.log(imageCount)

let i=0;
setInterval(() => {
    if (i >= imageCount-1) {
        slider.scrollLeft = 0;
        i=0;
    } else {
        slider.scrollLeft += imageWidth;
        i++;
    }
}, 5000);