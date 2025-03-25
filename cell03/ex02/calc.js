document.addEventListener('DOMContentLoaded', function() {
    const calcForm = document.getElementById('calcForm');
    
    
    setInterval(function() {
        alert('Please, use me...');
    }, 30000);
    
    calcForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const leftInput = document.getElementById('leftInput').value;
        const rightInput = document.getElementById('rightInput').value;
        const operator = document.getElementById('operator').value;
        
        
        if (!isPositiveInteger(leftInput) || !isPositiveInteger(rightInput)) {
            alert('Error :(');
            return;
        }
        
        const leftNum = parseInt(leftInput);
        const rightNum = parseInt(rightInput);
        
        
        if ((operator === '/' || operator === '%') && rightNum === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }
        
       
        let result;
        switch(operator) {
            case '+':
                result = leftNum + rightNum;
                break;
            case '-':
                result = leftNum - rightNum;
                break;
            case '*':
                result = leftNum * rightNum;
                break;
            case '/':
                result = leftNum / rightNum;
                break;
            case '%':
                result = leftNum % rightNum;
                break;
            default:
                result = 'Invalid operator';
        }
        
       
        alert(`Result: ${result}`);
        console.log(`Result: ${result}`);
    });
    
    function isPositiveInteger(value) {
        return /^\d+$/.test(value) && parseInt(value) >= 0;
    }
});