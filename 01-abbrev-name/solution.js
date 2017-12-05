function abbrevName(name){
    let first = name.split(' ').slice(0,-1).join(' ');
      let last = name.split(' ').slice(-1).join(' ');
      let firstArray = first.split('');
      let lastArray = last.split('');
      return `${firstArray[0].toUpperCase()}.${lastArray[0].toUpperCase()}`
    }