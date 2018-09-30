module.exports = function check(str, bracketsConfig) {
  // your solution
  if(str.length % 2 !==0) return false;
  let strToArray = str.split('');
  let stackOfIndexes = [];
  let openBrackets = [];
  let closeBrackets = [];
  let closeIndex;
  let openIndex;

  for(let i = 0;  i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < strToArray.length; i++) {
     openIndex = openBrackets.indexOf(strToArray[i]);
     if (openIndex !== -1 ) {
         if(stackOfIndexes[stackOfIndexes.length - 1] == openIndex 
          && openBrackets[openIndex] == closeBrackets[openIndex]) {
            stackOfIndexes.pop();
            continue;
         }
         stackOfIndexes.push(openIndex);
         continue;
     }

     closeIndex = closeBrackets.indexOf(strToArray[i]);
     if (closeIndex !== -1) {
         openIndex = stackOfIndexes.pop();
         if (closeIndex !== openIndex) {
             return false;
         }
     }
  }

  if (stackOfIndexes.length % 2 == 0 && stackOfIndexes.length !== 0 ) {
    for (let i = 0; i < stackOfIndexes.length; i += 2) {
      if(stackOfIndexes[i] !== stackOfIndexes[i+1]) {
        return false;
      }
    }
    return true;
  }

  if (stackOfIndexes.length !== 0) {
      return false;
  }
  return true;
}

