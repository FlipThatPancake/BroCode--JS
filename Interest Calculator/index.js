

// COMPOUND INTEREST CALCULATOR

const totalAmount = document.getElementById('total-amount');
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const yearsInput = document.getElementById('years');

totalAmount.textContent = (0).toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD', // or another currency code
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function calculateCompoundInterest() {
    
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);

    if (principal <= 0 || rate <= 0 || years <= 0) {
        alert('Please enter positive values for principal, rate, and time.');
        principal = rate = years = 0;
        principalInput.value = rateInput.value = yearsInput.value = '';
        totalAmount.textContent = '0.00'.toLOcaleString(undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: 'currency',
                currency: undefined
            });
        return;
    }

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert('Please enter valid numbers for principal, rate, and time.');
        principal = rate = years = 0;
        principalInput.value = rateInput.value = yearsInput.value = '';
        totalAmount.textContent = '0.00'.toLOcaleString(undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: 'currency',
                currency: undefined
            });;
        return;
    }

    const result = principal * Math.pow((1 + rate), years);
    totalAmount.textContent = result.toLocaleString(undefined,
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'USD'
        });
    console.log(result)
}

const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', calculateCompoundInterest);