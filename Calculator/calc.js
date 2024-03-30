function display(param) {
    let inputElement = document.querySelector('.input');
    inputElement.value += param;
}

function calculate() {
    let inputElement = document.querySelector('.input');
    try {
        let expression = inputElement.value;
        inputElement.value = Function('return ' + expression)();
    } catch (error) {
        inputElement.value = 'Error';
    }
}

function clear_screen() {
    document.querySelector('.input').value = '';
}


function newoperator()
{
    if(document.querySelector('.input').value=='')
    {
        alert("please Enter some value");
    }
    else{
        let num4=document.querySelector('.input').value;
        let newvalue=`(-${num4})*`;
        document.querySelector('.input').value=newvalue;
        let Newvalue = eval(newvalue);
        document.querySelector('.input').value = Newvalue;
    }
}

function deletelast() {
    let inputElement = document.querySelector('.input');
    let expression = inputElement.value;
    if (expression) {
        inputElement.value = expression.slice(0, -1);
    }
}






