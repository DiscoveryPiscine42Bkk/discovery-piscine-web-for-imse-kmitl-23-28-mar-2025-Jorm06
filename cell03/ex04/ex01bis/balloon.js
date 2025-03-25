$(document).ready(function() {
    const $balloon = $("#balloon");
    
    let size = 200;  
    const maxSize = 420;  
    const minSize = 200;  
    const colors = ["red", "green", "blue"]; 
    let colorIndex = 0;  

    $balloon.on("click", function() {
        if (size >= maxSize) {
            size = minSize;  
        } else {
            size += 10;
        }

        colorIndex = (colorIndex + 1) % colors.length;
        $balloon.css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    });

    $balloon.on("mouseleave", function() {
        if (size > minSize) {
            size -= 5;
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        }

        $balloon.css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    });
});