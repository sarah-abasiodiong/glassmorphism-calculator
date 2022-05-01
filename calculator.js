let expressionBox = document.querySelector('#exp');
let resultBox = document.querySelector('#result');
let allBtns = document.querySelectorAll('.numpad button');
allBtns.forEach(function (button) {
    button.addEventListener('click', function (){
        if(button.classList.contains('num')) {
            expressionBox.value +=button.innerText;
        }else if (button.classList.contains('opt')){
            expressionBox.value +=button.innerText;
        }else if (button.classList.contains('clear')){
            expressionBox.value ="" ;
            (resultBox.value ="");
        }else if (button.classList.contains('plus-minus')){
            expressionBox.value =`-${expressionBox}`;
        }else if (button.classList.contains('equal')){ 
            resultBox.value = eval(expressionBox.value);
            expressionBox.value ="" && expressionBox.focus();
        }
    
    })
})