function solution(str){
    let newArray = str.split('');
    let revArray = [];
    for (i = newArray.length; i > -1; i--) {
      revArray.push(newArray[i]);
    }
    return revArray.join('');
  }