function formatWords(words){
    if (words === null)return '';

    let empty =[words[0]];    
    
    if ( words.length === 0){
      var string = "";
      return string;
      }
      words = words.filter(v => v); 
     if (words.length ===1){
      return words.toString();
     }
      for (var i = 1; i< words.length ; i++){
        if(i === words.length-1){
          empty[i]= " and "+words[i] 
        } else {
        empty[i]= ", " + words[i]
        } 
    }
      return empty.join('');
}