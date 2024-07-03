import { calculateInterest } from './modules/interestRate.js';
import { calculateLoanPayment } from './modules/loanPayment.js';
import { calculateInvestmentReturn } from './modules/investmentReturn.js';
import { validateInputs } from './modules/validate.js';

document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('interest-principal').value);
    const rate = parseFloat(document.getElementById('interest-rate').value);
    const time = parseFloat(document.getElementById('interest-time').value);

    console.log('Interest Calculation Inputs:', { principal, rate, time });

    if (validateInputs([principal, rate, time])) {
        const result = calculateInterest(principal, rate, time);
        console.log('Interest Calculation Result:', result);
        document.getElementById('interest-result').innerText = `Interest: ${result}`;
    } else {
        alert('Please enter valid inputs for Interest Calculation.');
    }
});

document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('loan-principal').value);
    const rate = parseFloat(document.getElementById('loan-rate').value) / 100 / 12;
    const time = parseFloat(document.getElementById('loan-time').value) * 12;

    console.log('Loan Payment Calculation Inputs:', { principal, rate, time });

    if (validateInputs([principal, rate, time])) {
        const result = calculateLoanPayment(principal, rate, time);
        console.log('Loan Payment Calculation Result:', result);
        document.getElementById('loan-result').innerText = `Monthly Payment: ${result}`;
    } else {
        alert('Please enter valid inputs for Loan Payment Calculation.');
    }
});

document.getElementById('calculate-investment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('investment-principal').value);
    const rate = parseFloat(document.getElementById('investment-rate').value) / 100;
    const time = parseFloat(document.getElementById('investment-time').value);

    console.log('Investment Return Calculation Inputs:', { principal, rate, time });

    if (validateInputs([principal, rate, time])) {
        const result = calculateInvestmentReturn(principal, rate, time);
        console.log('Investment Return Calculation Result:', result);
        document.getElementById('investment-result').innerText = `Future Value: ${result}`;
    } else {
        alert('Please enter valid inputs for Investment Return Calculation.');
    }
});