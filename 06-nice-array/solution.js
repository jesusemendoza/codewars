function isNice(arr){
    let isN = true;
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++){
      if (!(arr.includes(arr[i]-1) || arr.includes(arr[i]+1))){
        isN = false;
        }
      }
    } else {isN = false;}
    return isN;
  }