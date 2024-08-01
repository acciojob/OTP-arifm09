let codeContainer = document.querySelector(".code-container");
let codes = document.querySelectorAll(".code");


codes.forEach( (code,index) =>{

	  code.addEventListener("input", () => {
    if (index < 5 && code.value.length == 1) {
      codes[index + 1].focus();
      codes[index + 1].classList.add("focused");
      code.classList.remove("focused");
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key == "Backspace" && index > 0 && code.value.length == 0) {
      codes[index - 1].focus();
      codes[index - 1].classList.add("focused");
      code.classList.remove("focused");
    }
  });
	
    code.addEventListener('blur', () => {
        code.classList.remove('focused');
    });
})
