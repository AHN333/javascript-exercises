const reverseString = function(input) {
    let backwards = "";
    for (let i=input.length-1; i>=0; i--){
        backwards += input[i];
    }
    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
