export function calculateInvestmentReturn(principal, rate, time) {
    return principal * Math.pow(1 + rate, time);
}
