const buttonsEl = document.querySelectorAll('button');
const input = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const bottonValue = buttonsEl[i].textContent;
        if (bottonValue === "AC") {
            clearResult();
        } else if (bottonValue === " = ") {
            calculateResult();
        } else if (bottonValue === "C") {
            input.value = input.value.toString().slice(0, -1);
        }
        else {
            appendValue(bottonValue);
        }
    })
}
function clearResult() {
    input.value = "";
}
function calculateResult() {
    input.value = eval(input.value);
}
function appendValue(bottonValue) {
    input.value += bottonValue;
}