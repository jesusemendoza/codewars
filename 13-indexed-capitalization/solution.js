function capitalize(s,arr){

    var arrS = s.split("");
    
    for(var i = 0; i < arr.length; i++) {
      if(arrS[arr[i]]) {
        arrS[arr[i]] = arrS[arr[i]].toUpperCase();
      }
    }
    
    arrS = arrS.join("");
    return arrS
    }