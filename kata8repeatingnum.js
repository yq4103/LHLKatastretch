const repeatNumbers = function(data) {
  let num = [];
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      num.push(data[i][0]);
      count += data[i][0];
    } if (count >= data[i][1] && (i !== data.length-1)) {
      num.push(",");
    }
  } return num.join("");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));