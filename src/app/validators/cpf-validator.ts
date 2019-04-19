import { AbstractControl, Validators } from '@angular/forms';

export function cpfValidator() {
    return (control: AbstractControl): Validators => {
        const standardError = { cpfNotValid: true };
        const cpf = control.value;
        if (!cpf) {
            return standardError;
        }
        let numbers, digits, sum, i, result, hasOnlyEqualDigits = true;
        if (cpf.length < 11) {
            return standardError;
        }

        for (i = 0; i < cpf.length - 1; i++) {
            if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
                hasOnlyEqualDigits = false;
                break;
            }
        }

        if (hasOnlyEqualDigits) {
            return standardError;
        }

        numbers = cpf.substring(0, 9);
        digits = cpf.substring(9);
        sum = 0;
        for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
        }

        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        if (result !== Number(digits.charAt(0))) {
            return standardError;
        }
        numbers = cpf.substring(0, 10);
        sum = 0;

        for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
        }
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        if (result !== Number(digits.charAt(1))) {
            return standardError;
        }
        return null;
    };
}