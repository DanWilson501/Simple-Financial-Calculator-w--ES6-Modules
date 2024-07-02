import { calculateInterest } from 'interestRate.js';

document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('interest-principal').value);
    const rate = parseFloat(document.getElementById('interest-rate').value);
    const time = parseFloat(document.getElementById('interest-time').value);
    const result = calculateInterest(principal, rate, time);

    console.log('Interest Calculation Inputs:', { principal, rate, time });
});