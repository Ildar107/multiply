module.exports = function multiply(first, second) {
  var result = []
  var firstArr = first.split('').reverse();
  var secondArr = second.split('').reverse();
  var rest = 0;
  for(let i = 0; i < firstArr.length; i++)
  { 
    if(rest > 0)
      result.push(rest);
    rest = 0;
    for(let j = 0; j < secondArr.length; j++)
    {
      let multiplyValue = Number(firstArr[i]) * Number(secondArr[j]) + rest;
      let newValue =  multiplyValue + (result[j+i] !== undefined ? result[j+i] : 0);
      result[j+i] = newValue % 10;
      rest = Math.floor(newValue / 10);
    }
  }
    if(rest > 0)
      result.push(rest);
    return result.reverse().join(''); 
}
