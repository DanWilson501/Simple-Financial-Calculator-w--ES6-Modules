export function validateInputs(inputs) {
    return inputs.every(input => !isNaN(input) && input > 0);
}