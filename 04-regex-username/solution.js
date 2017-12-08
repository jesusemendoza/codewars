function validateUsr(username) {
    res =  /^[a-z1-9_]{4,16}$/.test(username) 
    return res
  }