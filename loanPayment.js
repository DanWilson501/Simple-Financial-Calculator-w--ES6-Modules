export function calculateLoanPayment(principal, rate, time) {
    return principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
}