function capitalize(s){
    let pArr = [];
    let qArr = [];
    let sArr = s.split('');
    
    for (i = 0; i < sArr.length; i++) {
      
      if (i % 2 === 0) {
        pArr.push(sArr[i].toUpperCase())
        qArr.push(sArr[i].toLowerCase())
      } else {
        pArr.push(sArr[i].toLowerCase())
        qArr.push(sArr[i].toUpperCase())
      }
    }
    return[pArr.join(''), qArr.join('')];
  };