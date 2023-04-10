// 1 Функция //
const isLessOrEqual = (string, length) => string.length <= length;
isLessOrEqual('проверяемая строка', 20);

// 2 Функция //
const isCheckingPalindromes = (string) => {
  const sourceString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = sourceString.length - 1; i >= 0; i--) {
    reverseString += sourceString.at(i);
  }
  return sourceString === reverseString;
};
isCheckingPalindromes('Кекс');

// 3 Функция //
const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('2023 год');
// 4 Функция //
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return actualPad <= 0
    ? string
    : pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('qwerty', 4, '0');
