// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// phone number
test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber("(111)222-3333")).toBe(true);
  });

  test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber("(444)555-6666")).toBe(true);
  });

  test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber("(444)")).toBe(false);
  });

  test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber("(444)555")).toBe(false);
  });

  // email
  test('test for valid emails', () => {
    expect(functions.isEmail("abcde@gmail.com")).toBe(true);
  });

  test('test for valid emails', () => {
    expect(functions.isEmail("abcde@yahoo.com")).toBe(true);
  });

  test('test for valid emails', () => {
    expect(functions.isEmail("abcde@yahoo")).toBe(false);
  });

  test('test for valid emails', () => {
    expect(functions.isEmail("@yahoo")).toBe(false);
  });

  // password
  test('test for valid password', () => {
    expect(functions.isStrongPassword("a123456")).toBe(true);
  });

  test('test for valid password', () => {
    expect(functions.isStrongPassword("aa0000000000")).toBe(true);
  });

  test('test for valid password', () => {
    expect(functions.isStrongPassword("00")).toBe(false);
  });

  test('test for valid password', () => {
    expect(functions.isStrongPassword("-------")).toBe(false);
  });

  // dates
  test('test for valid dates', () => {
    expect(functions.isDate("11/11/2021")).toBe(true);
  });

  test('test for valid dates', () => {
    expect(functions.isDate("1/1/2021")).toBe(true);
  });

  test('test for valid dates', () => {
    expect(functions.isDate("112021")).toBe(false);
  });

  test('test for valid dates', () => {
    expect(functions.isDate("1")).toBe(false);
  });

  // hex codes
  test('test for valid hex code', () => {
    expect(functions.isHexColor("#000000")).toBe(true);
  });

  test('test for valid hex code', () => {
    expect(functions.isHexColor("#f00")).toBe(true);
  });


  test('test for valid hex code', () => {
    expect(functions.isHexColor("ppp")).toBe(false);
  });

  test('test for valid hex code', () => {
    expect(functions.isHexColor("oooooo")).toBe(false);
  });