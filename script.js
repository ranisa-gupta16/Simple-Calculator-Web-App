const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            display.textContent = eval(display.textContent);
        } else if (button.textContent === 'C') {
            display.textContent = '0';
        } else {
            if (display.textContent === '0') {
                display.textContent = button.textContent;
            } else {
                display.textContent += button.textContent;
            }
        }
    });
});
