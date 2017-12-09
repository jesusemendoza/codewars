function validatePIN (pin) {
    let pinArr = pin.toString().split('');
     console.log('pinArr.length')
    if (/^[0-9]{4,6}$/.test(pin) ) { 
        if(pinArr.length === 4 || pinArr.length === 6) {
           return true;
        } else {return false};
    }
     else {return false}
    }