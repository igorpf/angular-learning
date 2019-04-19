import { cpfValidator } from './cpf-validator';
import { FormControl } from '@angular/forms';

describe('CpfValidator', () => {
  it('should be a valid cpf', () => {
    const cpf = new FormControl('26527496095');
    const validator = cpfValidator();

    expect(validator(cpf)).toBeFalsy();
  });

  it('should be an invalid cpf - invalid digit combination', () => {
    const cpf = new FormControl('53649723051');
    const validator = cpfValidator();

    expect(validator(cpf)).toBeTruthy();
  });

  it('should be an invalid cpf - invalid digit combination', () => {
    const cpf = new FormControl('26527496085');
    const validator = cpfValidator();

    expect(validator(cpf)).toBeTruthy();
  });

  it('should be an invalid cpf - invalid digit combination', () => {
    const cpf = new FormControl('12345678901');
    const validator = cpfValidator();

    expect(validator(cpf)).toBeTruthy();
  });

  it('should be an invalid cpf - wrong size', () => {
    const cpf = new FormControl('1234567890');
    const validator = cpfValidator();

    expect(validator(cpf)).toBeTruthy();
  });

  it('should be an invalid cpf - contains letters', () => {
    const cpf = new FormControl('1b34567890');
    const validator = cpfValidator();

    expect(validator(cpf)).toBeTruthy();
  });

  it('should be an invalid cpf - contains the same digits', () => {
    const cpf = new FormControl('11111111111');
    const validator = cpfValidator();

    expect(validator(cpf)).toBeTruthy();
  });
});
