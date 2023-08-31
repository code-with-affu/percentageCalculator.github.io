let obtain = document.getElementById("obtain");
let total = document.getElementById("total");
let percentBtn = document.getElementById("percentBtn");
let percentOutput = document.querySelector(".percentOutput");
let outputBox = document.querySelector(".outputBox")
let formula;

function calper(eobtain, etotal) {
    formula = eobtain / etotal * 100;
    return formula;
}

percentBtn.addEventListener('click',() => {
    let ouput_var =  calper(obtain.value, total.value);
    percentOutput.style.display = "flex";
    outputBox.innerHTML = Math.round(ouput_var);
})