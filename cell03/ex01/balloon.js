const balloon = document.getElementById("balloon");

let size = 200;  
const maxSize = 420;  
const minSize = 200;  
const colors = ["red", "green", "blue"]; 
let colorIndex = 0;  


balloon.addEventListener("click", () => {
    if (size >= maxSize) {
        size = minSize;  
    } else {
        size += 10;
    }

    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});


balloon.addEventListener("mouseleave", () => {
    if (size > minSize) {
        size -= 5;
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});
