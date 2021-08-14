const denominations = {
  twentyDollar: 2000,
  tenDollar: 1000,
  fiveDollar: 500,
  twoDollar: 200,
  oneDollar: 100,
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1
}

const calculateChange = function(total, cash) {
  let cashBack = {};
  let change = cash - total;
  for (let dollars in denominations) {
    if (denominations[dollars] < change) {
      cashBack[dollars] = (Math.floor(change/denominations[dollars]));
      change = change - cashBack[dollars] * denominations[dollars];
    }
  } return cashBack;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));