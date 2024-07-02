import { calculateInterest } from 'interestRate.js';
import { calculateLoanPayment } from 'loanPayment.js';

document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('interest-principal').value);
    const rate = parseFloat(document.getElementById('interest-rate').value);
    const time = parseFloat(document.getElementById('interest-time').value);
    const result = calculateInterest(principal, rate, time);

    console.log('Interest Calculation Inputs:', { principal, rate, time });
});

document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('loan-principal').value);
    const rate = parseFloat(document.getElementById('loan-rate').value) / 100 / 12;
    const time = parseFloat(document.getElementById('loan-time').value) * 12;
    const result = calculateLoanPayment(principal, rate, time);

    console.log('Loan Payment Calculation Inputs:', { principal, rate, time });
});