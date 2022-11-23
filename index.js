// Code your solutions in this file
function writeCards(Arr, event) {
  const newArr = [];
  for (let i = 0; i < Arr.length; i++) {
    newArr[i] = `Thank you, ${Arr[i]}, for the wonderful ${event} gift!`;
  }
  return newArr;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
