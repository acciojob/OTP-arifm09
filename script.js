let codeContainer = document.querySelector(".code-container");
let codes = document.querySelectorAll(".code");


codes.forEach( (code,index) =>{
 code.addEventListener('input', () => {
	   code.classList.add('focused');
        if (index < 5 && code.value.length === 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && code.value.length === 0) {
            codes[index - 1].focus();
        }
    });

    code.addEventListener('focus', () => {
        code.classList.add('focused');
    });

    code.addEventListener('blur', () => {
        code.classList.remove('focused');
    });
})
