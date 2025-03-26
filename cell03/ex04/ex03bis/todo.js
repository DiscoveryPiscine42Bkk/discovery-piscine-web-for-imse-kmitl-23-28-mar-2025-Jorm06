$(document).ready(function() {
    const $ft_list = $("#ft_list");
    
   
    function createTodo() {
        const txt = prompt("Please Enter TODO LIST :");
        if (txt) {
            const name = new Date().getTime();
            document.cookie = `${name}=${txt}`;
            
            const $node = $("<div>").text(txt).click(function() {
                if (confirm("Do you want to delete")) {
                    $(this).remove();
                    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                }
            });
            
            $ft_list.prepend($node);
        }
    }
    
    const cookies = document.cookie;
    if (cookies.length > 0) {
        const cookieArray = cookies.split(";");
        cookieArray.forEach(function(element) {
            const $node = $("<div>").text(element.split("=")[1]).click(function() {
                if (confirm("Do you want to delete")) {
                    $(this).remove();
                    document.cookie = element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                }
            });
            $ft_list.prepend($node);
        });
    }
    
    
    $("#newTodo").click(createTodo);
  });