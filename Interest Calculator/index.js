

// COMPOUND INTEREST CALCULATOR



function calculateCompoundInterest() {

    const totalAmount = document.getElementById('total');
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let time = Number(timeInput.value);

    const result = principal * Math.pow((1 + rate), time);
    totalAmount.textContent = result.toFixed(2).toLocaleString('en-US');
}

