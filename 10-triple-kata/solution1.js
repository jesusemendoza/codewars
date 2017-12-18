function filter_list(l) { 
    list = l.filter(ele => typeof(ele) === 'number')
    return list;
    }