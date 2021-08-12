const camelCase = function(input) {
  let finalResult = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      finalResult.push(input[i]);
    } else if (input[i] === " ") {
      finalResult.push(input[i+1].toUpperCase())
      i++;
    }
  } return finalResult.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));