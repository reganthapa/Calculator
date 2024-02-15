let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                alert("Invalid expression");
                string = "";
                input.value = "";
            }
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});