const urlDecode = function(text) {
  let finalOutput = {};
  let newArr = text.replace(/%20/g, ' ').split(/[&=]/);

  for (let i = 0; i < newArr.length; i += 2) {
    finalOutput [newArr[i]] = newArr[i + 1];
    } return finalOutput;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);