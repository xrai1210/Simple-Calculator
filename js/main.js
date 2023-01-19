let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button');

buttons.forEach(items => {

    items.onclick = () => {
        if (items.id == 'clear') {
            display.innerText = " ";
        } else if (items.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && items.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && items.id == 'equal') {
            display.innerText = "Error!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += items.id;
        }
    }
});