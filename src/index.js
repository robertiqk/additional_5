module.exports = function check(str, bracketsConfig) {

  let strToArray = str.split('');
  const stackOfIndexes = [];
  const openBrackets = [];
  const closeBrackets = [];
  let closeIndex = 0;
  let openIndex = 0;

  for(let i = 0, length = bracketsConfig.length;  i < length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0, length = strToArray.length; i < length; i++) {
     openIndex = openBrackets.indexOf(strToArray[i]);
     
     if (!!(~openIndex)) {
         if(stackOfIndexes[stackOfIndexes.length - 1] === openIndex 
          && openBrackets[openIndex] === closeBrackets[openIndex]) {
            stackOfIndexes.pop();
            continue;
         }
         stackOfIndexes.push(openIndex);
         continue;
     }

     closeIndex = closeBrackets.indexOf(strToArray[i]);

     if (!!(~closeIndex)) {
         openIndex = stackOfIndexes.pop();
         if (closeIndex !== openIndex) {
             return false;
         }
     }
  }

  return stackOfIndexes.length === 0;
}

/*
  let tempStr = str;

  for(let strKey = tempStr.length; strKey >= 0; strKey--) {
    for(let bracketKey = 0; bracketKey < bracketsConfig.length; bracketKey++) {
      if(tempStr[strKey] === bracketsConfig[bracketKey][0]) {
        tempStr = tempStr.replace(bracketsConfig[bracketKey].join(''), '');
      }
    }
  }

  return tempStr === '';
*/