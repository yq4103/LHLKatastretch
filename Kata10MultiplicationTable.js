const multiplicationTable = function(maxValue) {
  let multiArr = '';
  for (let i = 1; i < maxValue+1; i++) {
    for (let j = 1; j < maxValue+1; j++) {
      multiArr = (multiArr + (i * j)) + " ";
    } multiArr += "\n";
  }return multiArr;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));