const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    }else{
        alert("Negative value not allowed");
    }
}); 

incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 20) {
        alert("20+ value not allowed");
    }else{
        displayValue.innerText = value + 1;
    }
});

resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});
