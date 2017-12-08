function insert(num){
    let numArray = [];
    let numStr = num.toString().split("");
    numArray.push(numStr[0]);
    for (i = 0; i < numStr.length-1; i++) {
      let numA = parseInt(numStr[i]);
      let numB = parseInt(numStr[i+1]);
      if (numA%2 === 1 && numB%2===1) {
        numArray.push("-",numB.toString());
      } else {
        numArray.push(numB.toString());
      }  
    }
    return numArray.join("");
  }