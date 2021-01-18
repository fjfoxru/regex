import Validator from '../validator';

test('Логин только из букв и цифр', () => {
  const testValid = new Validator();
  const testUser = testValid.validateUsername('user2u2s4er')

  expect(testUser).toBe(true);
});

test('Логин не валидный, если есть символ', () => {
  const testValid = new Validator();
  const testUser = testValid.validateUsername('use!r')

  expect(testUser).toBe(false);
});

test('Логин не валидный, если цифра в конце', () => {
  const testValid = new Validator();
  const testUser = testValid.validateUsername('user4')

  expect(testUser).toBe(false);
});

test('Логин не валидный, если цифра первая', () => {
  const testValid = new Validator();
  const testUser = testValid.validateUsername('3user')

  expect(testUser).toBe(false);
});

test('Нельзя поставить больше 3 цифр подряд', () => {
  const testValid = new Validator();
  const testUser = testValid.validateUsername('u445553ser')

  expect(testUser).toBe(false);
});
