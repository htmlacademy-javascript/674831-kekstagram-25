function getRandomNumber(firstNumber, lastNumber) {
  if (firstNumber >= 0 && lastNumber > firstNumber) {
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
  }
  return ('Напишите что-нибудь другое');
}

getRandomNumber(5, 8);

//Ссылки на источники:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number


function checkCommentLength(message, maxLength) {
  const messageLength = message.length;

  return (messageLength <= maxLength);
}

checkCommentLength('приветик', 140);
