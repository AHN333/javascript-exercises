const repeatString = function(str, multiple) {
    let result = ''
    if (multiple < 0){
        return "ERROR"
    }
    for (let i=0; i<multiple; i++){
        result = result + str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
