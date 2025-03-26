$(document).ready(function() {
    const $ft_list = $("#ft_list");
    
   
    function createTodo() {
        const txt = prompt("Please Enter TODO LIST :");
        if (txt) {
            const name = new Date().getTime();
            
           
            Cookies.set(name, txt);
            
            const $node = $("<div>").text(txt).click(function() {
                if (confirm("Do you want to delete")) {
                    $(this).remove();
                    Cookies.remove(name);
                }
            });
            
            $ft_list.prepend($node);
        }
    }
    
    
    const allCookies = Cookies.get();
    if (Object.keys(allCookies).length > 0) {
        Object.keys(allCookies).forEach(function(key) {
            const $node = $("<div>").text(allCookies[key]).click(function() {
                if (confirm("Do you want to delete")) {
                    $(this).remove();
                    Cookies.remove(key);
                }
            });
            $ft_list.prepend($node);
        });
    }
    
    $("#newTodo").click(createTodo);
});