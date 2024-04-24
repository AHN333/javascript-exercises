const removeFromArray = function(arr, ...args) {
    let result = [];

    for (let i=0; i<arr.length; i++){
        let exists = false;
        for (let j=0; j<args.length; j++){
            //element to remove exists in array
            if (arr[i] === args[j]){
                exists = true;
                break;
            }
        }
        //no elements to remove, push
        if (!exists){
            result.push(arr[i]);
        }
        
    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
