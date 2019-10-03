module.exports = function multiply(first, second) {
  var result = []
  var firstArr = first.split('').reverse();
  var secondArr = second.split('').reverse();
  var additional = 0;
  for(let i = 0; i < firstArr.length; i++)
  { 
    if(additional > 0)
      result.push(additional);
    additional = 0;
    for(let j = 0; j < secondArr.length; j++)
    {
      let multiplyValue = Number(firstArr[i]) * Number(secondArr[j]) + additional;
      let newValue =  multiplyValue + (result[j+i] !== undefined ? result[j+i] : 0);
      result[j+i] = newValue % 10;
      additional = Math.floor(newValue / 10);
    }
  }
    if(additional > 0)
      result.push(additional);
    return result.reverse().join(''); 
}
